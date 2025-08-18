"use client"

import React, { useEffect, useState } from "react"
import { Star, ChevronRight, ShoppingCart, Shield, Truck, Zap, TrendingUp } from "lucide-react"

function ProductCard({ product }) {
  return (
    <div className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-gray-200">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.isNew && (
          <div className="absolute top-3 left-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            NEW
          </div>
        )}
        {product.discount && (
          <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            -{product.discount}%
          </div>
        )}
        <button className="absolute bottom-3 right-3 bg-white/90 hover:bg-white p-2 rounded-full shadow-md transition-all hover:scale-110">
          <ShoppingCart className="w-4 h-4 text-gray-700" />
        </button>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-gray-900 line-clamp-1">{product.name}</h3>
            <p className="text-xs text-gray-500 mt-1">{product.category}</p>
          </div>
          {product.isBestSeller && (
            <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded">Bestseller</span>
          )}
        </div>

        <div className="mt-3 flex items-center">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                fill={i < Math.floor(product.rating) ? "#f59e0b" : "none"}
                className={`${i < Math.floor(product.rating) ? "text-amber-400" : "text-gray-300"}`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500 ml-1">({product.reviewCount})</span>
        </div>

        <div className="mt-3 flex items-center gap-2">
          <span className="font-bold text-gray-900">${product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <span className="text-xs text-gray-400 line-through">${product.originalPrice.toFixed(2)}</span>
          )}
        </div>
      </div>
    </div>
  )
}

export default function TopRatedPage() {
  const [products, setProducts] = useState([])
  const [activeFilter, setActiveFilter] = useState("all")

  useEffect(() => {
    const mockProducts = [
      { 
        id: 1, 
        name: "iPhone 15 Pro Max 256GB", 
        category: "Electronics", 
        rating: 4.9, 
        reviewCount: 2847,
        price: 1199.99,
        originalPrice: 1299.99,
        image: "/images/iphone.jpg",
        isBestSeller: true,
        discount: 8,
        isNew: false
      },
      { 
        id: 2, 
        name: "Adidas Ultraboost 22 Running Shoes", 
        category: "Fashion", 
        rating: 4.8, 
        reviewCount: 1203,
        price: 179.99,
        originalPrice: 199.99,
        image: "/images/shoes.jpg",
        isBestSeller: true,
        discount: 10,
        isNew: true
      },
      { 
        id: 3, 
        name: "ASUS ROG Zephyrus Gaming Laptop", 
        category: "Electronics", 
        rating: 4.7, 
        reviewCount: 856,
        price: 1899.99,
        image: "/images/laptop.jpg",
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
        image: "/images/cookware.jpg",
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
        image: "/images/headphones.jpg",
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
        image: "/images/switch.jpg",
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
        image: "/images/vacuum.jpg",
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
        image: "/images/watch.jpg",
        isBestSeller: false,
        isNew: true
      }
    ]
    setProducts(mockProducts)
  }, [])

  const filteredProducts = activeFilter === "all" 
    ? products 
    : activeFilter === "new"
      ? products.filter(p => p.isNew)
      : activeFilter === "bestsellers"
        ? products.filter(p => p.isBestSeller)
        : products.filter(p => p.category.toLowerCase() === activeFilter)

  const categories = [
    { id: "all", name: "All Products" },
    { id: "electronics", name: "Electronics" },
    { id: "fashion", name: "Fashion" },
    { id: "home & kitchen", name: "Home & Kitchen" },
    { id: "gaming", name: "Gaming" },
    { id: "new", name: "New Arrivals" },
    { id: "bestsellers", name: "Bestsellers" }
  ]

  const stats = [
    { label: "Total Products", value: "10,000+", icon: TrendingUp, color: "text-blue-500" },
    { label: "Happy Customers", value: "250,000+", icon: Star, color: "text-amber-500" },
    { label: "Fast Delivery", value: "24-48h", icon: Truck, color: "text-emerald-500" },
    { label: "Secure Payments", value: "100% Safe", icon: Shield, color: "text-violet-500" }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
            Top Rated
          </span> Products
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover our highest rated products loved by thousands of customers worldwide
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className={`${stat.color} mb-3`}>
              <stat.icon size={28} className="inline" />
            </div>
            <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
            <div className="text-sm text-gray-500">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="mb-8 overflow-x-auto">
        <div className="flex space-x-2 pb-2">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                activeFilter === category.id
                  ? "bg-gray-900 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white mb-12">
        <div className="max-w-3xl mx-auto text-center">
          <Zap className="w-10 h-10 mx-auto mb-4" fill="white" />
          <h2 className="text-2xl font-bold mb-4">Get Exclusive Deals</h2>
          <p className="text-blue-100 mb-6">
            Subscribe to our newsletter and get 15% off your first order plus access to exclusive deals
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-3 rounded-lg text-gray-900 focus:outline-none"
            />
            <button className="bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold px-6 py-3 rounded-lg transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* View All Button */}
      <div className="text-center">
        <button className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-lg bg-white text-gray-700 font-medium hover:bg-gray-50 transition-colors">
          View All Products <ChevronRight className="ml-2" size={16} />
        </button>
      </div>
    </div>
  )
}