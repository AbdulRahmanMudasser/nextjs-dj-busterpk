'use client'

import { recommendedProducts } from "@/data/data"

export default function RecommendedProducts() {
  return (
    <div className="p-10 bg-gradient-to-b from-gray-50 to-white rounded-2xl shadow-md">
      {/* Section Header */}
      <div className="mb-10 flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            More Recommended Products
          </h2>
          <p className="text-gray-500 mt-1 text-sm">
            Handpicked items just for you
          </p>
        </div>
        <a
          href="#"
          className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
        >
          View All →
        </a>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {recommendedProducts.map((product, index) => (
          <div
            key={index}
            className="group relative bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            {/* Product Image */}
            <div className="relative h-56 w-full overflow-hidden rounded-t-xl bg-gray-50 flex items-center justify-center">
              <img
                src={product.img}
                alt={product.title}
                className="h-44 object-contain transition-transform duration-500 group-hover:scale-110"
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Product Info */}
            <div className="p-5 space-y-3">
              <h3 className="font-semibold text-gray-900 text-lg line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
                {product.name}
              </h3>
              <p className="text-gray-800 font-bold text-xl">{product.price}</p>

              {/* CTA Button */}
              <button className="w-full mt-3 py-2.5 px-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-lg text-sm font-medium shadow-md hover:shadow-lg transition-all duration-300">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
