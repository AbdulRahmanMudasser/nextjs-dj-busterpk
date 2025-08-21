'use client'

import { useState, useEffect } from 'react'
import { Star, Heart, MapPin, Shield, Truck, Check, Phone, Mail, Globe, Facebook, Twitter, Instagram } from 'lucide-react'

export default function SellerProfile() {
  const [activeTab, setActiveTab] = useState('products')
  const [selectedProduct, setSelectedProduct] = useState(null)
  
  // Sample seller data
  const seller = {
    name: "MobileHut",
    rating: 4.8,
    reviews: 2847,
    joined: "January 2020",
    responseRate: "98%",
    responseTime: "within 2 hours",
    followers: 12500,
    products: 247,
    about: "MobileHut is Pakistan's premier destination for authentic smartphones and accessories. We are an authorized retailer for Samsung, Apple, Xiaomi, and other leading brands. All our products come with official warranty and 7-day return policy.",
    services: [
      "Free delivery across Pakistan",
      "Official warranty on all products",
      "7-day easy returns",
      "Installment plans available",
      "Genuine products only"
    ],
    contact: {
      phone: "+92 300 1234567",
      email: "contact@mobilehut.pk",
      website: "www.mobilehut.pk",
      address: "Main Gulberg, Lahore, Pakistan"
    },
    socialMedia: {
      facebook: "mobilehutofficial",
      twitter: "mobilehut_pk",
      instagram: "mobilehut.pakistan"
    }
  }

  // Sample seller products
  const sellerProducts = [
    {
      id: 1,
      title: "Samsung Galaxy A54 5G - 128GB Storage, 8GB RAM",
      price: "Rs. 89,999",
      oldPrice: "Rs. 99,999",
      discount: "-10%",
      image: "/galaxy.jpeg",
      rating: 4.5,
      reviews: 2847,
      sold: 1250,
      colors: ["black", "blue", "white", "purple"]
    },
    {
      id: 2,
      title: "Samsung Galaxy S23 Ultra 512GB",
      price: "Rs. 199,999",
      oldPrice: "Rs. 229,999",
      discount: "-15%",
      image: "/s23ultra.jpeg",
      rating: 4.8,
      reviews: 1523,
      sold: 842,
      colors: ["black", "green", "lavender"]
    },
    {
      id: 3,
      title: "iPhone 14 Pro Max 256GB",
      price: "Rs. 249,999",
      oldPrice: "Rs. 269,999",
      discount: "-12%",
      image: "/iphone14.jpeg",
      rating: 4.7,
      reviews: 1987,
      sold: 956,
      colors: ["black", "white", "gold", "purple"]
    },
    {
      id: 4,
      title: "Xiaomi 13 Pro 256GB",
      price: "Rs. 149,999",
      oldPrice: "Rs. 169,999",
      discount: "-20%",
      image: "/xiaomi13.jpeg",
      rating: 4.3,
      reviews: 876,
      sold: 423,
      colors: ["black", "white", "blue"]
    },
    {
      id: 5,
      title: "Google Pixel 7 Pro 128GB",
      price: "Rs. 169,999",
      oldPrice: "Rs. 189,999",
      discount: "-18%",
      image: "/pixel7.jpeg",
      rating: 4.6,
      reviews: 1124,
      sold: 587,
      colors: ["black", "white", "hazel"]
    },
    {
      id: 6,
      title: "Samsung Galaxy Z Flip 5",
      price: "Rs. 179,999",
      oldPrice: "Rs. 199,999",
      discount: "-15%",
      image: "/zflip5.jpeg",
      rating: 4.4,
      reviews: 654,
      sold: 321,
      colors: ["black", "purple", "cream", "green"]
    }
  ]

  // Sample reviews data
  const sellerReviews = [
    {
      id: 1,
      customer: "Ahmed R.",
      rating: 5,
      date: "2 days ago",
      comment: "Excellent service! My phone was delivered earlier than expected and was perfectly packaged. The product is genuine and works flawlessly.",
      product: "Samsung Galaxy S23 Ultra"
    },
    {
      id: 2,
      customer: "Fatima S.",
      rating: 4,
      date: "1 week ago",
      comment: "Good experience overall. The phone is working great, but the delivery was delayed by one day. Customer service was helpful though.",
      product: "iPhone 14 Pro Max"
    },
    {
      id: 3,
      customer: "Usman T.",
      rating: 5,
      date: "2 weeks ago",
      comment: "Best place to buy phones in Pakistan! Authentic products with proper warranty. Will definitely buy from MobileHut again.",
      product: "Xiaomi 13 Pro"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <nav className="text-sm text-blue-600">
            Home / Sellers / {seller.name}
          </nav>
        </div>

        {/* Seller Header */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100 mb-8">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-shrink-0">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl flex items-center justify-center text-white text-2xl font-bold">
                {seller.name.charAt(0)}
              </div>
            </div>
            
            <div className="flex-grow">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div>
                  <h1 className="text-2xl font-bold text-blue-900">{seller.name}</h1>
                  <div className="flex items-center mt-1">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          fill={i < Math.floor(seller.rating) ? "#f59e0b" : "none"}
                          className={i < Math.floor(seller.rating) ? "text-amber-400" : "text-gray-300"}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-blue-600 ml-2">
                      {seller.rating} ({seller.reviews} reviews)
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-colors">
                    Follow
                  </button>
                  <button className="px-4 py-2 border border-blue-600 text-blue-600 hover:bg-blue-50 rounded-xl font-medium transition-colors">
                    Contact
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mb-4">
                <div className="bg-blue-50 rounded-xl p-3">
                  <p className="text-lg font-bold text-blue-900">{seller.products}+</p>
                  <p className="text-sm text-blue-600">Products</p>
                </div>
                <div className="bg-blue-50 rounded-xl p-3">
                  <p className="text-lg font-bold text-blue-900">{seller.followers}</p>
                  <p className="text-sm text-blue-600">Followers</p>
                </div>
                <div className="bg-blue-50 rounded-xl p-3">
                  <p className="text-lg font-bold text-blue-900">{seller.responseRate}</p>
                  <p className="text-sm text-blue-600">Response Rate</p>
                </div>
                <div className="bg-blue-50 rounded-xl p-3">
                  <p className="text-lg font-bold text-blue-900">{seller.responseTime}</p>
                  <p className="text-sm text-blue-600">Response Time</p>
                </div>
              </div>
              
              <div className="flex items-center text-sm text-blue-600">
                <span>Joined {seller.joined}</span>
                <span className="mx-2">•</span>
                <span>Lahore, Pakistan</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* About Seller */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100">
              <h2 className="text-xl font-bold text-blue-900 mb-4">About Seller</h2>
              <p className="text-blue-700 mb-4">{seller.about}</p>
              
              <div className="space-y-2">
                {seller.services.map((service, index) => (
                  <div key={index} className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    <span className="text-blue-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100">
              <h2 className="text-xl font-bold text-blue-900 mb-4">Contact Information</h2>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-blue-700">{seller.contact.phone}</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-blue-700">{seller.contact.email}</span>
                </div>
                <div className="flex items-center">
                  <Globe className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-blue-700">{seller.contact.website}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-blue-700">{seller.contact.address}</span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100">
              <h2 className="text-xl font-bold text-blue-900 mb-4">Follow Us</h2>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 hover:bg-blue-200 transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 hover:bg-blue-200 transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 hover:bg-blue-200 transition-colors">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Tabs */}
            <div className="bg-white rounded-2xl p-1 shadow-lg border border-blue-100 mb-6">
              <div className="flex">
                <button
                  onClick={() => setActiveTab('products')}
                  className={`flex-1 py-3 px-4 text-center font-medium rounded-xl transition-colors ${
                    activeTab === 'products' 
                      ? 'bg-blue-600 text-white' 
                      : 'text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  Products
                </button>
                <button
                  onClick={() => setActiveTab('reviews')}
                  className={`flex-1 py-3 px-4 text-center font-medium rounded-xl transition-colors ${
                    activeTab === 'reviews' 
                      ? 'bg-blue-600 text-white' 
                      : 'text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  Reviews
                </button>
                <button
                  onClick={() => setActiveTab('policies')}
                  className={`flex-1 py-3 px-4 text-center font-medium rounded-xl transition-colors ${
                    activeTab === 'policies' 
                      ? 'bg-blue-600 text-white' 
                      : 'text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  Policies
                </button>
              </div>
            </div>

            {/* Tab Content */}
            {activeTab === 'products' && (
              <div>
                <h2 className="text-2xl font-bold text-blue-900 mb-6">Products by {seller.name}</h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {sellerProducts.map(product => (
                    <div key={product.id} className="bg-white rounded-2xl p-4 shadow-lg border border-blue-100 hover:shadow-xl transition-all">
                      <div className="relative mb-4">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="w-full h-48 object-contain rounded-xl"
                        />
                        <button className="absolute top-2 right-2 bg-white/90 hover:bg-white p-2 rounded-lg shadow-md transition-all">
                          <Heart size={18} className="text-blue-600" />
                        </button>
                        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                          {product.discount}
                        </span>
                      </div>
                      
                      <h3 className="font-semibold text-blue-900 text-sm mb-2 line-clamp-2">
                        {product.title}
                      </h3>
                      
                      <div className="flex items-baseline gap-2 mb-3">
                        <span className="text-lg font-bold text-blue-900">{product.price}</span>
                        <span className="text-sm line-through text-gray-400">{product.oldPrice}</span>
                      </div>
                      
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center">
                          <div className="flex items-center mr-2">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                size={12}
                                fill={i < Math.floor(product.rating) ? "#f59e0b" : "none"}
                                className={i < Math.floor(product.rating) ? "text-amber-400" : "text-gray-300"}
                              />
                            ))}
                          </div>
                          <span className="text-xs text-blue-600">({product.reviews})</span>
                        </div>
                        <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full">
                          {product.sold} sold
                        </span>
                      </div>
                      
                      <div className="flex gap-1 mb-4">
                        {product.colors.slice(0, 4).map((color, index) => (
                          <div
                            key={index}
                            className="w-4 h-4 rounded-full border border-gray-200"
                            style={{ backgroundColor: color }}
                          />
                        ))}
                        {product.colors.length > 4 && (
                          <div className="w-4 h-4 rounded-full bg-gray-100 text-xs flex items-center justify-center">
                            +{product.colors.length - 4}
                          </div>
                        )}
                      </div>
                      
                      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl text-sm font-medium transition-colors">
                        Add to Cart
                      </button>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 text-center">
                  <button className="px-6 py-3 border border-blue-600 text-blue-600 hover:bg-blue-50 rounded-xl font-medium transition-colors">
                    Load More Products
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div>
                <h2 className="text-2xl font-bold text-blue-900 mb-6">Customer Reviews</h2>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100 mb-6">
                  <div className="text-center mb-6">
                    <div className="text-5xl font-bold text-blue-900 mb-2">{seller.rating}/5</div>
                    <div className="flex justify-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={24}
                          fill={i < Math.floor(seller.rating) ? "#f59e0b" : "none"}
                          className={i < Math.floor(seller.rating) ? "text-amber-400" : "text-gray-300"}
                        />
                      ))}
                    </div>
                    <p className="text-blue-600">Based on {seller.reviews} reviews</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  {sellerReviews.map(review => (
                    <div key={review.id} className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="font-semibold text-blue-600">{review.customer.charAt(0)}</span>
                        </div>
                        <div>
                          <p className="font-medium text-blue-900">{review.customer}</p>
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                size={14}
                                fill={i < review.rating ? "#f59e0b" : "none"}
                                className={i < review.rating ? "text-amber-400" : "text-gray-300"}
                              />
                            ))}
                            <span className="text-sm text-blue-600 ml-2">{review.date}</span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-blue-700 mb-2">{review.comment}</p>
                      <p className="text-sm text-blue-600">Product: {review.product}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'policies' && (
              <div>
                <h2 className="text-2xl font-bold text-blue-900 mb-6">Seller Policies</h2>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100 mb-6">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-blue-100 p-3 rounded-xl">
                      <Truck className="w-8 h-8 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-blue-900 mb-2">Shipping Policy</h3>
                      <p className="text-blue-700">
                        We offer free shipping across Pakistan for all orders above Rs. 5,000. 
                        Orders are processed within 24 hours and delivered within 2-5 business days. 
                        You will receive a tracking number once your order is shipped.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-blue-100 p-3 rounded-xl">
                      <RotateCcw className="w-8 h-8 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-blue-900 mb-2">Return Policy</h3>
                      <p className="text-blue-700">
                        We offer a 7-day return policy for all products. Items must be in original 
                        condition with all accessories and packaging. Return shipping is free for 
                        defective products. Refunds are processed within 3-5 business days.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-xl">
                      <Shield className="w-8 h-8 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-blue-900 mb-2">Warranty Policy</h3>
                      <p className="text-blue-700">
                        All our products come with official manufacturer warranty. Warranty periods 
                        vary by brand and product. Please register your product on the manufacturer's 
                        website to activate the warranty. We provide support for warranty claims.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}