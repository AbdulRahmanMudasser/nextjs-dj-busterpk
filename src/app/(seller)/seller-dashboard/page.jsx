'use client';
import React from 'react';
import {
  TrendingUp,
  TrendingDown,
  Package,
  ShoppingCart,
  DollarSign,
  Users,
  Star,
  AlertCircle
} from 'lucide-react';

const stats = [
  { name: 'Total Revenue', value: '$84,532', change: '+12.5%', trend: 'up', icon: DollarSign },
  { name: 'Total Orders', value: '1,247', change: '+8.2%', trend: 'up', icon: ShoppingCart },
  { name: 'Active Products', value: '156', change: '+2.1%', trend: 'up', icon: Package },
  { name: 'Customer Rating', value: '4.8/5', change: '+0.3', trend: 'up', icon: Star },
];

const recentOrders = [
  { id: '#ORD-001', customer: 'John Doe', product: 'Wireless Headphones', amount: '$199.99', status: 'Processing' },
  { id: '#ORD-002', customer: 'Sarah Smith', product: 'Smart Watch', amount: '$299.99', status: 'Shipped' },
  { id: '#ORD-003', customer: 'Mike Johnson', product: 'Bluetooth Speaker', amount: '$89.99', status: 'Delivered' },
  { id: '#ORD-004', customer: 'Emily Brown', product: 'Phone Case', amount: '$24.99', status: 'Processing' },
];

const alerts = [
  { type: 'warning', message: 'Low stock alert: Wireless Headphones (5 left)' },
  { type: 'info', message: 'New product review received for Smart Watch' },
  { type: 'success', message: 'Commission payment of $2,847 processed' },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="border-b border-gray-200 pb-5">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="mt-2 text-sm text-gray-600">
          Welcome back, Sarah! Here's what's happening with your store today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.name} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                  <p className="text-2xl font-semibold text-gray-900 mt-2">{stat.value}</p>
                  <div className="flex items-center mt-2">
                    {stat.trend === 'up' ? (
                      <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                    ) : (
                      <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
                    )}
                    <span
                      className={`text-sm font-medium ${
                        stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                      }`}
                    >
                      {stat.change}
                    </span>
                  </div>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <Icon className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Orders */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Recent Orders</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Order</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Product</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {recentOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">
                      {order.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.customer}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.product}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {order.amount}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          order.status === 'Processing'
                            ? 'bg-yellow-100 text-yellow-800'
                            : order.status === 'Shipped'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-green-100 text-green-800'
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Alerts Panel */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Alerts & Notifications</h2>
          </div>
          <div className="p-6 space-y-4">
            {alerts.map((alert, index) => (
              <div
                key={index}
                className={`flex items-start space-x-3 p-3 rounded-lg ${
                  alert.type === 'warning'
                    ? 'bg-amber-50 border border-amber-200'
                    : alert.type === 'info'
                    ? 'bg-blue-50 border border-blue-200'
                    : 'bg-green-50 border border-green-200'
                }`}
              >
                <AlertCircle
                  className={`h-5 w-5 mt-0.5 ${
                    alert.type === 'warning'
                      ? 'text-amber-600'
                      : alert.type === 'info'
                      ? 'text-blue-600'
                      : 'text-green-600'
                  }`}
                />
                <p className="text-sm text-gray-900">{alert.message}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
