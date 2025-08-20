'use client'

import Slider from "react-slick"
import "slick-carousel/slick/slick.css" 
import "slick-carousel/slick/slick-theme.css"

export default function ShopByBrand() {
  return (
    <div className="py-16 bg-gradient-to-b from-gray-50 via-white to-gray-50 mt-6">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r  from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Shop By <span className="text-red-600">Brand</span>
          </h2>
          <p className="text-gray-500 mt-3 text-lg">
            Discover premium collections from world-leading brands
          </p>
        </div>

        {/* Brand Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Apple Watch */}
          <div className="bg-white p-8 rounded-3xl flex flex-col items-center text-center shadow-lg hover:shadow-2xl transition-all duration-500 group border border-gray-100">
            <div className="w-full h-64 mb-6 flex items-center justify-center overflow-hidden rounded-xl bg-gray-50">
              <img
                src="/banner-watch.png"
                alt="Apple Watch Ultra 2"
                className="h-full object-contain group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3"> WATCH ULTRA 2</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Experience a magical way to use your watch without touching the screen.  
              Featuring the brightest Apple display ever.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
              Shop Now
            </button>
          </div>

          {/* Ross Gardam Furniture */}
          <div className="bg-gradient-to-br from-gray-900 to-black text-white p-8 rounded-3xl flex flex-col items-center text-center shadow-lg hover:shadow-2xl transition-all duration-500 group">
            <div className="w-full h-64 mb-6 flex items-center justify-center overflow-hidden rounded-xl bg-gray-800">
              <img
                src="/banner-furniture.png"
                alt="Ross Gardam Furniture"
                className="h-full object-contain group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <h3 className="text-2xl font-bold mb-2">ROSS GARDAM</h3>
            <p className="text-red-400 font-medium mb-1 uppercase tracking-wide text-sm">
              Hearth Loft Series
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Expansive proportions with soft, curved arms create the perfect gown for relaxation and modern living.
            </p>
            <button className=" bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
              Shop Now
            </button>
          </div>

          {/* Dyson Supersonic */}
          <div className="bg-white p-8 rounded-3xl flex flex-col items-center text-center shadow-lg hover:shadow-2xl transition-all duration-500 group border border-gray-100">
            <div className="w-full h-64 mb-6 flex items-center justify-center overflow-hidden rounded-xl bg-gray-50">
              <img
                src="/banner-dryer.png"
                alt="Dyson Supersonic"
                className="h-full object-contain group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              <span className="font-bold">Dyson</span>{" "}
              <span className="font-normal">Supersonic</span>
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Finished in Blue Blush, cushioned with premium fabric and paired with a removable non-slip lid stand.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
