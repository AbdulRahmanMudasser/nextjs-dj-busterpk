// pages/analytics.jsx
'use client';
import React from 'react';
import { TrendingUp, TrendingDown, DollarSign, ShoppingCart, Users, Eye } from 'lucide-react';

const salesData = [
  { month: 'Jan', revenue: 45000, orders: 120 },
  { month: 'Feb', revenue: 52000, orders: 135 },
  { month: 'Mar', revenue: 48000, orders: 128 },
  { month: 'Apr', revenue: 61000, orders: 162 },
  { month: 'May', revenue: 55000, orders: 145 },
  { month: 'Jun', revenue: 67000, orders: 178 },
];

const topProducts = [
  { name: 'Wireless Headphones', sales: 234, revenue: 46800, growth: 12.5 },
  { name: 'Smart Watch', sales: 189, revenue: 56700, growth: 8.3 },
  { name: 'Bluetooth Speaker', sales: 156, revenue: 14040, growth: -2.1 },
  { name: 'Phone Case', sales: 345, revenue: 8625, growth: 15.7 },
];

export default function Analytics() {
  const maxRevenue = Math.max(...salesData.map(d => d.revenue));

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="border-b border-gray-200 pb-5">
        <h1 className="text-3xl font-bold text-gray-900">Analytics</h1>
        <p className="mt-2 text-sm text-gray-600">
          Track your performance and insights to grow your business
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Revenue</p>
              <p className="text-2xl font-semibold text-gray-900 mt-2">$328,000</p>
              <div className="flex items-center mt-2">
                <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                <span className="text-sm font-medium text-green-600">+15.3%</span>
                <span className="text-sm text-gray-500 ml-2">vs last period</span>
              </div>
            </div>
            <div className="bg-green-50 p-3 rounded-lg">
              <DollarSign className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Orders</p>
              <p className="text-2xl font-semibold text-gray-900 mt-2">1,268</p>
              <div className="flex items-center mt-2">
                <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                <span className="text-sm font-medium text-green-600">+8.2%</span>
                <span className="text-sm text-gray-500 ml-2">vs last period</span>
              </div>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg">
              <ShoppingCart className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Avg. Order Value</p>
              <p className="text-2xl font-semibold text-gray-900 mt-2">$258.67</p>
              <div className="flex items-center mt-2">
                <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                <span className="text-sm font-medium text-green-600">+6.7%</span>
                <span className="text-sm text-gray-500 ml-2">vs last period</span>
              </div>
            </div>
            <div className="bg-purple-50 p-3 rounded-lg">
              <Eye className="h-6 w-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Conversion Rate</p>
              <p className="text-2xl font-semibold text-gray-900 mt-2">3.24%</p>
              <div className="flex items-center mt-2">
                <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
                <span className="text-sm font-medium text-red-600">-1.2%</span>
                <span className="text-sm text-gray-500 ml-2">vs last period</span>
              </div>
            </div>
            <div className="bg-orange-50 p-3 rounded-lg">
              <Users className="h-6 w-6 text-orange-600" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Revenue Trend</h2>
            <select className="text-sm border border-gray-300 rounded-md px-3 py-1">
              <option>Last 6 months</option>
              <option>Last 12 months</option>
              <option>Year to date</option>
            </select>
          </div>
          <div className="space-y-4">
            {salesData.map((data, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-sm font-medium text-gray-600 w-8">{data.month}</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-3 w-32">
                    <div
                      className="bg-blue-600 h-3 rounded-full transition-all duration-300"
                      style={{ width: `${(data.revenue / maxRevenue) * 100}%` }}
                    ></div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-900">${data.revenue.toLocaleString()}</div>
                  <div className="text-xs text-gray-500">{data.orders} orders</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Products */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Top Products</h2>
            <select className="text-sm border border-gray-300 rounded-md px-3 py-1">
              <option>This month</option>
              <option>Last 3 months</option>
              <option>Last 6 months</option>
            </select>
          </div>
          <div className="space-y-4">
            {topProducts.map((product, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
                  <p className="text-xs text-gray-500">{product.sales} sales</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">${product.revenue.toLocaleString()}</p>
                  <div className="flex items-center">
                    {product.growth > 0 ? (
                      <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
                    ) : (
                      <TrendingDown className="h-3 w-3 text-red-500 mr-1" />
                    )}
                    <span className={`text-xs font-medium ${
                      product.growth > 0 ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {product.growth > 0 ? '+' : ''}{product.growth}%
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Performance Metrics</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="mx-auto w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl font-bold text-green-600">4.8</span>
            </div>
            <h3 className="text-sm font-medium text-gray-900">Customer Rating</h3>
            <p className="text-xs text-gray-500 mt-1">Based on 1,247 reviews</p>
          </div>
          <div className="text-center">
            <div className="mx-auto w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-4">
              <span className="text-lg font-bold text-blue-600">98%</span>
            </div>
            <h3 className="text-sm font-medium text-gray-900">Order Fulfillment</h3>
            <p className="text-xs text-gray-500 mt-1">On-time delivery rate</p>
          </div>
          <div className="text-center">
            <div className="mx-auto w-20 h-20 bg-purple-50 rounded-full flex items-center justify-center mb-4">
              <span className="text-lg font-bold text-purple-600">2.1%</span>
            </div>
            <h3 className="text-sm font-medium text-gray-900">Return Rate</h3>
            <p className="text-xs text-gray-500 mt-1">Below industry average</p>
          </div>
        </div>
      </div>
    </div>
  );
}