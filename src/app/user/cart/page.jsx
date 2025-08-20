'use client'

import { useState } from "react"
import Image from "next/image"
import { Minus, Plus, X, ShoppingBag, Truck, Shield, ArrowRight, CreditCard, Heart, Zap, Clock } from "lucide-react"
import iphoneImage from "../../../../public/phone.jpeg"
import tshirtImage from "../../../../public/jumpers.webp"
import coffeeMakerImage from "../../../../public/Fridge.jpg"

const initialCartItems = [
  { 
    id: "1", 
    name: "iPhone 15 Pro Max 256GB", 
    price: 1199.99, 
    originalPrice: 1299.99, 
    image: iphoneImage, 
    quantity: 1, 
    inStock: true,
    isHot: true,
    timeLeft: "12:45:33"
  },
  { 
    id: "2", 
    name: "Premium Cotton T-Shirt", 
    price: 29.99, 
    originalPrice: 39.99, 
    image: tshirtImage, 
    quantity: 2, 
    inStock: true,
    isHot: true,
    timeLeft: "06:22:17"
  },
  { 
    id: "3", 
    name: "Smart Coffee Maker Pro", 
    price: 149.99, 
    image: coffeeMakerImage, 
    quantity: 1, 
    inStock: true 
  }
]

export default function Cart() {
  const [cartItems, setCartItems] = useState(initialCartItems)
  const [promoCode, setPromoCode] = useState("")
  const fmt = (n) => n.toLocaleString(undefined, { style: "currency", currency: "USD" })

  const updateQuantity = (id, change) => {
    setCartItems(prev => prev.map(item => item.id === id ? { ...item, quantity: Math.max(1, item.quantity + change) } : item))
  }
  const removeItem = (id) => setCartItems(prev => prev.filter(item => item.id !== id))

  const subtotal = cartItems.reduce((sum, i) => sum + (i.price * i.quantity), 0)
  const savings = cartItems.reduce((sum, i) => sum + (((i.originalPrice ?? i.price) - i.price) * i.quantity), 0)
  const shipping = subtotal > 50 ? 0 : 9.99
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  if (!cartItems.length) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-2xl p-8 text-center shadow-xl">
          <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <ShoppingBag className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-2xl font-bold text-blue-900 mb-2">Your cart is empty</h2>
          <p className="text-blue-700 mb-6">Add some products to get started with your shopping</p>
          <button className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white py-3 px-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl">
            Continue Shopping
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-blue-900">Shopping Cart</h1>
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
            {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {cartItems.map(item => (
              <div key={item.id} className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100 transition-all hover:shadow-xl">
                <div className="flex gap-6">
                  <div className="relative">
                    <div className="w-24 h-24 bg-blue-50 rounded-xl overflow-hidden">
                      <Image src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    {item.isHot && (
                      <div className="absolute -top-2 -left-2 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold px-2 py-1 rounded-lg flex items-center gap-1">
                        <Zap size={10} className="fill-white" /> HOT
                      </div>
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-blue-900 text-lg">{item.name}</h3>
                      <button 
                        onClick={() => removeItem(item.id)} 
                        className="p-1.5 rounded-lg hover:bg-blue-100 text-blue-700 transition-colors"
                      >
                        <X size={18} />
                      </button>
                    </div>

                    <div className="flex items-center gap-2 mb-3">
                      {item.inStock ? (
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-md font-medium">In Stock</span>
                      ) : (
                        <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-md font-medium">Out of Stock</span>
                      )}
                      {item.isHot && (
                        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-md font-medium flex items-center gap-1">
                          <Clock size={12} /> {item.timeLeft}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-bold text-blue-900 text-lg">{fmt(item.price)}</span>
                      {item.originalPrice && item.originalPrice > item.price && (
                        <span className="text-gray-500 line-through text-sm">{fmt(item.originalPrice)}</span>
                      )}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 bg-blue-50 rounded-xl p-1">
                        <button 
                          onClick={() => updateQuantity(item.id, -1)} 
                          disabled={item.quantity <= 1}
                          className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-blue-700 disabled:opacity-40 disabled:cursor-not-allowed shadow-sm"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="w-8 text-center font-semibold text-blue-900">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-blue-700 shadow-sm"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                      <div className="font-bold text-blue-900">{fmt(item.price * item.quantity)}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100">
              <h3 className="font-semibold text-blue-900 text-lg mb-4">Promo Code</h3>
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Enter promo code"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="flex-1 px-4 py-3 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <button 
                  disabled={!promoCode.trim()}
                  className="px-6 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold rounded-xl transition-colors"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100 sticky top-6">
              <h2 className="font-bold text-blue-900 text-xl mb-6 pb-4 border-b border-blue-100">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-blue-700">Subtotal</span>
                  <span className="font-semibold text-blue-900">{fmt(subtotal)}</span>
                </div>
                
                {savings > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Savings</span>
                    <span className="font-semibold">-{fmt(savings)}</span>
                  </div>
                )}
                
                <div className="flex justify-between">
                  <span className="text-blue-700">Shipping</span>
                  <span className="font-semibold text-blue-900">{shipping === 0 ? "Free" : fmt(shipping)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-blue-700">Tax</span>
                  <span className="font-semibold text-blue-900">{fmt(tax)}</span>
                </div>
              </div>
              
              <div className="flex justify-between items-center mb-6 pt-4 border-t border-blue-100">
                <span className="font-bold text-blue-900 text-lg">Total</span>
                <span className="font-bold text-blue-900 text-xl">{fmt(total)}</span>
              </div>
              
              <button className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white py-4 px-6 rounded-xl font-semibold flex items-center justify-center gap-3 transition-all shadow-lg hover:shadow-xl">
                <CreditCard size={20} />
                Proceed to Checkout
                <ArrowRight size={20} />
              </button>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Truck size={20} className="text-blue-600" />
                  </div>
                  <span className="text-blue-800">Free shipping on orders over $50</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Shield size={20} className="text-blue-600" />
                  </div>
                  <span className="text-blue-800">100% secure checkout</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}