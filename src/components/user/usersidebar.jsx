"use client"
import React, { useState } from "react"
import { Home, Search, ShoppingCart, Heart, User, Package, Settings, Smartphone, Shirt, Home as HomeIcon, BookOpen, Star, TrendingUp } from "lucide-react"

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
  { title: "Electronics", url: "/user/category/electronics", icon: Smartphone },
  { title: "Fashion", url: "/user/category/fashion", icon: Shirt },
  { title: "Home & Kitchen", url: "/user/category/home-kitchen", icon: HomeIcon },
  { title: "Books & Stationery", url: "/user/category/books", icon: BookOpen },
]

const quickLinks = [
  { title: "Trending", url: "/user/trending", icon: TrendingUp },
  { title: "Top Rated", url: "/user/top-rated", icon: Star },
  { title: "Settings", url: "/user/settings", icon: Settings },
]

export function AppSidebar() {
  const [open, setOpen] = useState(true)

  return (
    <Sidebar open={open} setOpen={setOpen}>
      <SidebarTrigger open={open} setOpen={setOpen} />

      {/* Brand */}
      {open && (
        <div style={{ padding: "1rem" }}>
          <h1 style={{
            fontSize: "1.25rem",
            fontWeight: "bold",
            backgroundImage: "linear-gradient(to right, #3b82f6, #f97316)",
            WebkitBackgroundClip: "text",
            color: "transparent"
          }}>
            BrowsePro
          </h1>
          <p style={{ fontSize: "0.875rem", color: "#6b7280" }}>Your Shopping Hub</p>
        </div>
      )}

      <SidebarGroup label="Main Menu">
        <SidebarMenu items={mainNavItems} open={open} />
      </SidebarGroup>

      <SidebarGroup label="Categories">
        <SidebarMenu items={categoryItems} open={open} />
      </SidebarGroup>

      <SidebarGroup label="Quick Links">
        <SidebarMenu items={quickLinks} open={open} />
      </SidebarGroup>
    </Sidebar>
  )
}
