'use client'
import { Monitor, Smartphone, Headphones, Gamepad2, Laptop, Tv, Watch, Camera, Printer } from 'lucide-react'
import { useState } from 'react'

export default function LeftSidebar() {
  const [activeCategory, setActiveCategory] = useState(null)
  
  const categories = [
    { icon: <Smartphone size={20} />, name: "Smartphones" },
    { icon: <Laptop size={20} />, name: "Laptops" },
    { icon: <Headphones size={20} />, name: "Headphones" },
    { icon: <Gamepad2 size={20} />, name: "Gaming Consoles" },
    { icon: <Monitor size={20} />, name: "Monitors" },
    { icon: <Tv size={20} />, name: "Televisions" },
    { icon: <Watch size={20} />, name: "Smart Watches" },
    { icon: <Camera size={20} />, name: "Cameras" },
    { icon: <Printer size={20} />, name: "Printers" },
  ]

  return (
    <div className="col-span-1 space-y-6">
      {/* Categories List */}
      <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Categories
            </span>
          </h2>
          <div className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
            {categories.length} items
          </div>
        </div>
        
        <ul className="space-y-2">
          {categories.map((cat, i) => (
            <li
              key={i}
              onClick={() => setActiveCategory(i)}
              className={`flex items-center p-3 rounded-xl transition-all duration-300 cursor-pointer
                ${activeCategory === i 
                  ? 'bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-500 shadow-sm'
                  : 'hover:bg-gray-50'}`}
            >
              <div className={`p-2 rounded-lg mr-3 transition-all duration-300
                ${activeCategory === i 
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 group-hover:bg-blue-100 group-hover:bg-[#ff0e1ea8]'}`}>
                {cat.icon}
              </div>
              <span className={`font-medium transition-colors duration-300
                ${activeCategory === i 
                  ? 'text-[#ff0e1ea8] font-semibold'
                  : 'text-gray-700 hover:text-[#ff0e1ea8]'}`}>
                {cat.name}
              </span>
              {activeCategory === i && (
                <div className="ml-auto h-2 w-2 bg-blue-500 rounded-full animate-pulse"></div>
              )}
            </li>
          ))}
        </ul>
        
        {/* Special Offer Banner */}
        <div className="mt-6 bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-xl border border-blue-100">
          <div className="flex items-center">
            <div className="bg-blue-100 p-2 rounded-lg mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#ff0e1ea8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-800">Special Offers</p>
              <p className="text-xs text-gray-500">Limited time deals</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}