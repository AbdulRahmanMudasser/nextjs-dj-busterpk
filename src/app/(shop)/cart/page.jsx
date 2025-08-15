'use client';

import { useState } from 'react';
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function CartPage() {
  // Initial cart state (should come from global state/store in a real app)
  const [items, setItems] = useState([]);

  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) return;
    setItems(items.map(item =>
      item.product.id === productId ? { ...item, quantity } : item
    ));
  };

  const removeItem = (productId) => {
    setItems(items.filter(item => item.product.id !== productId));
  };

  const subtotal = items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const deliveryFee = subtotal > 2000 ? 0 : 150;
  const total = subtotal + deliveryFee;

  if (items.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <div className="text-gray-400 mb-6">
          <ShoppingBag className="h-24 w-24 mx-auto" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
        <p className="text-gray-600 mb-8">Start shopping to add items to your cart</p>
        <Link
          href="/shop/products"
          className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Shopping Cart</h1>
      
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <div key={item.product.id} className="bg-white rounded-xl p-6 border border-gray-100">
              <div className="flex items-center gap-4">
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">{item.product.name}</h3>
                  {item.product.nameUrdu && (
                    <p className="text-sm text-gray-500 mb-2">{item.product.nameUrdu}</p>
                  )}
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-gray-900">
                      ₨{item.product.price.toLocaleString()}
                    </span>
                    <span className="text-sm text-gray-500">each</span>
                  </div>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  
                  <span className="w-8 text-center font-medium">{item.quantity}</span>
                  
                  <button
                    onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>

                {/* Item Total */}
                <div className="text-right">
                  <div className="font-bold text-lg text-gray-900">
                    ₨{(item.product.price * item.quantity).toLocaleString()}
                  </div>
                  <button
                    onClick={() => removeItem(item.product.id)}
                    className="text-red-500 hover:text-red-700 text-sm mt-1 flex items-center gap-1"
                  >
                    <Trash2 className="h-4 w-4" />
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl p-6 border border-gray-100 sticky top-4">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal ({items.length} items)</span>
                <span>₨{subtotal.toLocaleString()}</span>
              </div>
              
              <div className="flex justify-between text-gray-600">
                <span>Delivery Fee</span>
                <span>
                  {deliveryFee === 0 ? (
                    <span className="text-green-600 font-medium">FREE</span>
                  ) : (
                    `₨${deliveryFee}`
                  )}
                </span>
              </div>
              
              {subtotal < 2000 && (
                <div className="text-sm text-orange-600 bg-orange-50 p-3 rounded-lg">
                  Add ₨{(2000 - subtotal).toLocaleString()} more for free delivery!
                </div>
              )}
              
              <hr />
              
              <div className="flex justify-between text-lg font-bold text-gray-900">
                <span>Total</span>
                <span>₨{total.toLocaleString()}</span>
              </div>
            </div>

            <Link
              href="/shop/checkout"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
            >
              Proceed to Checkout
              <ArrowRight className="h-4 w-4" />
            </Link>
            
            <div className="mt-4 text-center">
              <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                <span className="text-green-600">✓</span>
                Cash on Delivery Available
              </div>
              <div className="flex items-center justify-center gap-2 text-sm text-gray-600 mt-1">
                <span className="text-green-600">✓</span>
                Secure Checkout
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
