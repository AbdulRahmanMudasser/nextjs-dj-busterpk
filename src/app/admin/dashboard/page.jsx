"use client"

import { useState } from "react"
import {
  Bell,
  Package,
  Settings,
  Shield,
  ShoppingCart,
  Store,
  TrendingUp,
  Users,
  Home,
  MessageSquare,
  Search,
  ChevronDown,
  Menu,
  X,
  LogOut,
  User,
  Mail,
  Calendar,
  DollarSign,
  BarChart3,
  CreditCard
} from "lucide-react";
import DashboardOverview from "@/app/components/admin/dashboard/DashboardOverview";
import UserManagement from "@/app/components/admin/dashboard/User-Managment";
import SellerManagement from "@/app/components/admin/dashboard/seller-managment";
import ProductControl from "@/app/components/admin/dashboard/ProductManagment";
import OrderTracking from "@/app/components/admin/dashboard/OrderTracking";
import AdminSettings from "@/app/components/admin/dashboard/AdminSettings";
import AnalyticsDashboard from "@/app/components/admin/dashboard/AnalyticsDashboard";
import Communications from "@/app/components/admin/dashboard/Communications";
import NotificationFeed from "@/app/components/admin/dashboard/NotificationFeed";

const icons = {
  home: <Home className="w-5 h-5" />,
  users: <Users className="w-5 h-5" />,
  store: <Store className="w-5 h-5" />,
  package: <Package className="w-5 h-5" />,
  "shopping-cart": <ShoppingCart className="w-5 h-5" />,
  "trending-up": <TrendingUp className="w-5 h-5" />,
  "message-square": <MessageSquare className="w-5 h-5" />,
  bell: <Bell className="w-5 h-5" />,
  settings: <Shield className="w-5 h-5" />,
}

