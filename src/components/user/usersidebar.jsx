"use client"
import React, { useState, useEffect } from "react"
import { Home, Search, ShoppingCart, Heart, User, Package, Settings, Smartphone, Shirt, Home as HomeIcon, BookOpen, Star, TrendingUp, X, Menu } from "lucide-react"

import { Sidebar } from "@/app/components/ui/sidebar/Sidebar"
import { SidebarTrigger } from "@/app/components/ui/sidebar/SidebarTrigger"
import { SidebarGroup } from "@/app/components/ui/sidebar/SidebarGroup"
import { SidebarMenu } from "@/app/components/ui/sidebar/SidebarMenu"

const mainNavItems = [
  { title: "Dashboard", url: "/user/user-dash", icon: Home },
  { title: "Search", url: "/user/search", icon: Search },
  { title: "Cart", url: "/user/cart", icon: ShoppingCart },
  { title: "Wishlist", url: "/user/wishlist", icon: Heart },
  { title: "Orders", url: "/user/user-orders", icon: Package },
  { title: "Profile", url: "/user/user-profile", icon: User },
]

const categoryItems = [
  { title: "All Categories", url: "/user/category", icon: Smartphone },
  // { title: "Fashion", url: "/user/category/fashion", icon: Shirt },
  // { title: "Home & Kitchen", url: "/user/category/home-kitchen", icon: HomeIcon },
  // { title: "Books & Stationery", url: "/user/category/books", icon: BookOpen },
]

const quickLinks = [
  { title: "Trending", url: "/user/trending", icon: TrendingUp },
  { title: "Top Rated", url: "/user/top-rated", icon: Star },
  { title: "Settings", url: "/user/settings", icon: Settings },
]

export function AppSidebar() {
  const [open, setOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
      if (window.innerWidth >= 768) {
        setOpen(true)
      } else {
        setOpen(false)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const toggleSidebar = () => {
    setOpen(!open)
  }

  return (
    <>
      {/* Mobile header */}
      {isMobile && (
        <div className="md:hidden fixed top-0 left-0 right-0 z-40 bg-white shadow-sm p-4 flex items-center justify-between">
          <div className="flex items-center">
            <button 
              onClick={toggleSidebar}
              className="mr-4 text-gray-600 hover:text-gray-900"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent">
                Bustard
              </h1>
            </div>
          </div>
        </div>
      )}

      <Sidebar 
        open={open} 
        setOpen={setOpen}
        className={`${isMobile ? 'fixed top-0 left-0 z-50 h-full' : 'sticky top-0 h-screen'} transition-all duration-300 ease-in-out`}
      >
        {!isMobile && (
          <SidebarTrigger open={open} setOpen={setOpen} />
        )}

        {/* Brand */}
        <div className={`p-4 ${!open && 'hidden'}`}>
          <div className="flex items-center space-x-2">
            <h1 className={`font-bold bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent ${open ? 'text-xl' : 'text-lg'}`}>
              Bustard
            </h1>
          </div>
          {open && (
            <p className="text-sm text-gray-500 mt-1">Your Shopping Hub</p>
          )}
        </div>

        <div className="overflow-y-auto h-full pb-20">
          <SidebarGroup label={open ? "Main Menu" : ""}>
            <SidebarMenu items={mainNavItems} open={open} />
          </SidebarGroup>

          <SidebarGroup label={open ? "Categories" : ""}>
            <SidebarMenu items={categoryItems} open={open} />
          </SidebarGroup>

          <SidebarGroup label={open ? "Quick Links" : ""}>
            <SidebarMenu items={quickLinks} open={open} />
          </SidebarGroup>
        </div>

        {/* Mobile overlay */}
        {isMobile && open && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={toggleSidebar}
          />
        )}
      </Sidebar>
    </>
  )
}