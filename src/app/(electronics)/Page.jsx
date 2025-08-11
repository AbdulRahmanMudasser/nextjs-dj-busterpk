// src/app/(electronics)/page.jsx
'use client'

import { useState } from 'react'
import CartDrawer from '@/features/cart/components/CartDrawer'
import LeftSidebar from './components/LeftSidebar'
import FeaturedProducts from './components/FeaturedProducts'
// import PS5DiscountSection from './components/PS5DiscountSection'

import QuickViewModal from './components/QuickViewModal'

export default function Page() {
  // State management
  const [cart, setCart] = useState([])
  const [quickViewProduct, setQuickViewProduct] = useState(null)
  const [isCartOpen, setIsCartOpen] = useState(false)

  // Shared function
  const addToCart = (product) => {
    setCart((prevCart) => {
      const productId = product.id || product.name
      const existingItemIndex = prevCart.findIndex(
        (item) => (item.product.id || item.product.name) === productId
      )

      if (existingItemIndex !== -1) {
        const updatedCart = [...prevCart]
        updatedCart[existingItemIndex] = {
          ...updatedCart[existingItemIndex],
          quantity: updatedCart[existingItemIndex].quantity + 1,
        }
        return updatedCart
      } else {
        return [...prevCart, { product, quantity: 1 }]
      }
    })
    setIsCartOpen(true)
  }

  return (
    <div className="grid grid-cols-6 gap-4 p-4 bg-gray-50 mt-10">
      {/* Left Sidebar */}
      <LeftSidebar />
      
      {/* Right Content */}
      <div className="col-span-5 space-y-6">
        {/* Featured Products */}
        <FeaturedProducts 
          addToCart={addToCart} 
          setQuickViewProduct={setQuickViewProduct}
        />
        
      </div>

      {/* Quick View Modal */}
      <QuickViewModal
        product={quickViewProduct}
        addToCart={addToCart}
        onClose={() => setQuickViewProduct(null)}
      />

      {/* Cart Drawer */}
      <CartDrawer
        cart={cart}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
    </div>
  )
}