export default function AdminDashboard() {
  const [activeSection, setActiveSection] = useState("dashboard")
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [userDropdownOpen, setUserDropdownOpen] = useState(false)

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: "home" },
    { id: "users", label: "User Management", icon: "users" },
    { id: "sellers", label: "Seller Management", icon: "store" },
    { id: "products", label: "Product Management", icon: "package" },
    { id: "orders", label: "Order Management", icon: "shopping-cart" },
    { id: "analytics", label: "Analytics & Reports", icon: "trending-up" },
    { id: "communications", label: "Communication Tools", icon: "message-square" },
    { id: "notifications", label: "System Notifications", icon: "bell" },
    { id: "settings", label: "Admin Settings", icon: "settings" },
  ]

  const notifications = [
    { id: 1, text: "New user registered", time: "5 min ago" },
    { id: 2, text: "Order #1234 has been placed", time: "20 min ago" },
    { id: 3, text: "Server load is high", time: "1 hour ago" },
  ]

  const renderContent = () => {
    switch (activeSection) {
      case "dashboard":
        return <DashboardOverview />
      case "users":
        return <UserManagement />
      case "sellers":
        return <SellerManagement />
      case "products":
        return <ProductControl />
      case "orders":
        return <OrderTracking />
      case "settings":
        return <AdminSettings />
      case "analytics":
        return <AnalyticsDashboard />
      case "communications":
        return <Communications />
      case "notifications":
        return <NotificationFeed />
        // return (
        //   <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm text-center">
        //     <div className="bg-indigo-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
        //       <BarChart3 className="w-8 h-8 text-indigo-600" />
        //     </div>
        //     <h3 className="text-xl font-semibold text-gray-900 mb-2">
        //       Coming Soon
        //     </h3>
        //     <p className="text-gray-600 max-w-md mx-auto">
        //       This section is currently under development. Our team is working hard to bring you this feature soon.
        //     </p>
        //     <div className="mt-6 bg-gray-50 p-4 rounded-lg border border-gray-100 inline-block">
        //       <p className="text-sm text-gray-500">Estimated launch: June 30, 2023</p>
        //     </div>
        //   </div>
        // )
      default:
        return <DashboardOverview />
    }
  }

  return (
    <div className="flex h-screen bg-gray-50 font-sans">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-gray-900 bg-opacity-50 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside className={`
        fixed lg:relative inset-y-0 left-0 z-30 w-64 transform transition-transform duration-300 ease-in-out
        bg-white border-r border-gray-200 flex flex-col shadow-lg lg:shadow-none
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Branding */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h2 className="text-xl font-bold text-gray-900">Admin Panel</h2>
            <p className="text-sm text-gray-500 mt-1">Manage everything in one place</p>
          </div>
          <button
            className="lg:hidden p-1 rounded-md hover:bg-gray-100"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Menu */}
        <div className="flex-1 overflow-y-auto px-3 py-4">
          <nav className="space-y-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id)
                  setSidebarOpen(false)
                }}
                className={`
                  flex items-center w-full px-4 py-3 rounded-lg transition-all duration-200
                  ${activeSection === item.id
                    ? 'bg-indigo-50 text-indigo-700 shadow-sm'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                  }
                `}
              >
                <span className={activeSection === item.id ? 'text-indigo-600' : 'text-gray-400'}>
                  {icons[item.icon]}
                </span>
                <span className="ml-3 font-medium">{item.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Sidebar footer */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center space-x-3 p-2 rounded-lg bg-gray-50">
            <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white text-sm font-medium">
              JD
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">John Doe</p>
              <p className="text-xs text-gray-500 truncate">Administrator</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-hidden flex flex-col">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 py-4 px-6 flex items-center justify-between">
          <div className="flex items-center">
            <button
              className="lg:hidden p-1 mr-4 rounded-md hover:bg-gray-100"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="w-5 h-5 text-gray-500" />
            </button>
            <div className="relative max-w-md w-full">
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <div className="relative">
              <button className="p-2 rounded-full hover:bg-gray-100 relative">
                <Bell className="w-5 h-5 text-gray-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>

              {/* Notification dropdown */}
              <div className="hidden absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-10">
                <div className="px-4 py-2 border-b border-gray-100">
                  <h3 className="font-medium text-gray-900">Notifications</h3>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  {notifications.map(notification => (
                    <div key={notification.id} className="px-4 py-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0">
                      <p className="text-sm text-gray-800">{notification.text}</p>
                      <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                    </div>
                  ))}
                </div>
                <div className="px-4 py-2 border-t border-gray-100">
                  <button className="text-sm text-indigo-600 hover:text-indigo-800 font-medium">
                    View all notifications
                  </button>
                </div>
              </div>
            </div>

            {/* User menu */}
            <div className="relative">
              <button
                className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100"
                onClick={() => setUserDropdownOpen(!userDropdownOpen)}
              >
                <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white text-sm font-medium">
                  JD
                </div>
                <div className="hidden md:block text-left">
                  <p className="text-sm font-medium text-gray-900">John Doe</p>
                  <p className="text-xs text-gray-500">Administrator</p>
                </div>
                <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${userDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* User dropdown */}
              {userDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-10">
                  <div className="px-4 py-2 border-b border-gray-100">
                    <p className="text-sm font-medium text-gray-900">John Doe</p>
                    <p className="text-xs text-gray-500">john.doe@example.com</p>
                  </div>
                  <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    <User className="w-4 h-4 mr-2" />
                    Profile
                  </button>
                  <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    <Settings className="w-4 h-4 mr-2" />
                    Settings
                  </button>
                  <div className="border-t border-gray-100 my-1"></div>
                  <button className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100">
                    <LogOut className="w-4 h-4 mr-2" />
                    Sign out
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-6 bg-gray-50">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm min-h-[calc(100vh-120px)]">
            <div className="p-6">
              {/* Page title */}
              <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-900 capitalize">
                  {activeSection.replace('-', ' ')}
                </h1>
                <p className="text-gray-600 mt-1">
                  {activeSection === 'dashboard'
                    ? 'Overview of your platform statistics and performance'
                    : `Manage ${activeSection.replace('-', ' ')} settings and configurations`
                  }
                </p>
              </div>

              {/* Content */}
              {renderContent()}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}