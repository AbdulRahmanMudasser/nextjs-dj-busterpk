// src/app/(electronics)/components/CatAndAppliances.jsx
'use client'

import { topAppliances } from '@/data/data'

export default function CatAndAppliances({ addToCart }) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {/* Cat Teteee */}
      <div className="bg-gray-100 p-4 rounded-2xl flex flex-col">
        <h2 className="text-lg font-semibold mb-4">Cat teteee</h2>
        <div className="flex gap-4">
          <div className="w-1/3 relative group bg-white rounded-lg overflow-hidden shadow-md">
            <img src="/catimg.jpg" alt="Cat Tent" className="w-full h-auto" />
            <div className="p-2">
              <p className="font-semibold">Cat teette tent</p>
              <p className="text-sm text-gray-600">Texttiles</p>
              <p className="text-blue-600 font-bold">$670</p>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 space-x-2">
              <button className="bg-blue-600 text-white px-3 py-1 rounded">View</button>
              <button
                className="bg-green-600 text-white px-3 py-1 rounded"
                onClick={() =>
                  addToCart({
                    name: "Cat teette tent",
                    price: "$670",
                    img: "/catimg.jpg",
                  })
                }
              >
                Add to cart
              </button>
            </div>
          </div>
          <div className="w-2/3">
            <img
              src="/cat-tent.jpg"
              alt="Cat Tent Large"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      {/* Top 100 Appliances */}
      <div className="bg-gray-100 p-4 rounded-2xl">
        <h2 className="text-lg font-semibold mb-4">Top 100 Appliances</h2>
        <div className="grid grid-cols-2 gap-3">
          {topAppliances.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-lg p-3 text-center hover:bg-gray-200 transition-colors duration-300"
            >
              {item.img && (
                <img
                  src={item.img}
                  alt={item.name}
                  className="mx-auto mb-2 w-16 h-16 object-contain"
                />
              )}
              <p className="text-sm font-medium">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}