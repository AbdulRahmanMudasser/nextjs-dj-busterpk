// src/context/CartContext.js
'use client'

import { createContext, useState, useContext } from 'react'

const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

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
    <CartContext.Provider value={{ cart, addToCart, isCartOpen, setIsCartOpen }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}