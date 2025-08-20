"use client";
import Image from "next/image";
import { ArrowRight, Flame, Search, Star, TrendingUp, Zap, ShoppingCart, ChevronRight } from "lucide-react";

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
      likes24h: 2340
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
      likes24h: 1820
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
    { name: "Electronics", growth: "+24%", color: "bg-green-100 text-green-800" },
    { name: "Fashion", growth: "+18%", color: "bg-orange-100 text-orange-800" },
    { name: "Home & Kitchen", growth: "+15%", color: "bg-blue-100 text-blue-800" },
    { name: "Books", growth: "+12%", color: "bg-purple-100 text-purple-800" }
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
    { label: "Sales Growth", value: "+35%", icon: TrendingUp, color: "text-orange-500" },
    { label: "Views Today", value: "124K", icon: Search, color: "text-blue-500" },
    { label: "Likes Today", value: "8.4K", icon: Star, color: "text-green-500" },
    { label: "Avg Rating", value: "4.8", icon: Zap, color: "text-purple-500" },
  ];

  const ProductCard = ({ product, index }) => (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-transparent">
      <div className="relative aspect-square">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col items-start gap-2">
          {index < 3 && (
            <span className="bg-gradient-to-r from-orange-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
              #{index + 1} TRENDING
            </span>
          )}
          {product.isOnSale && (
            <span className="bg-gradient-to-r from-blue-600 to-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
              SALE
            </span>
          )}
        </div>
        
        <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/80 text-white text-xs px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/10">
          <Flame size={14} className="text-orange-400" />
          <span className="font-medium">{product.trendScore}</span>
        </div>
      </div>
      
      <div className="p-5 space-y-2">
        <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">{product.category}</span>
        <h3 className="font-semibold text-gray-900 text-lg line-clamp-1 group-hover:text-blue-600 transition-colors">
          {product.name}
        </h3>
        
        <div className="flex items-center gap-1">
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
          <span className="text-xs text-gray-500 ml-1">({product.reviewCount.toLocaleString()})</span>
        </div>

        <div className="flex items-center justify-between mt-3">
          <div className="flex items-baseline gap-2">
            <span className="font-bold text-gray-900 text-xl">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-400 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          <button className="p-2.5 rounded-full bg-blue-50 hover:bg-blue-100 transition-colors shadow-sm hover:shadow-md group-hover:bg-blue-100">
            <ShoppingCart className="w-5 h-5 text-blue-600" />
          </button>
        </div>
      </div>

      <div className="px-5 pb-4">
        <div className="text-xs text-gray-500 flex justify-between">
          <span>{product.views24h.toLocaleString()} views</span>
          <span>{product.likes24h.toLocaleString()} likes</span>
          <span className="text-blue-600 font-medium">24h</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      {/* Hero Section */}
      <div className="text-center space-y-5">
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-orange-50 to-blue-50 text-orange-600 text-sm font-bold shadow-sm">
          <Flame className="w-5 h-5" fill="currentColor" />
          TRENDING NOW
        </div>
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent tracking-tight">
          What's Hot Right Now
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover the most popular products based on real-time engagement and purchases
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition">
            <div className={`${stat.color} mb-4`}>
              <stat.icon className="w-8 h-8" strokeWidth={1.5} />
            </div>
            <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
            <div className="text-sm text-gray-500 font-medium mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Categories */}
      <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold flex items-center gap-3">
            <TrendingUp className="w-6 h-6 text-orange-500" strokeWidth={1.5} />
            <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
              Trending Categories
            </span>
          </h2>
          <button className="text-sm font-medium flex items-center text-blue-600 hover:text-blue-800 transition-colors">
            View All <ChevronRight className="ml-1 w-4 h-4" />
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {trendingCategories.map((c, i) => (
            <div key={i} className="flex items-center justify-between p-5 rounded-xl border border-gray-100 hover:border-blue-200 transition-colors hover:shadow-sm">
              <span className="font-medium text-gray-700">{c.name}</span>
              <span className={`text-sm font-bold ${c.color} px-3 py-1 rounded-full`}>
                {c.growth}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Hot Products */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold flex items-center gap-3">
            <Flame className="w-6 h-6 text-orange-500" fill="currentColor" />
            <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
              Hot Products
            </span>
          </h2>
          <button className="text-sm font-medium flex items-center text-blue-600 hover:text-blue-800 transition-colors">
            View All <ChevronRight className="ml-1 w-4 h-4" />
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingProducts.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>

      {/* Searches */}
      <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold flex items-center gap-3">
            <Search className="w-6 h-6 text-blue-500" strokeWidth={1.5} />
            <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
              Trending Searches
            </span>
          </h2>
          <button className="text-sm font-medium flex items-center text-blue-600 hover:text-blue-800 transition-colors">
            View All <ChevronRight className="ml-1 w-4 h-4" />
          </button>
        </div>
        <div className="flex flex-wrap gap-3">
          {trendingSearches.map((search, i) => (
            <button
              key={search}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                i < 3 
                  ? "bg-gradient-to-r from-orange-50 to-blue-50 border border-orange-200 text-orange-600 shadow-sm"
                  : "bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-700"
              }`}
            >
              {i < 3 && <span className="font-bold">#{i+1}</span>} {search}
            </button>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="relative bg-gradient-to-r from-blue-600 to-orange-500 text-white p-12 rounded-3xl overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-white rounded-full"></div>
          <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-white rounded-full"></div>
        </div>
        <div className="relative max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center bg-white/20 p-3 rounded-full mb-6">
            <Zap className="w-8 h-8" fill="white" />
          </div>
          <h3 className="text-4xl font-extrabold mb-4">Don't Miss Out!</h3>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of happy customers discovering amazing deals on trending products
          </p>
          <button className="px-8 py-4 bg-white text-blue-600 rounded-xl font-bold hover:bg-gray-50 transition flex items-center gap-2 mx-auto shadow-lg hover:shadow-xl">
            Shop Trending Now
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}