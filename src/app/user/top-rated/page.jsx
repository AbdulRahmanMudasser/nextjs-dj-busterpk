"use client";

import React, { useEffect, useState } from "react";
import { Star, ChevronRight, ShoppingCart, Shield, Truck, Zap, TrendingUp, Heart, Eye, Clock, Award, Crown } from "lucide-react";

function ProductCard({ product, index }) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {index < 3 && (
            <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold px-3 py-2 rounded-xl shadow-lg flex items-center gap-1">
              <Crown size={14} className="fill-white" />
              #{index + 1} TOP
            </div>
          )}
          {product.isNew && (
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs font-bold px-3 py-2 rounded-xl shadow-lg">
              NEW
            </div>
          )}
          {product.discount && (
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white text-xs font-bold px-3 py-2 rounded-xl shadow-lg">
              -{product.discount}%
            </div>
          )}
        </div>
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          <button 
            onClick={() => setIsLiked(!isLiked)}
            className="bg-white/90 hover:bg-white p-2.5 rounded-xl shadow-md transition-all hover:scale-110"
          >
            <Heart 
              size={18} 
              fill={isLiked ? "#ef4444" : "none"} 
              className={isLiked ? "text-red-500" : "text-blue-700"}
            />
          </button>
          <button className="bg-white/90 hover:bg-white p-2.5 rounded-xl shadow-md transition-all hover:scale-110">
            <ShoppingCart className="w-[18px] h-[18px] text-blue-700" />
          </button>
        </div>
        {product.isHot && (
          <div className="absolute bottom-4 left-4 bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs font-bold px-3 py-2 rounded-xl flex items-center gap-1">
            <Clock size={12} />
            12:45:33
          </div>
        )}
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <div>
            <span className="text-xs font-medium text-blue-600 uppercase tracking-wider bg-blue-50 px-2 py-1 rounded-md">
              {product.category}
            </span>
            <h3 className="font-semibold text-blue-900 text-lg line-clamp-2 mt-2 group-hover:text-blue-700 transition-colors">
              {product.name}
            </h3>
          </div>
          {product.isBestSeller && (
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs px-3 py-1.5 rounded-xl shadow-sm">
              Bestseller
            </span>
          )}
        </div>

        <div className="flex items-center mb-3">
          <div className="flex mr-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                fill={i < Math.floor(product.rating) ? "#f59e0b" : "none"}
                className={`${i < Math.floor(product.rating) ? "text-amber-400" : "text-gray-300"}`}
              />
            ))}
          </div>
          <span className="text-sm text-blue-600 ml-1">({product.reviewCount.toLocaleString()})</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="font-bold text-blue-900 text-xl">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-400 line-through">${product.originalPrice.toFixed(2)}</span>
            )}
          </div>
          <button className="p-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 transition-all shadow-md hover:shadow-lg">
            <ShoppingCart className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function TopRatedPage() {
  const [products, setProducts] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = () => {
      setIsLoading(true);
      setTimeout(() => {
        const mockProducts = [
          { 
            id: 1, 
            name: "iPhone 15 Pro Max 256GB", 
            category: "Electronics", 
            rating: 4.9, 
            reviewCount: 2847,
            price: 1199.99,
            originalPrice: 1299.99,
            image: "/phone.jpeg",
            isBestSeller: true,
            discount: 8,
            isNew: false,
            isHot: true
          },
          { 
            id: 2, 
            name: "Adidas Ultraboost 22 Running Shoes", 
            category: "Fashion", 
            rating: 4.8, 
            reviewCount: 1203,
            price: 179.99,
            originalPrice: 199.99,
            image: "/nikeshoes.jpeg",
            isBestSeller: true,
            discount: 10,
            isNew: true,
            isHot: true
          },
          { 
            id: 3, 
            name: "ASUS ROG Zephyrus Gaming Laptop", 
            category: "Electronics", 
            rating: 4.7, 
            reviewCount: 856,
            price: 1899.99,
            image: "/rec-2.jfif",
            isBestSeller: false,
            isNew: true
          },
          { 
            id: 4, 
            name: "All-Clad Stainless Steel Cookware Set", 
            category: "Home & Kitchen", 
            rating: 4.6, 
            reviewCount: 445,
            price: 249.99,
            originalPrice: 299.99,
            image: "/Fridge.jpg",
            isBestSeller: false,
            discount: 17,
            isNew: false
          },
          { 
            id: 5, 
            name: "Sony WH-1000XM5 Wireless Headphones", 
            category: "Electronics", 
            rating: 4.9, 
            reviewCount: 3245,
            price: 349.99,
            originalPrice: 399.99,
            image: "/logitechheadphones.jpg",
            isBestSeller: true,
            discount: 13,
            isNew: false
          },
          { 
            id: 6, 
            name: "Nintendo Switch OLED Model", 
            category: "Gaming", 
            rating: 4.8, 
            reviewCount: 2231,
            price: 349.99,
            image: "/switch.jpeg",
            isBestSeller: false,
            isNew: true
          },
          { 
            id: 7, 
            name: "Dyson V15 Detect Cordless Vacuum", 
            category: "Home & Kitchen", 
            rating: 4.7, 
            reviewCount: 1567,
            price: 699.99,
            originalPrice: 749.99,
            image: "/banner-dryer.png",
            isBestSeller: true,
            discount: 7,
            isNew: false
          },
          { 
            id: 8, 
            name: "Apple Watch Series 9", 
            category: "Electronics", 
            rating: 4.8, 
            reviewCount: 1892,
            price: 399.99,
            image: "/watch.jpg",
            isBestSeller: false,
            isNew: true
          }
        ];
        setProducts(mockProducts);
        setIsLoading(false);
      }, 800);
    };

    fetchProducts();
  }, []);

  const filteredProducts = activeFilter === "all" 
    ? products 
    : activeFilter === "new"
      ? products.filter(p => p.isNew)
      : activeFilter === "bestsellers"
        ? products.filter(p => p.isBestSeller)
        : activeFilter === "hot"
          ? products.filter(p => p.isHot)
          : products.filter(p => p.category.toLowerCase() === activeFilter);

  const categories = [
    { id: "all", name: "All Products", icon: "🌟" },
    { id: "electronics", name: "Electronics", icon: "📱" },
    { id: "fashion", name: "Fashion", icon: "👕" },
    { id: "home & kitchen", name: "Home & Kitchen", icon: "🏠" },
    { id: "gaming", name: "Gaming", icon: "🎮" },
    { id: "new", name: "New Arrivals", icon: "🆕" },
    { id: "bestsellers", name: "Bestsellers", icon: "🏆" },
    { id: "hot", name: "Hot Deals", icon: "🔥" }
  ];

  const stats = [
    { label: "Total Products", value: "10,000+", icon: TrendingUp, color: "text-blue-500", bg: "bg-blue-50" },
    { label: "Happy Customers", value: "250,000+", icon: Star, color: "text-amber-500", bg: "bg-amber-50" },
    { label: "Fast Delivery", value: "24-48h", icon: Truck, color: "text-emerald-500", bg: "bg-emerald-50" },
    { label: "Secure Payments", value: "100% Safe", icon: Shield, color: "text-violet-500", bg: "bg-violet-50" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-800 text-white text-sm font-bold px-5 py-2 rounded-full mb-6">
            <Award size={18} className="mr-2" />
            TOP RATED COLLECTION
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Curated Excellence
          </h1>
          <p className="text-lg text-blue-700 max-w-2xl mx-auto">
            Discover our highest rated products loved by thousands of customers worldwide
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition">
              <div className={`${stat.bg} w-12 h-12 rounded-xl flex items-center justify-center mb-4`}>
                <stat.icon size={24} className={stat.color} />
              </div>
              <div className="text-2xl font-bold text-blue-900 mb-1">{stat.value}</div>
              <div className="text-sm text-blue-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  activeFilter === category.id
                    ? "bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg"
                    : "bg-white text-blue-700 hover:bg-blue-50 border border-blue-200 shadow-sm hover:shadow-md"
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-16">
            {[...Array(8)].map((_, index) => (
              <div key={index} className="bg-blue-100 rounded-2xl aspect-[3/4] animate-pulse"></div>
            ))}
          </div>
        ) : (
          <>
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-2xl shadow-lg border border-blue-100">
                <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Star size={32} className="text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">No products found</h3>
                <p className="text-blue-600 max-w-md mx-auto">
                  Try adjusting your filters or browse our full collection
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-16">
                {filteredProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            )}
          </>
        )}

        {/* CTA Section */}
        <div className="relative bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-12 text-white mb-16 overflow-hidden shadow-2xl">
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/10 rounded-full"></div>
          <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-white/10 rounded-full"></div>
          
          <div className="relative max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center bg-white/20 p-4 rounded-2xl mb-6">
              <Zap size={28} className="text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Get Exclusive Deals</h2>
            <p className="text-blue-100 mb-8 text-lg">
              Subscribe to our newsletter and get 15% off your first order plus access to exclusive deals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-5 py-4 rounded-xl text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
              />
              <button className="bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-blue-900 font-bold px-6 py-4 rounded-xl transition-all shadow-lg hover:shadow-xl">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button className="inline-flex items-center px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl font-bold hover:from-blue-700 hover:to-blue-900 transition-all shadow-lg hover:shadow-xl">
            View All Products <ChevronRight className="ml-2" size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}