'use client'

import { recommendedProducts } from "@/data/data"

export default function RecommendedProducts() {
  return (
    <div className="p-8 bg-white rounded-xl shadow-sm">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">More Recommended Products</h2>
        <p className="text-gray-500 mt-1">Discover products you'll love</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {recommendedProducts.map((product, index) => (
          <div
            key={index}
            className="group bg-white p-5 rounded-xl border border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="relative h-48 w-full mb-4 overflow-hidden rounded-lg bg-gray-50 flex items-center justify-center">
              <img
                src={product.img}
                alt={product.title}
                className="h-40 object-contain transition-all duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <div className="space-y-2">
              <h3 className="font-medium text-gray-900 text-lg line-clamp-2 group-hover:text-blue-600 transition-colors">
                {product.name}
              </h3>
              <p className="text-gray-600 font-medium">{product.price}</p>
              <button className="w-full mt-3 py-2 px-4 bg-[#ff0e1e] hover:bg-[#ff0e1e8e] text-white rounded-lg text-sm font-medium transition-colors duration-300">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}