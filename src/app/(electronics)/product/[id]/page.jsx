// src/app/(electronics)/product/[id]/page.jsx
'use client'

import { useParams } from 'next/navigation'
import { useState, useEffect } from 'react'
import { featuredProducts } from '@/data/data'
import CartDrawer from '@/features/cart/components/CartDrawer'
import Link from 'next/link'

export default function ProductPage() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [cart, setCart] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("description")

  useEffect(() => {
    const found = featuredProducts.find(
      (item) => String(item.id) === id || item.name === id
    )
    setProduct(found)
  }, [id])

  const addToCart = (productToAdd) => {
    setCart((prevCart) => {
      const productId = productToAdd.id || productToAdd.name
      const existingIndex = prevCart.findIndex(
        (item) => (item.product.id || item.product.name) === productId
      )

      if (existingIndex !== -1) {
        const updatedCart = [...prevCart]
        updatedCart[existingIndex] = {
          ...updatedCart[existingIndex],
          quantity: updatedCart[existingIndex].quantity + 1,
        }
        return updatedCart
      } else {
        return [...prevCart, { product: productToAdd, quantity: 1 }]
      }
    })
    setIsCartOpen(true)
  }

  if (!product) return <p className="p-4">Loading product...</p>

  return (
    <div className="product-page max-w-[1200px] mx-auto font-sans p-5">
      {/* Fast Delivery Banner */}
      <div className="bg-gray-100 p-3 rounded mb-5 text-base font-bold text-gray-800">
        Fast delivery within 72 Hours
      </div>

      {/* Main Product Section */}
      <div className="flex gap-8 mb-10">
        {/* Product Image */}
        <div className="flex-1 min-w-[400px]">
          <img
            src={`/${product.img}`}
            alt={product.name}
            className="w-full h-auto border border-gray-200 rounded"
          />
        </div>

        {/* Product Details */}
        <div className="flex-1">
          <h2 className="text-2xl text-gray-800 mb-2 font-normal">
            {product.name}
          </h2>

          {/* Price */}
          <div className="my-4">
            {product.oldPrice && (
              <span className="text-lg text-gray-500 line-through mr-2">
                {product.oldPrice}
              </span>
            )}
            <span className="text-xl text-red-600 font-bold">
              {product.price}
            </span>
          </div>

          {/* Ratings */}
          <div className="flex items-center my-4 text-yellow-400">
            <span>✿✿✿✿✿</span>
            <span className="text-gray-600 text-sm ml-1">
              (2 customer reviews)
            </span>
          </div>

          {/* Description */}
          <p className="leading-relaxed text-gray-700 my-5">
            {product.description}
          </p>

          {/* Buttons */}
          <div className="flex gap-3 my-6">
            <button 
              onClick={() => addToCart(product)}
              className="bg-blue-600 text-white border-none px-5 py-3 rounded cursor-pointer font-bold text-base"
            >
              Add To Cart
            </button>
            <button className="bg-green-600 text-white border-none px-5 py-3 rounded cursor-pointer font-bold text-base">
              Buy Now
            </button>
          </div>

          {/* Product Actions */}
          <div className="flex justify-between border-t border-gray-200 pt-4 text-gray-600 text-sm">
            <div>
              <span className="mr-4 cursor-pointer">
                <span className="font-bold">X</span> | Add to compare
              </span>
            </div>
            <div className="flex gap-4">
              <span className="cursor-pointer">Add to wishlist</span>
              <span className="cursor-pointer">Share: ↑</span>
              <span className="cursor-pointer">X</span>
              <span className="cursor-pointer">in</span>
            </div>
          </div>

          {/* Delivery Info */}
          <div className="mt-6 border border-gray-200 rounded p-4">
            <div className="flex items-center mb-3">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-xs">✓</span>
              </div>
              <span>Free shipping on orders over $50</span>
            </div>
            <div className="flex items-center mb-3">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-xs">✓</span>
              </div>
              <span>Fast delivery within 72 hours</span>
            </div>
            <div className="flex items-center">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-xs">✓</span>
              </div>
              <span>Easy 30-day returns</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="mb-10">
        <div className="flex border-b border-gray-300 mb-5">
          <button
            className={`px-5 py-2 border-none ${activeTab === "description" ? "bg-white text-blue-600 border-b-2 border-blue-600" : "bg-transparent text-gray-600"} cursor-pointer font-bold`}
            onClick={() => setActiveTab("description")}
          >
            Description
          </button>
          <button
            className={`px-5 py-2 border-none ${activeTab === "specifications" ? "bg-white text-blue-600 border-b-2 border-blue-600" : "bg-transparent text-gray-600"} cursor-pointer font-bold`}
            onClick={() => setActiveTab("specifications")}
          >
            Specifications
          </button>
          <button
            className={`px-5 py-2 border-none ${activeTab === "reviews" ? "bg-white text-blue-600 border-b-2 border-blue-600" : "bg-transparent text-gray-600"} cursor-pointer font-bold`}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews (2)
          </button>
        </div>

        {activeTab === "description" && (
          <div className="p-4 leading-relaxed text-gray-700">
            <p>{product.description}</p>
            <p className="mt-4">
              The {product.name} delivers exceptional performance with its cutting-edge technology. 
              Designed for both casual users and professionals, it offers an unparalleled experience 
              that will transform how you interact with technology.
            </p>
          </div>
        )}

        {activeTab === "specifications" && (
          <div className="grid grid-cols-2 gap-5 p-4">
            <div>
              <h3 className="text-base font-bold mb-3">General</h3>
              <table className="w-full border-collapse">
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 text-gray-500 w-[40%]">Brand</td>
                    <td className="py-2">{product.name.split(" ")[0]}</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 text-gray-500">Model</td>
                    <td className="py-2">{product.name}</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 text-gray-500">Release Date</td>
                    <td className="py-2">2023</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <h3 className="text-base font-bold mb-3">Technical</h3>
              <table className="w-full border-collapse">
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 text-gray-500 w-[40%]">Dimensions</td>
                    <td className="py-2">8.5 x 5.5 x 3.2 inches</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 text-gray-500">Weight</td>
                    <td className="py-2">1.2 lbs</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 text-gray-500">Warranty</td>
                    <td className="py-2">1 Year</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="p-4">
            <div className="flex items-center mb-5 text-yellow-400">
              <span>✿✿✿✿✿</span>
              <span className="text-gray-600 ml-3 text-sm">
                5 out of 5 (2 customer reviews)
              </span>
            </div>

            <div className="border-b border-gray-200 pb-4 mb-4">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-gray-200 rounded-full mr-3"></div>
                <span className="font-bold">John D.</span>
              </div>
              <div className="flex items-center mb-3 text-yellow-400">
                <span>✿✿✿✿✿</span>
                <span className="text-gray-500 ml-3 text-xs">
                  1 week ago
                </span>
              </div>
              <p className="text-gray-700">
                Absolutely love this product! The quality exceeded my expectations and it arrived much faster than promised.
              </p>
            </div>

            <div className="pb-4">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-gray-200 rounded-full mr-3"></div>
                <span className="font-bold">Sarah M.</span>
              </div>
              <div className="flex items-center mb-3 text-yellow-400">
                <span>✿✿✿✿✿</span>
                <span className="text-gray-500 ml-3 text-xs">
                  2 weeks ago
                </span>
              </div>
              <p className="text-gray-700">
                Excellent purchase! Works perfectly and the customer service was very helpful when I had questions.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* You May Also Like Section */}
      <div>
        <h2 className="text-xl font-bold mb-5 border-b border-gray-200 pb-3">
          You May Also Like
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {featuredProducts
            .filter(p => p.id !== product.id)
            .slice(0, 4)
            .map(item => (
              <Link 
                href={`/electronics/product/${item.id}`} 
                key={item.id}
                className="no-underline text-inherit"
              >
                <div className="border border-gray-200 rounded p-4 text-center cursor-pointer transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                  <div className="h-[150px] flex items-center justify-center mb-4">
                    <img 
                      src={`/${item.img}`} 
                      alt={item.name} 
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <h3 className="text-sm mb-3 whitespace-nowrap overflow-hidden text-ellipsis">
                    {item.name}
                  </h3>
                  <div className="mb-2">
                    {item.oldPrice && (
                      <span className="text-xs text-gray-500 line-through mr-1">
                        {item.oldPrice}
                      </span>
                    )}
                    <span className="text-base text-red-600 font-bold">
                      {item.price}
                    </span>
                  </div>
                  <div className="text-yellow-400 text-xs">
                    ✿✿✿✿✿ <span className="text-gray-600">(2)</span>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>

      <CartDrawer
        cart={cart}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
    </div>
  )
}