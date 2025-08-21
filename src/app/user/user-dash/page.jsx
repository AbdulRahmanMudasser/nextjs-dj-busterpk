"use client"
import Image from "next/image"
import heroBanner from "../../../../public/1.jpeg";
import iphoneImage from "../../../../public/phone.jpeg";
import tshirtImage from "../../../../public/jumpers.webp";
import coffeeMakerImage from "../../../../public/Fridge.jpg";
import bookImage from "../../../../public/books.jpg";
import { 
  TrendingUp, 
  Zap, 
  Shield, 
  Truck, 
  Star,
  ArrowRight,
  Smartphone,
  Shirt,
  Home,
  BookOpen,
  Flame,
  ChevronRight,
  ShoppingBag,
  Clock,
  Heart
} from "lucide-react"
import { useState, useEffect } from "react"

// Mock data
const featuredProducts = [
  {
    id: "1",
    name: "iPhone 15 Pro Max 256GB",
    price: 1199.99,
    originalPrice: 1299.99,
    rating: 4.8,
    reviewCount: 2847,
    image: iphoneImage,
    category: "Electronics",
    isOnSale: true,
    inStock: true,
    tags: ["New", "Trending"]
  },
  {
    id: "2", 
    name: "Premium Cotton T-Shirt",
    price: 29.99,
    originalPrice: 39.99,
    rating: 4.5,
    reviewCount: 1203,
    image: tshirtImage,
    category: "Fashion",
    isOnSale: true,
    inStock: true,
    tags: ["Bestseller"]
  },
  {
    id: "3",
    name: "Smart Coffee Maker Pro",
    price: 149.99,
    rating: 4.7,
    reviewCount: 856,
    image: coffeeMakerImage,
    category: "Home & Kitchen",
    inStock: true,
    tags: ["Smart Home"]
  },
  {
    id: "4",
    name: "The Art of Programming",
    price: 49.99,
    originalPrice: 59.99,
    rating: 4.9,
    reviewCount: 445,
    image: bookImage,
    category: "Books & Stationery",
    isOnSale: true,
    inStock: true,
    tags: ["Educational"]
  }
]

const hotSales = [
  {
    id: "101",
    name: "Wireless Noise Cancelling Headphones",
    price: 199.99,
    originalPrice: 299.99,
    rating: 4.7,
    reviewCount: 1850,
    image: iphoneImage,
    category: "Electronics",
    isOnSale: true,
    timeLeft: "12:45:33"
  },
  {
    id: "102",
    name: "Luxury Leather Jacket",
    price: 149.99,
    originalPrice: 249.99,
    rating: 4.6,
    reviewCount: 950,
    image: tshirtImage,
    category: "Fashion",
    isOnSale: true,
    timeLeft: "06:22:17"
  },
  {
    id: "103",
    name: "Smart Fitness Watch Series 7",
    price: 249.99,
    originalPrice: 349.99,
    rating: 4.9,
    reviewCount: 3200,
    image: coffeeMakerImage,
    category: "Electronics",
    isOnSale: true,
    timeLeft: "23:59:59"
  },
  {
    id: "104",
    name: "Designer Leather Handbag",
    price: 179.99,
    originalPrice: 299.99,
    rating: 4.8,
    reviewCount: 1450,
    image: bookImage,
    category: "Fashion",
    isOnSale: true,
    timeLeft: "17:30:45"
  }
]

const categories = [
  { name: "Electronics", icon: Smartphone, count: "15,000+", color: "linear-gradient(135deg, #3b82f6, #1e40af)" },
  { name: "Fashion", icon: Shirt, count: "25,000+", color: "linear-gradient(135deg, #6366f1, #4338ca)" },
  { name: "Home & Kitchen", icon: Home, count: "12,000+", color: "linear-gradient(135deg, #0ea5e9, #0369a1)" },
  { name: "Books & Stationery", icon: BookOpen, count: "8,000+", color: "linear-gradient(135deg, #06b6d4, #0e7490)" }
]

const stats = [
  { label: "Total Products", value: "60,000+", icon: TrendingUp },
  { label: "Happy Customers", value: "250,000+", icon: Star },
  { label: "Daily Orders", value: "5,000+", icon: Zap },
  { label: "Satisfaction Rate", value: "98.5%", icon: Shield }
]

