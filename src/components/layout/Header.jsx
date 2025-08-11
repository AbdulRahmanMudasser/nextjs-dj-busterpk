'use client'

import Link from 'next/link'
import Image from 'next/image' 
import {
  Smartphone,
  Laptop,
  Headphones,
  Gamepad2,
  Monitor,
  Tv,
  Watch,
  Camera,
  Printer,
  Search,
  ShoppingCart,
  PhoneCall,
  Heart,
  User,
  List // Added for a categories icon
} from 'lucide-react'
import { useState } from 'react'

// ✅ Categories with multiple subcategories for dropdown
const categories = [
  { icon: <List size={20} />, name: 'Categories', subcategories: [
    { name: 'Smartphones', icon: <Smartphone size={16} /> },
    { name: 'Laptops', icon: <Laptop size={16} /> },
    { name: 'Headphones', icon: <Headphones size={16} /> },
    { name: 'Gaming', icon: <Gamepad2 size={16} /> },
    { name: 'Monitors', icon: <Monitor size={16} /> },
    { name: 'Televisions', icon: <Tv size={16} /> },
    { name: 'Watches', icon: <Watch size={16} /> },
    { name: 'Cameras', icon: <Camera size={16} /> },
    { name: 'Printers', icon: <Printer size={16} /> },
  ]},
]

export default function Header() {
  const [search, setSearch] = useState('')
  const [showCategories, setShowCategories] = useState(false) // state for dropdown toggle

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Top Bar */}
      <div className="bg-[#0e0620] text-white text-sm px-4 py-2 flex justify-between items-center">
        <div className="flex space-x-4">
          <Link href="#">About Us</Link>
          <Link href="#">Our Partners</Link>
          <Link href="#">Become a Seller</Link>
        </div>
        <div className="flex space-x-4">
          <Link href="#">Track Your Order</Link>
          <Link href="#">Contact Us</Link>
          <Link href="#">FAQs</Link>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-[#0e0620] text-white px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center text-2xl font-bold space-x-2 cursor-pointer">
          {/* Image logo */}
          <Image
            src="/bustardlogo.jpeg" // place your image in /public folder
            alt="Bustard Logo"
            width={40} // adjust as needed
            height={40}
            className="rounded-full" // optional styling
          />
          
          {/* Text logo */}
          <span className="text-purple-500"></span>
          <span>Bustard</span>
          <span className="text-purple-500">PK</span>
        </Link>

        {/* Search Bar */}
        <div className="flex-1 w-full max-w-2xl">
          <div className="flex items-center bg-white rounded-full px-4 py-2">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search for products"
              className="flex-1 text-black bg-transparent outline-none px-2"
            />
            <Search className="text-red-500" />
          </div>
        </div>

        {/* Hotline + Cart */}
        <div className="flex items-center space-x-6 text-sm">
          <div className="flex items-center space-x-2">
            <PhoneCall size={18} />
            <div>
              <div className="font-bold">Hotline 24/7</div>
              <div>(111) 111–1111</div>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <ShoppingCart />
            <div>
              <div className="text-red-400 font-bold">Rs. 1,000</div>
              <div>4 items</div>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee + Wishlist/Login */}
      <div className="bg-[#ff0e1e] text-white px-4 py-2 flex flex-col md:flex-row items-center justify-between text-sm overflow-hidden">
        <div className="overflow-hidden w-full md:w-auto">
          <div className="animate-marquee whitespace-nowrap text-center text-base font-medium">
            Bustard App Coming Soon 🚀 &nbsp; Bustard App Coming Soon 🚀 &nbsp; Bustard App Coming Soon 🚀
          </div>
        </div>

        <div className="hidden md:flex space-x-6">
          <Link href="#" className="flex items-center space-x-1">
            <Heart size={16} />
            <span>Wishlist</span>
          </Link>
          <Link href="#" className="flex items-center space-x-1">
            <User size={16} />
            <span>Login / Register</span>
          </Link>
        </div>
      </div>

      {/* Category Menu */}
      <nav className="bg-white shadow px-4 py-3 relative">
        <div className="container mx-auto flex overflow-x-auto no-scrollbar space-x-6">
          {categories.map((cat, idx) => (
            <div key={idx} className="relative">
              <button
                onClick={() => setShowCategories(!showCategories)}
                className="flex items-center space-x-2 text-gray-800 hover:text-purple-600 font-medium whitespace-nowrap focus:outline-none"
              >
                {cat.icon}
                <span>{cat.name}</span>
              </button>

              {/* Dropdown */}
              {showCategories && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50">
                  {cat.subcategories.map((sub, subIdx) => (
                    <Link
                      href="#"
                      key={subIdx}
                      className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-purple-100 hover:text-purple-600"
                    >
                      {sub.icon}
                      <span>{sub.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>

      {/* Marquee animation */}
      <style jsx>{`
        .animate-marquee {
          display: inline-block;
          animation: marquee 15s linear infinite;
        }

        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }

        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </header>
  )
}
