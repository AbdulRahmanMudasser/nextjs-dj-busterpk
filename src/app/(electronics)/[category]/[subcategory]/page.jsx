// src/app/(electronics)/[category]/[subcategory]/page.jsx
'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { allproductsData } from '@/data/data'
import { FaShoppingCart } from "react-icons/fa"

export default function ElectronicsCategoryScreen() {
  const { category, subcategory } = useParams()

  const filteredProducts = allproductsData.filter((product) => {
    return (
      product.category.toLowerCase() === category.toLowerCase() &&
      product.subcategory.toLowerCase() === subcategory.toLowerCase()
    )
  })

  const formatText = (text) => {
    return text
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ')
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between mb-4">
        <h2 className="text-3xl font-bold">
          {formatText(category)} / {formatText(subcategory)}
        </h2>
        <div className="text-sm space-x-4">
          <span className="text-red-500 font-semibold">Popular</span>
          <span className="text-gray-500">Most Viewed</span>
          <span className="text-gray-500">Top Selling</span>
        </div>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-500 text-lg mb-4">
            No products found for {formatText(subcategory)} in {formatText(category)}.
          </p>
          <Link 
            href="/electronics" 
            className="text-blue-600 hover:underline"
          >
            Browse all electronics
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredProducts.map((product) => (
            <Link 
              href={`/electronics/product/${product.id}`} 
              key={product.id}
            >
              <div className="relative bg-gray-100 rounded-xl p-2 text-center transition-transform duration-300 ease-in-out hover:scale-110">
                <div className="relative group">
                  <img
                    src={`/${product.img}`}
                    alt={product.name}
                    className="w-full h-28 object-contain mb-2"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 rounded-xl">
                    <button
                      className="bg-blue-600 p-2 rounded-full text-white hover:bg-blue-700"
                      onClick={(e) => {
                        e.preventDefault()
                        console.log("Add to cart", product)
                      }}
                    >
                      <FaShoppingCart />
                    </button>
                  </div>
                </div>
                <p className="text-sm font-medium line-clamp-2">{product.name}</p>
                {product.oldPrice && (
                  <p className="text-xs text-gray-500 line-through">{product.oldPrice}</p>
                )}
                <p className="text-sm text-red-500 font-bold">{product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}