export default function Dashboard() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % hotSales.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Hero Section */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-indigo-800/80 z-10" />
          <Image 
            src={heroBanner} 
            alt="Hero Banner" 
            className="w-full h-[420px] object-cover transform group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 z-20 flex items-center justify-center p-6">
            <div className="text-center text-white max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                Discover Amazing{" "}
                <span className="bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent">
                  Deals
                </span>
              </h1>
              <p className="text-xl opacity-95 mb-8 max-w-2xl mx-auto">
                Shop from millions of products across Electronics, Fashion, Home & Kitchen, and Books
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-medium flex items-center gap-2 shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1">
                  Start Shopping <ArrowRight size={20} />
                </button>
                <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-3 rounded-xl font-medium hover:bg-white/20 transition-all duration-300">
                  Browse Categories
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={stat.label} 
              className="bg-white/80 backdrop-blur-md rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 cursor-default hover:-translate-y-1"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex p-3 rounded-2xl bg-blue-100 text-blue-600 mb-4">
                <stat.icon size={28} />
              </div>
              <div className="text-2xl font-bold text-blue-900 mb-1">{stat.value}</div>
              <div className="text-sm text-blue-700/80">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900">Shop by Category</h2>
            <button className="bg-transparent border-none text-blue-700 flex items-center gap-2 cursor-pointer font-medium hover:gap-3 transition-all">
              View All <ChevronRight size={18} />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {categories.map((category, index) => (
              <div 
                key={category.name} 
                className="bg-white rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="h-32 relative" style={{ background: category.color }}>
                  <div className="absolute inset-0 bg-black/10" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <category.icon size={42} color="white" />
                  </div>
                  <span className="absolute top-3 right-3 bg-white/25 text-white text-xs px-2 py-1 rounded-xl">
                    {category.count}
                  </span>
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-blue-900">{category.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Products */}
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900">Featured Products</h2>
            <button className="bg-blue-700 hover:bg-blue-800 text-white border-none px-5 py-2.5 rounded-xl flex items-center gap-2 shadow-lg hover:shadow-blue-500/30 transition-all">
              View All Products <ArrowRight size={16} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div 
                key={product.id} 
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="relative overflow-hidden">
                  <Image 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    {product.tags.map(tag => (
                      <span key={tag} className="bg-blue-600 text-white text-xs px-2 py-1 rounded-lg">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="absolute top-3 right-3 bg-white/90 hover:bg-white p-2 rounded-full shadow-md transition-all hover:scale-110">
                    <Heart size={18} className="text-blue-600" />
                  </button>
                  {product.isOnSale && (
                    <div className="absolute bottom-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-lg">
                      SALE
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <p className="text-xs text-blue-600 font-medium mb-1">{product.category}</p>
                  <h3 className="font-semibold text-blue-900 mb-2 line-clamp-1">{product.name}</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center gap-1 bg-blue-100 px-2 py-1 rounded">
                      <Star size={14} className="fill-yellow-400 text-yellow-400" />
                      <span className="text-xs font-semibold text-blue-900">{product.rating}</span>
                    </div>
                    <span className="text-xs text-blue-700/80">({product.reviewCount} reviews)</span>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <div>
                      <p className="text-lg font-bold text-blue-900">${product.price}</p>
                      {product.originalPrice && (
                        <p className="text-sm text-gray-500 line-through">${product.originalPrice}</p>
                      )}
                    </div>
                    <button className="bg-blue-100 hover:bg-blue-200 p-2 rounded-lg transition-colors">
                      <ShoppingBag size={18} className="text-blue-700" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hot Sales Section - Completely Redesigned */}
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 flex items-center gap-2">
              <div className="p-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl">
                <Flame size={24} className="text-white" />
              </div>
              Hot Sales
              <span className="text-sm bg-gradient-to-r from-red-500 to-orange-500 text-white px-3 py-1 rounded-full ml-2">
                Limited Time
              </span>
            </h2>
            <button className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white border-none px-5 py-2.5 rounded-xl flex items-center gap-2 shadow-lg hover:shadow-red-500/30 transition-all">
              View All Sales <ArrowRight size={16} />
            </button>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {hotSales.map((sale, index) => (
                <div 
                  key={sale.id} 
                  className={`bg-white rounded-2xl overflow-hidden shadow-xl border-2 border-orange-300 transition-all duration-500 transform ${index === currentSlide ? 'scale-105 ring-2 ring-orange-400 z-10' : 'scale-95 opacity-90'}`}
                >
                  <div className="relative">
                    <Image 
                      src={sale.image} 
                      alt={sale.name} 
                      className="w-full h-52 object-cover"
                    />
                    
                    {/* Discount Badge */}
                    {sale.originalPrice && (
                      <div className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold py-1.5 px-3 rounded-xl text-sm shadow-lg">
                        -{Math.round(((sale.originalPrice - sale.price) / sale.originalPrice) * 100)}%
                      </div>
                    )}
                    
                    {/* Timer */}
                    <div className="absolute top-4 right-4 bg-blue-900/90 backdrop-blur-md text-white py-1.5 px-3 rounded-xl flex items-center gap-1.5">
                      <Clock size={14} />
                      <span className="text-xs font-medium">{sale.timeLeft}</span>
                    </div>
                    
                    {/* Category Tag */}
                    <div className="absolute bottom-4 left-4 bg-white/90 text-blue-900 text-xs font-medium py-1 px-2.5 rounded-lg">
                      {sale.category}
                    </div>
                  </div>
                  
                  <div className="p-5">
                    <h3 className="font-bold text-lg text-blue-900 mb-2">{sale.name}</h3>
                    
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={14} 
                            className={i < Math.floor(sale.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} 
                          />
                        ))}
                      </div>
                      <span className="text-xs text-blue-700/80">({sale.reviewCount})</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xl font-bold text-blue-900">${sale.price}</span>
                          {sale.originalPrice && (
                            <span className="text-sm text-gray-500 line-through">${sale.originalPrice}</span>
                          )}
                        </div>
                        <p className="text-xs text-red-500 font-medium mt-1">Limited stock available</p>
                      </div>
                      
                      <button className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white py-2.5 px-5 rounded-xl font-medium flex items-center gap-2 transition-all shadow-md hover:shadow-lg">
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {hotSales.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${index === currentSlide ? 'bg-blue-800 w-6' : 'bg-blue-300'}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Features Banner */}
        <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white rounded-2xl p-8 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-white/20 p-4 rounded-2xl mb-4">
                <Truck size={32} />
              </div>
              <h3 className="font-semibold text-lg mb-2">Free Shipping</h3>
              <p className="text-sm opacity-90">On orders over $50</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white/20 p-4 rounded-2xl mb-4">
                <Shield size={32} />
              </div>
              <h3 className="font-semibold text-lg mb-2">Secure Payment</h3>
              <p className="text-sm opacity-90">100% secure transactions</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white/20 p-4 rounded-2xl mb-4">
                <Star size={32} />
              </div>
              <h3 className="font-semibold text-lg mb-2">Top Quality</h3>
              <p className="text-sm opacity-90">Verified products only</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}