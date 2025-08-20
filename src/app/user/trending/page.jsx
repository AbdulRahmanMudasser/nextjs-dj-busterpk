"use client";
import Image from "next/image";
import { ArrowRight, Flame, Search, Star, TrendingUp, Zap, ShoppingCart, ChevronRight, Eye, Heart, Clock } from "lucide-react";

export default function Trending() {
  const trendingProducts = [
    {
      id: "1",
      name: "iPhone 15 Pro Max 256GB",
      price: 1199.99,
      originalPrice: 1299.99,
      rating: 4.8,
      reviewCount: 2847,
      image: "/phone.jpeg",
      category: "Electronics",
      isOnSale: true,
      inStock: true,
      trendScore: 98,
      views24h: 15420,
      likes24h: 2340,
      isHot: true,
      timeLeft: "12:45:33"
    },
    {
      id: "2",
      name: "Premium Cotton T-Shirt",
      price: 29.99,
      originalPrice: 39.99,
      rating: 4.5,
      reviewCount: 1203,
      image: "/lawn.jpg",
      category: "Fashion",
      isOnSale: true,
      inStock: true,
      trendScore: 92,
      views24h: 8750,
      likes24h: 1820,
      isHot: true,
      timeLeft: "06:22:17"
    },
    {
      id: "3",
      name: "Smart Coffee Maker Pro",
      price: 149.99,
      rating: 4.7,
      reviewCount: 856,
      image: "/Fridge.jpg",
      category: "Home & Kitchen",
      inStock: true,
      trendScore: 87,
      views24h: 6230,
      likes24h: 980
    },
    {
      id: "4",
      name: "The Art of Programming",
      price: 49.99,
      originalPrice: 59.99,
      rating: 4.9,
      reviewCount: 445,
      image: "/books.jpg",
      category: "Books & Stationery",
      isOnSale: true,
      inStock: true,
      trendScore: 85,
      views24h: 4560,
      likes24h: 670
    }
  ];

  const trendingCategories = [
    { name: "Electronics", growth: "+24%", color: "bg-green-100 text-green-800", icon: "📱" },
    { name: "Fashion", growth: "+18%", color: "bg-orange-100 text-orange-800", icon: "👕" },
    { name: "Home & Kitchen", growth: "+15%", color: "bg-blue-100 text-blue-800", icon: "🏠" },
    { name: "Books", growth: "+12%", color: "bg-purple-100 text-purple-800", icon: "📚" }
  ];

  const trendingSearches = [
    "iPhone 15 Pro",
    "Wireless Headphones",
    "Smart Watch",
    "Gaming Laptop",
    "Air Fryer",
    "Yoga Mat",
    "Coffee Grinder",
    "LED Strip Lights"
  ];

  const stats = [
    { label: "Sales Growth", value: "+35%", icon: TrendingUp, color: "text-orange-500", bg: "bg-orange-50" },
    { label: "Views Today", value: "124K", icon: Eye, color: "text-blue-500", bg: "bg-blue-50" },
    { label: "Likes Today", value: "8.4K", icon: Heart, color: "text-pink-500", bg: "bg-pink-50" },
    { label: "Avg Rating", value: "4.8", icon: Star, color: "text-purple-500", bg: "bg-purple-50" },
  ];

  const ProductCard = ({ product, index }) => (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100">
      <div className="relative aspect-square">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col items-start gap-2">
          {index < 3 && (
            <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold px-3 py-2 rounded-xl shadow-lg flex items-center gap-1">
              <Flame size={14} className="fill-white" />
              #{index + 1} TRENDING
            </span>
          )}
          {product.isOnSale && (
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 text-white text-xs font-bold px-3 py-2 rounded-xl shadow-lg">
              SALE
            </span>
          )}
          {product.isHot && (
            <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs font-bold px-3 py-2 rounded-xl shadow-lg flex items-center gap-1">
              <Zap size={14} className="fill-white" />
              HOT
            </span>
          )}
        </div>
        
        <div className="absolute top-4 right-4 flex items-center gap-1 bg-black/80 text-white text-xs px-3 py-2 rounded-xl backdrop-blur-sm border border-white/10">
          <Flame size={14} className="text-orange-400" />
          <span className="font-bold">{product.trendScore}</span>
        </div>

        {product.isHot && (
          <div className="absolute bottom-4 left-4 bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs font-bold px-3 py-2 rounded-xl flex items-center gap-1">
            <Clock size={12} />
            {product.timeLeft}
          </div>
        )}
      </div>
      
      <div className="p-5 space-y-3">
        <span className="text-xs font-medium text-blue-600 uppercase tracking-wider bg-blue-50 px-2 py-1 rounded-md">
          {product.category}
        </span>
        <h3 className="font-semibold text-blue-900 text-lg line-clamp-2 group-hover:text-blue-700 transition-colors">
          {product.name}
        </h3>
        
        <div className="flex items-center gap-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                fill={i < Math.floor(product.rating) ? "#f59e0b" : "none"}
                className={i < Math.floor(product.rating) ? "text-amber-400" : "text-gray-300"}
              />
            ))}
          </div>
          <span className="text-sm text-blue-600">({product.reviewCount.toLocaleString()})</span>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-baseline gap-2">
            <span className="font-bold text-blue-900 text-xl">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-400 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          <button className="p-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 transition-all shadow-md hover:shadow-lg">
            <ShoppingCart className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      <div className="px-5 pb-4">
        <div className="text-xs text-blue-600 flex justify-between bg-blue-50 px-3 py-2 rounded-lg">
          <span className="flex items-center gap-1">
            <Eye size={12} />
            {product.views24h.toLocaleString()}
          </span>
          <span className="flex items-center gap-1">
            <Heart size={12} />
            {product.likes24h.toLocaleString()}
          </span>
          <span className="font-medium">24h</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Hero Section */}
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 text-white text-sm font-bold shadow-lg">
            <Flame className="w-5 h-5" fill="currentColor" />
            TRENDING NOW
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent tracking-tight">
            What's Hot Right Now
          </h1>
          <p className="text-xl text-blue-700 max-w-3xl mx-auto">
            Discover the most popular products based on real-time engagement and purchases
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-blue-100 shadow-lg hover:shadow-xl transition">
              <div className={`${stat.bg} w-12 h-12 rounded-xl flex items-center justify-center mb-4`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} strokeWidth={1.5} />
              </div>
              <div className="text-3xl font-bold text-blue-900">{stat.value}</div>
              <div className="text-sm text-blue-600 font-medium mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Categories */}
        <div className="bg-white rounded-2xl p-8 border border-blue-100 shadow-lg">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold flex items-center gap-3 text-blue-900">
              <TrendingUp className="w-6 h-6 text-blue-600" strokeWidth={1.5} />
              Trending Categories
            </h2>
            <button className="text-sm font-medium flex items-center text-blue-600 hover:text-blue-800 transition-colors">
              View All <ChevronRight className="ml-1 w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trendingCategories.map((c, i) => (
              <div key={i} className="flex items-center justify-between p-6 rounded-xl border border-blue-200 bg-blue-50 hover:border-blue-300 transition-all hover:shadow-md">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{c.icon}</span>
                  <span className="font-semibold text-blue-900">{c.name}</span>
                </div>
                <span className={`text-sm font-bold ${c.color} px-3 py-1 rounded-full`}>
                  {c.growth}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Hot Products */}
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold flex items-center gap-3 text-blue-900">
              <Flame className="w-6 h-6 text-orange-500" fill="currentColor" />
              Hot Products
            </h2>
            <button className="text-sm font-medium flex items-center text-blue-600 hover:text-blue-800 transition-colors">
              View All <ChevronRight className="ml-1 w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {trendingProducts.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </div>

        {/* Searches */}
        <div className="bg-white rounded-2xl p-8 border border-blue-100 shadow-lg">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold flex items-center gap-3 text-blue-900">
              <Search className="w-6 h-6 text-blue-600" strokeWidth={1.5} />
              Trending Searches
            </h2>
            <button className="text-sm font-medium flex items-center text-blue-600 hover:text-blue-800 transition-colors">
              View All <ChevronRight className="ml-1 w-4 h-4" />
            </button>
          </div>
          <div className="flex flex-wrap gap-4">
            {trendingSearches.map((search, i) => (
              <button
                key={search}
                className={`px-5 py-3 rounded-xl text-sm font-medium transition-all shadow-sm hover:shadow-md ${
                  i < 3 
                    ? "bg-gradient-to-r from-blue-600 to-blue-800 text-white border border-blue-700"
                    : "bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-700"
                }`}
              >
                {i < 3 && <span className="font-bold mr-1">#{i+1}</span>} {search}
              </button>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-12 rounded-3xl overflow-hidden text-center shadow-2xl">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -right-20 -top-20 w-80 h-80 bg-white rounded-full"></div>
            <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-white rounded-full"></div>
          </div>
          <div className="relative max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center bg-white/20 p-4 rounded-2xl mb-6">
              <Zap className="w-10 h-10" fill="white" />
            </div>
            <h3 className="text-4xl font-extrabold mb-4">Don't Miss Out!</h3>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of happy customers discovering amazing deals on trending products
            </p>
            <button className="px-8 py-4 bg-white text-blue-600 rounded-xl font-bold hover:bg-gray-50 transition-all flex items-center gap-2 mx-auto shadow-2xl hover:shadow-3xl transform hover:-translate-y-1">
              Shop Trending Now
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}