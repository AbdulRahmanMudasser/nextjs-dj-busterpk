"use client"

import { useState } from "react"
import {
  BarChart3,
  TrendingUp,
  Users,
  ShoppingCart,
  DollarSign,
  Package,
  MapPin,
  Calendar,
  Download,
  Filter,
  ChevronDown,
  Eye,
  ShoppingBag,
  CreditCard,
  Repeat,
  Star,
  PieChart,
  BarChart,
  LineChart,
  ArrowUp,
  ArrowDown,
  MoreHorizontal
} from "lucide-react"

const AnalyticsDashboard = () => {
  const [dateRange, setDateRange] = useState("30d")
  const [activeTab, setActiveTab] = useState("overview")

  // Mock data - replace with actual API calls
  const metrics = {
    revenue: 124532,
    orders: 2345,
    customers: 12467,
    averageOrder: 112.45,
    conversion: 3.2
  }

  const salesData = [
    { day: "Mon", sales: 12340, orders: 134 },
    { day: "Tue", sales: 18760, orders: 156 },
    { day: "Wed", sales: 15430, orders: 143 },
    { day: "Thu", sales: 21340, orders: 187 },
    { day: "Fri", sales: 19870, orders: 176 },
    { day: "Sat", sales: 23120, orders: 201 },
    { day: "Sun", sales: 16540, orders: 154 }
  ]

  const topProducts = [
    { name: "Wireless Headphones", sales: 1234, revenue: 45678, growth: 12.3 },
    { name: "Smart Watch", sales: 987, revenue: 39876, growth: 8.7 },
    { name: "Fitness Tracker", sales: 876, revenue: 28765, growth: -2.4 },
    { name: "Bluetooth Speaker", sales: 765, revenue: 24567, growth: 5.6 },
    { name: "Phone Case", sales: 654, revenue: 9876, growth: 14.2 }
  ]

  const trafficSources = [
    { source: "Organic Search", visitors: 12456, percent: 45, trend: "up" },
    { source: "Direct", visitors: 8765, percent: 32, trend: "up" },
    { source: "Social Media", visitors: 5432, percent: 20, trend: "down" },
    { source: "Email", visitors: 3210, percent: 12, trend: "up" },
    { source: "Referral", visitors: 2109, percent: 8, trend: "down" }
  ]

  const customerData = [
    { metric: "New Customers", value: 345, change: 12.3, trend: "up" },
    { metric: "Returning Customers", value: 567, change: 5.6, trend: "up" },
    { metric: "Customer Retention", value: "42%", change: 3.2, trend: "up" },
    { metric: "Avg. Session Duration", value: "4m 32s", change: -2.1, trend: "down" }
  ]

  const geographicData = [
    { country: "United States", sales: 56789, percent: 45 },
    { country: "United Kingdom", sales: 23456, percent: 19 },
    { country: "Germany", sales: 18765, percent: 15 },
    { country: "France", sales: 12345, percent: 10 },
    { country: "Canada", sales: 9876, percent: 8 }
  ]

  const MetricCard = ({ title, value, change, trend, icon }) => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">
            {typeof value === "number" && title !== "Conversion Rate" ? `$${value.toLocaleString()}` : value}
            {title === "Conversion Rate" && "%"}
          </p>
          {change && (
            <div className={`flex items-center mt-2 ${trend === "up" ? "text-green-600" : "text-red-600"}`}>
              {trend === "up" ? <ArrowUp className="h-4 w-4 mr-1" /> : <ArrowDown className="h-4 w-4 mr-1" />}
              <span className="text-sm font-medium">{change}%</span>
              <span className="text-sm text-gray-500 ml-1">from last period</span>
            </div>
          )}
        </div>
        <div className="bg-indigo-100 p-3 rounded-lg">
          {icon}
        </div>
      </div>
    </div>
  )

  const TabButton = ({ id, label, icon }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${activeTab === id ? "bg-indigo-100 text-indigo-700" : "text-gray-500 hover:bg-gray-100"}`}
    >
      {icon}
      <span className="font-medium">{label}</span>
    </button>
  )

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Analytics & Reports</h1>
              <p className="text-gray-600 mt-2">Track and analyze your business performance</p>
            </div>
            <div className="flex space-x-3 mt-4 md:mt-0">
              <div className="relative">
                <select 
                  value={dateRange}
                  onChange={(e) => setDateRange(e.target.value)}
                  className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 appearance-none"
                >
                  <option value="7d">Last 7 days</option>
                  <option value="30d">Last 30 days</option>
                  <option value="90d">Last 90 days</option>
                  <option value="ytd">Year to date</option>
                  <option value="12m">Last 12 months</option>
                </select>
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
              <button className="flex items-center justify-center px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50">
                <Download className="h-4 w-4 mr-2" />
                Export
              </button>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-6">
          <div className="flex space-x-4 overflow-x-auto">
            <TabButton id="overview" label="Overview" icon={<BarChart3 className="h-4 w-4" />} />
            <TabButton id="sales" label="Sales" icon={<DollarSign className="h-4 w-4" />} />
            <TabButton id="customers" label="Customers" icon={<Users className="h-4 w-4" />} />
            <TabButton id="products" label="Products" icon={<Package className="h-4 w-4" />} />
            <TabButton id="traffic" label="Traffic" icon={<Eye className="h-4 w-4" />} />
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          <MetricCard 
            title="Total Revenue" 
            value={metrics.revenue} 
            change={12.3} 
            trend="up" 
            icon={<DollarSign className="h-6 w-6 text-indigo-600" />} 
          />
          <MetricCard 
            title="Orders" 
            value={metrics.orders} 
            change={8.7} 
            trend="up" 
            icon={<ShoppingCart className="h-6 w-6 text-indigo-600" />} 
          />
          <MetricCard 
            title="Customers" 
            value={metrics.customers} 
            change={5.6} 
            trend="up" 
            icon={<Users className="h-6 w-6 text-indigo-600" />} 
          />
          <MetricCard 
            title="Average Order" 
            value={metrics.averageOrder} 
            change={-1.2} 
            trend="down" 
            icon={<CreditCard className="h-6 w-6 text-indigo-600" />} 
          />
          <MetricCard 
            title="Conversion Rate" 
            value={metrics.conversion} 
            change={2.1} 
            trend="up" 
            icon={<TrendingUp className="h-6 w-6 text-indigo-600" />} 
          />
        </div>

        {/* Charts and Graphs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Revenue Chart */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-medium text-gray-900">Revenue Overview</h3>
              <button className="text-gray-400 hover:text-gray-600">
                <MoreHorizontal className="h-5 w-5" />
              </button>
            </div>
            <div className="h-80">
              {/* Chart container - would be replaced with actual chart library */}
              <div className="flex items-end justify-between h-64 mt-4">
                {salesData.map((item, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div 
                      className="bg-indigo-100 rounded-t w-12 transition-all hover:bg-indigo-200"
                      style={{ height: `${item.sales / 250}px` }}
                    ></div>
                    <span className="text-xs text-gray-500 mt-2">{item.day}</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-4 pt-4 border-t border-gray-200">
                <div>
                  <p className="text-sm text-gray-600">Total Revenue</p>
                  <p className="text-lg font-semibold text-gray-900">${salesData.reduce((acc, curr) => acc + curr.sales, 0).toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Total Orders</p>
                  <p className="text-lg font-semibold text-gray-900">{salesData.reduce((acc, curr) => acc + curr.orders, 0).toLocaleString()}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Traffic Sources */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-medium text-gray-900">Traffic Sources</h3>
              <button className="text-gray-400 hover:text-gray-600">
                <MoreHorizontal className="h-5 w-5" />
              </button>
            </div>
            <div className="space-y-4">
              {trafficSources.map((source, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-gray-900">{source.source}</span>
                    <span className="text-sm text-gray-900">{source.visitors.toLocaleString()} ({source.percent}%)</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-indigo-600 h-2 rounded-full" 
                      style={{ width: `${source.percent}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Top Products */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-medium text-gray-900">Top Performing Products</h3>
              <button className="text-gray-400 hover:text-gray-600">
                <MoreHorizontal className="h-5 w-5" />
              </button>
            </div>
            <div className="space-y-4">
              {topProducts.map((product, index) => (
                <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-medium text-gray-900 truncate">{product.name}</h4>
                    <p className="text-sm text-gray-500">{product.sales} units sold</p>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <p className="text-sm font-medium text-gray-900">${product.revenue.toLocaleString()}</p>
                    <div className={`flex items-center justify-end ${product.growth > 0 ? "text-green-600" : "text-red-600"}`}>
                      {product.growth > 0 ? <ArrowUp className="h-3 w-3 mr-1" /> : <ArrowDown className="h-3 w-3 mr-1" />}
                      <span className="text-xs">{Math.abs(product.growth)}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Customer Metrics */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-medium text-gray-900">Customer Insights</h3>
              <button className="text-gray-400 hover:text-gray-600">
                <MoreHorizontal className="h-5 w-5" />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {customerData.map((item, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm font-medium text-gray-900">{item.metric}</p>
                  <p className="text-xl font-bold text-gray-900 mt-1">{item.value}</p>
                  <div className={`flex items-center mt-2 ${item.trend === "up" ? "text-green-600" : "text-red-600"}`}>
                    {item.trend === "up" ? <ArrowUp className="h-3 w-3 mr-1" /> : <ArrowDown className="h-3 w-3 mr-1" />}
                    <span className="text-xs font-medium">{item.change}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Geographic Data */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-medium text-gray-900">Sales by Geography</h3>
            <button className="text-gray-400 hover:text-gray-600">
              <MoreHorizontal className="h-5 w-5" />
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="pb-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Country</th>
                  <th className="pb-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sales</th>
                  <th className="pb-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Percentage</th>
                  <th className="pb-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Trend</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {geographicData.map((item, index) => (
                  <tr key={index}>
                    <td className="py-3 text-sm font-medium text-gray-900">{item.country}</td>
                    <td className="py-3 text-sm text-gray-900">${item.sales.toLocaleString()}</td>
                    <td className="py-3 text-sm text-gray-500">{item.percent}%</td>
                    <td className="py-3">
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-indigo-600 h-2 rounded-full" 
                          style={{ width: `${item.percent}%` }}
                        ></div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-100">
            <div className="flex items-center mb-4">
              <div className="bg-indigo-100 p-2 rounded-lg mr-3">
                <TrendingUp className="h-5 w-5 text-indigo-600" />
              </div>
              <h3 className="text-lg font-medium text-indigo-900">Best Performing Category</h3>
            </div>
            <p className="text-2xl font-bold text-indigo-900 mb-2">Electronics</p>
            <p className="text-sm text-indigo-700">+15.3% growth from last period</p>
          </div>

          <div className="bg-green-50 rounded-xl p-6 border border-green-100">
            <div className="flex items-center mb-4">
              <div className="bg-green-100 p-2 rounded-lg mr-3">
                <Star className="h-5 w-5 text-green-600" />
              </div>
              <h3 className="text-lg font-medium text-green-900">Customer Satisfaction</h3>
            </div>
            <p className="text-2xl font-bold text-green-900 mb-2">4.8/5</p>
            <p className="text-sm text-green-700">+0.3 from last month</p>
          </div>

          <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-2 rounded-lg mr-3">
                <Repeat className="h-5 w-5 text-blue-600" />
              </div>
              <h3 className="text-lg font-medium text-blue-900">Return Rate</h3>
            </div>
            <p className="text-2xl font-bold text-blue-900 mb-2">2.3%</p>
            <p className="text-sm text-blue-700">-0.7% from last month</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnalyticsDashboard