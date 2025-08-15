// app/account/orders/page.jsx
'use client';

import { useState } from 'react';
import { Package, Truck, CheckCircle, Clock, MapPin, Calendar } from 'lucide-react';
import Link from 'next/link';

export default function OrdersPage() {
  const [orders, setOrders] = useState([]); // Replace with your data fetching logic

  const getStatusIcon = (status) => {
    switch (status) {
      case 'confirmed':
        return <Clock className="h-5 w-5 text-blue-600" />;
      case 'processing':
        return <Package className="h-5 w-5 text-orange-600" />;
      case 'shipped':
        return <Truck className="h-5 w-5 text-purple-600" />;
      case 'delivered':
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      default:
        return <Clock className="h-5 w-5 text-gray-600" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed':
        return 'bg-blue-100 text-blue-800';
      case 'processing':
        return 'bg-orange-100 text-orange-800';
      case 'shipped':
        return 'bg-purple-100 text-purple-800';
      case 'delivered':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  if (orders.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <div className="text-gray-400 mb-6">
          <Package className="h-24 w-24 mx-auto" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">No orders yet</h2>
        <p className="text-gray-600 mb-8">When you place orders, they'll appear here</p>
        <Link
          href="/shop/products"
          className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">My Orders</h1>

      <div className="space-y-6">
        {orders.map((order) => (
          <div key={order.id} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
            {/* Order Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div className="flex items-center gap-4 mb-4 md:mb-0">
                {getStatusIcon(order.status)}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Order #{order.id.slice(-6).toUpperCase()}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                    <Calendar className="h-4 w-4" />
                    <span>Placed on {formatDate(order.date)}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium capitalize ${getStatusColor(
                    order.status
                  )}`}
                >
                  {order.status}
                </span>
                <div className="text-right">
                  <div className="text-lg font-bold text-gray-900">
                    ₨{order.total.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-600">
                    {order.paymentMethod === 'cod' ? 'Cash on Delivery' : 'Card Payment'}
                  </div>
                </div>
              </div>
            </div>

            {/* Order Items */}
            <div className="mb-6">
              <h4 className="font-medium text-gray-900 mb-3">Items ({order.items.length})</h4>
              <div className="grid gap-3">
                {order.items.map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h5 className="font-medium text-gray-900">{item.product.name}</h5>
                      {item.product.nameUrdu && (
                        <p className="text-sm text-gray-500">{item.product.nameUrdu}</p>
                      )}
                      <div className="flex items-center gap-4 mt-1">
                        <span className="text-sm text-gray-600">Qty: {item.quantity}</span>
                        <span className="text-sm font-medium text-gray-900">
                          ₨{item.product.price.toLocaleString()} each
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="font-medium text-gray-900">
                        ₨{(item.product.price * item.quantity).toLocaleString()}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Delivery Address */}
            <div className="border-t border-gray-200 pt-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-gray-400 mt-0.5" />
                <div>
                  <h5 className="font-medium text-gray-900 mb-1">Delivery Address</h5>
                  <p className="text-sm text-gray-600">
                    {order.shippingAddress.street}
                    <br />
                    {order.shippingAddress.area}
                    <br />
                    {order.shippingAddress.city}, {order.shippingAddress.province}{' '}
                    {order.shippingAddress.postalCode}
                  </p>
                </div>
              </div>
            </div>

            {/* Order Status Timeline */}
            <div className="mt-6 pt-4 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div
                    className={`w-3 h-3 rounded-full ${
                      ['confirmed', 'processing', 'shipped', 'delivered'].includes(order.status)
                        ? 'bg-green-500'
                        : 'bg-gray-300'
                    }`}
                  ></div>
                  <span className="text-sm text-gray-600">Confirmed</span>
                </div>
                <div
                  className={`flex-1 h-px mx-2 ${
                    ['processing', 'shipped', 'delivered'].includes(order.status)
                      ? 'bg-green-500'
                      : 'bg-gray-300'
                  }`}
                ></div>
                <div className="flex items-center gap-2">
                  <div
                    className={`w-3 h-3 rounded-full ${
                      ['processing', 'shipped', 'delivered'].includes(order.status)
                        ? 'bg-green-500'
                        : 'bg-gray-300'
                    }`}
                  ></div>
                  <span className="text-sm text-gray-600">Processing</span>
                </div>
                <div
                  className={`flex-1 h-px mx-2 ${
                    ['shipped', 'delivered'].includes(order.status) ? 'bg-green-500' : 'bg-gray-300'
                  }`}
                ></div>
                <div className="flex items-center gap-2">
                  <div
                    className={`w-3 h-3 rounded-full ${
                      ['shipped', 'delivered'].includes(order.status) ? 'bg-green-500' : 'bg-gray-300'
                    }`}
                  ></div>
                  <span className="text-sm text-gray-600">Shipped</span>
                </div>
                <div
                  className={`flex-1 h-px mx-2 ${
                    order.status === 'delivered' ? 'bg-green-500' : 'bg-gray-300'
                  }`}
                ></div>
                <div className="flex items-center gap-2">
                  <div
                    className={`w-3 h-3 rounded-full ${
                      order.status === 'delivered' ? 'bg-green-500' : 'bg-gray-300'
                    }`}
                  ></div>
                  <span className="text-sm text-gray-600">Delivered</span>
                </div>
              </div>
            </div>

            {/* Expected Delivery */}
            {order.status !== 'delivered' && (
              <div className="mt-4 p-3 bg-green-50 rounded-lg">
                <div className="flex items-center gap-2 text-green-800">
                  <Truck className="h-4 w-4" />
                  <span className="text-sm font-medium">
                    Expected delivery:{' '}
                    {new Date(
                      Date.now() +
                        (order.status === 'shipped' ? 2 : 5) * 24 * 60 * 60 * 1000
                    ).toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
