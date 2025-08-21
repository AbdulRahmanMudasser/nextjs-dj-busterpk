'use client'

import { useState } from 'react'
import { Star, Heart, Share2, Truck, Shield, RotateCcw, ShoppingCart, Plus, Minus, Check, ChevronRight } from 'lucide-react'
import Link from 'next/link'

export default function ProductDetail({ product }) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] || null)
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || null)
  const [isWishlisted, setIsWishlisted] = useState(false)

  // Default product data if none is passed as prop
  const defaultProduct = {
    title: "Samsung Galaxy A54 5G - 128GB Storage, 8GB RAM",
    price: "Rs. 89,999",
    oldPrice: "Rs. 99,999",
    discount: "-10%",
    freeShipping: true,
    images: [
      "/galaxy.jpeg",
      "/galaxy2.jpeg",
      "/galaxy3.jpeg",
      "/galaxy4.jpeg"
    ],
    seller: "MobileHut",
    sellerId: "mobilehut",
    rating: 4.5,
    reviews: 2847,
    inStock: true,
    sold: 1250,
    brand: "Samsung",
    warranty: "1 Year Brand Warranty",
    colors: ["black", "blue", "white", "purple"],
    sizes: ["S", "M", "L", "XL"],
    description: "The Samsung Galaxy A54 5G features a stunning 6.4-inch Super AMOLED display, powerful Exynos processor, and a versatile triple camera system. With 128GB storage and 8GB RAM, it delivers exceptional performance for gaming and multitasking.",
    features: [
      "6.4-inch Super AMOLED Display",
      "Exynos 1380 Processor",
      "Triple Camera: 50MP + 12MP + 5MP",
      "5000mAh Battery with 25W Fast Charging",
      "5G Connectivity",
      "IP67 Water and Dust Resistance"
    ],
    specifications: {
      "Display": "6.4-inch Super AMOLED, 120Hz",
      "Processor": "Exynos 1380",
      "RAM": "8GB",
      "Storage": "128GB (Expandable)",
      "Camera": "50MP Main + 12MP Ultra Wide + 5MP Macro",
      "Battery": "5000mAh",
      "OS": "Android 13 with One UI 5.1"
    }
  }

  const relatedProducts = [
    {
      title: "Samsung Galaxy S23 Ultra",
      price: "Rs. 199,999",
      image: "/s23ultra.jpeg",
      discount: "-15%"
    },
    {
      title: "iPhone 14 Pro Max",
      price: "Rs. 249,999",
      image: "/iphone14.jpeg",
      discount: "-12%"
    },
    {
      title: "Xiaomi 13 Pro",
      price: "Rs. 149,999",
      image: "/xiaomi13.jpeg",
      discount: "-20%"
    },
    {
      title: "Google Pixel 7 Pro",
      price: "Rs. 169,999",
      image: "/pixel7.jpeg",
      discount: "-18%"
    }
  ]

  // Use passed product or default
  const productData = product || defaultProduct

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="text-sm text-blue-600">
            Home / {productData.brand || "Products"} / {productData.title}
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100">
              <div className="relative aspect-square mb-4">
                <img
                  src={productData.images[selectedImage]}
                  alt={productData.title}
                  className="w-full h-full object-contain rounded-xl"
                />
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className="absolute top-4 right-4 bg-white/90 hover:bg-white p-3 rounded-xl shadow-md transition-all hover:scale-110"
                >
                  <Heart
                    size={20}
                    fill={isWishlisted ? "#ef4444" : "none"}
                    className={isWishlisted ? "text-red-500" : "text-blue-600"}
                  />
                </button>
                <span className="absolute top-4 left-4 bg-red-500 text-white text-sm font-bold px-3 py-1.5 rounded-xl">
                  {productData.discount}
                </span>
              </div>

              <div className="grid grid-cols-4 gap-3">
                {productData.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square border-2 rounded-lg overflow-hidden transition-all ${
                      selectedImage === index ? 'border-blue-600 scale-105' : 'border-gray-200'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-blue-50 rounded-xl p-4 text-center border border-blue-200">
                <Truck className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-blue-900">Free Delivery</p>
                <p className="text-xs text-blue-600">Across Pakistan</p>
              </div>
              <div className="bg-blue-50 rounded-xl p-4 text-center border border-blue-200">
                <Shield className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-blue-900">Warranty</p>
                <p className="text-xs text-blue-600">{productData.warranty}</p>
              </div>
              <div className="bg-blue-50 rounded-xl p-4 text-center border border-blue-200">
                <RotateCcw className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-blue-900">7 Days Return</p>
                <p className="text-xs text-blue-600">Easy Returns</p>
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100">
              <h1 className="text-2xl font-bold text-blue-900 mb-2">{productData.title}</h1>

              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      fill={i < Math.floor(productData.rating) ? "#f59e0b" : "none"}
                      className={i < Math.floor(productData.rating) ? "text-amber-400" : "text-gray-300"}
                    />
                  ))}
                  <span className="text-sm text-blue-600 ml-2">({productData.reviews} reviews)</span>
                </div>
                <span className="text-sm text-green-600 bg-green-100 px-2 py-1 rounded-full">
                  {productData.sold} sold
                </span>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-3xl font-bold text-blue-900">{productData.price}</span>
                  <span className="text-lg line-through text-gray-400">{productData.oldPrice}</span>
                </div>
                <p className="text-sm text-gray-600">Inclusive of all taxes</p>
              </div>

              {/* Color Selection */}
              {productData.colors?.length > 0 && (
                <div className="mb-6">
                  <h3 className="font-semibold text-blue-900 mb-3">Color:</h3>
                  <div className="flex gap-3">
                    {productData.colors.map(color => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`w-10 h-10 rounded-full border-2 transition-all ${
                          selectedColor === color ? 'border-blue-600 scale-110' : 'border-gray-300'
                        }`}
                        style={{ backgroundColor: color }}
                      >
                        {selectedColor === color && (
                          <Check className="w-5 h-5 text-white mx-auto" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Size Selection */}
              {productData.sizes?.length > 0 && (
                <div className="mb-6">
                  <h3 className="font-semibold text-blue-900 mb-3">Size:</h3>
                  <div className="flex gap-3">
                    {productData.sizes.map(size => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 py-2 rounded-lg border-2 font-medium transition-all ${
                          selectedSize === size ? 'border-blue-600 bg-blue-50 text-blue-900' : 'border-gray-300 text-gray-600'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity Selection */}
              <div className="mb-6">
                <h3 className="font-semibold text-blue-900 mb-3">Quantity:</h3>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded-lg border border-blue-200 flex items-center justify-center text-blue-600 hover:bg-blue-50"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="w-12 text-center font-semibold">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 rounded-lg border border-blue-200 flex items-center justify-center text-blue-600 hover:bg-blue-50"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                <button className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white py-3.5 rounded-xl font-semibold transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2">
                  <ShoppingCart size={20} />
                  Add to Cart
                </button>
                <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-3.5 rounded-xl font-semibold transition-all shadow-md hover:shadow-lg">
                  Buy Now
                </button>
              </div>

              {/* <div className="flex gap-3">
                <button className="flex-1 flex items-center justify-center gap-2 py-2.5 border border-blue-200 text-blue-600 rounded-xl hover:bg-blue-50 transition-colors">
                  <Share2 size={18} />
                  Share
                </button>
              </div> */}
            </div>

            {/* Seller Info - Now clickable */}
            <Link href={`/seller/${productData.sellerId}`}>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100 hover:shadow-xl transition-all cursor-pointer">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <span className="font-semibold text-blue-600">{productData.seller.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="font-medium text-blue-900">{productData.seller}</p>
                      <p className="text-sm text-blue-600">98% Positive Seller Rating</p>
                    </div>
                  </div>
                  <ChevronRight className="text-blue-600" />
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Product Description & Specifications */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100 mb-12">
          <h2 className="text-xl font-bold text-blue-900 mb-6">Product Details</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-blue-900 mb-4">Description</h3>
              <p className="text-blue-700 mb-6">{productData.description}</p>
              
              {productData.features && (
                <>
                  <h4 className="font-semibold text-blue-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {productData.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                        <span className="text-blue-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>

            {productData.specifications && (
              <div>
                <h3 className="font-semibold text-blue-900 mb-4">Specifications</h3>
                <div className="space-y-3">
                  {Object.entries(productData.specifications).map(([key, value]) => (
                    <div key={key} className="flex border-b border-blue-100 pb-2">
                      <span className="w-1/3 text-blue-600 font-medium">{key}</span>
                      <span className="w-2/3 text-blue-900">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product, index) => (
              <div key={index} className="bg-white rounded-2xl p-4 shadow-lg border border-blue-100 hover:shadow-xl transition-all">
                <div className="relative mb-4">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 object-contain rounded-xl"
                  />
                  <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                    {product.discount}
                  </span>
                </div>
                <h3 className="font-semibold text-blue-900 text-sm mb-2 line-clamp-2">
                  {product.title}
                </h3>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-lg font-bold text-blue-900">{product.price}</span>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl text-sm font-medium transition-colors">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Customer Reviews Section */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Customer Reviews</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <div className="text-center mb-6">
                <div className="text-5xl font-bold text-blue-900 mb-2">{productData.rating}/5</div>
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      fill={i < Math.floor(productData.rating) ? "#f59e0b" : "none"}
                      className={i < Math.floor(productData.rating) ? "text-amber-400" : "text-gray-300"}
                    />
                  ))}
                </div>
                <p className="text-blue-600">Based on {productData.reviews} reviews</p>
              </div>
            </div>
            
            <div className="space-y-4">
              {/* Sample Review */}
              <div className="border-b border-blue-100 pb-4">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="font-semibold text-blue-600">A</span>
                  </div>
                  <div>
                    <p className="font-medium text-blue-900">Ahmed R.</p>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          fill={i < 5 ? "#f59e0b" : "none"}
                          className={i < 5 ? "text-amber-400" : "text-gray-300"}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-blue-700">Excellent phone! The camera quality is amazing and battery life lasts all day. Highly recommended!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}