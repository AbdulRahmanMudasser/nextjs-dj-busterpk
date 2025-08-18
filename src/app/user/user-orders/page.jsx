"use client";
import { useState } from "react";

export default function Orders() {
  // Mock orders data
  const orders = [
    {
      id: "ORD-2024-001",
      date: "2024-01-15",
      status: "delivered",
      total: 1259.97,
      items: [
        {
          id: "1",
          name: "iPhone 15 Pro Max 256GB",
          price: 1199.99,
          quantity: 1,
          image: "/phone.jpg"
        },
        {
          id: "2",
          name: "Premium Cotton T-Shirt",
          price: 29.99,
          quantity: 2,
          image: "/jumpers.webp"
        }
      ],
      deliveryAddress: "123 Main St, New York, NY 10001",
      trackingNumber: "1Z999AA1234567890"
    },
    {
      id: "ORD-2024-002", 
      date: "2024-01-12",
      status: "shipped",
      total: 149.99,
      items: [
        {
          id: "3",
          name: "Smart Coffee Maker Pro",
          price: 149.99,
          quantity: 1,
          image: "/Fridge.jpg"
        }
      ],
      deliveryAddress: "123 Main St, New York, NY 10001",
      trackingNumber: "1Z999BB1234567890",
      estimatedDelivery: "2024-01-18"
    },
    {
      id: "ORD-2024-003",
      date: "2024-01-10",
      status: "processing",
      total: 89.97,
      items: [
        {
          id: "2",
          name: "Premium Cotton T-Shirt",
          price: 29.99,
          quantity: 3,
          image: "/cotton-tshirt.jpg"
        }
      ],
      deliveryAddress: "123 Main St, New York, NY 10001"
    }
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  const getStatusColor = (status) => {
    switch (status) {
      case "delivered": return "bg-green-100 text-green-800";
      case "shipped": return "bg-blue-100 text-blue-800";
      case "processing": return "bg-yellow-100 text-yellow-800";
      case "cancelled": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status) => {
    const iconClass = "w-4 h-4 mr-1";
    switch (status) {
      case "delivered": return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      );
      case "shipped": return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M10 17h4V5H2v12h3" />
          <path d="m20 7 3 3-3 3" />
          <path d="M17 20l-3-3 3-3" />
          <circle cx="17.5" cy="17.5" r="2.5" />
          <circle cx="7.5" cy="17.5" r="2.5" />
        </svg>
      );
      case "processing": return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      );
      case "cancelled": return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
          <path d="M3 3v5h5" />
        </svg>
      );
      default: return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="m7.5 4.27 9 5.15" />
          <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
          <path d="m3.3 7 8.7 5 8.7-5" />
          <path d="M12 22V12" />
        </svg>
      );
    }
  };

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.items.some(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()));
    
    if (activeTab === "all") return matchesSearch;
    return matchesSearch && order.status === activeTab;
  });

  const OrderCard = ({ order }) => {
    const statusColor = getStatusColor(order.status);
    const statusIcon = getStatusIcon(order.status);
    
    return (
      <div className="rounded-lg border border-gray-200 shadow-sm overflow-hidden mb-4 bg-white">
        <div className="p-4 border-b border-gray-200">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-semibold">{order.id}</h3>
              <p className="text-sm text-gray-500">
                Ordered on {new Date(order.date).toLocaleDateString()}
              </p>
            </div>
            <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${statusColor}`}>
              {statusIcon}
              {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
            </span>
          </div>
        </div>
        
        <div className="p-4">
          <div className="mb-4 space-y-3">
            {order.items.map((item, index) => (
              <div key={index} className="flex gap-3">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium truncate">{item.name}</h4>
                  <p className="text-sm text-gray-500">
                    Quantity: {item.quantity} • ${item.price.toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-200 pt-4 mb-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span>Total Amount:</span>
              <span className="font-semibold">${order.total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Delivery Address:</span>
              <span className="text-right max-w-xs truncate">
                {order.deliveryAddress}
              </span>
            </div>
            {order.trackingNumber && (
              <div className="flex justify-between text-sm">
                <span>Tracking Number:</span>
                <span className="font-mono">{order.trackingNumber}</span>
              </div>
            )}
            {order.estimatedDelivery && (
              <div className="flex justify-between text-sm">
                <span>Estimated Delivery:</span>
                <span>{new Date(order.estimatedDelivery).toLocaleDateString()}</span>
              </div>
            )}
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            <button className="inline-flex items-center rounded-md border border-gray-200 bg-white px-3 py-2 text-sm font-medium hover:bg-gray-50">
              <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              View Details
            </button>
            {order.status === "delivered" && (
              <>
                <button className="inline-flex items-center rounded-md border border-gray-200 bg-white px-3 py-2 text-sm font-medium hover:bg-gray-50">
                  <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Invoice
                </button>
                <button className="inline-flex items-center rounded-md border border-gray-200 bg-white px-3 py-2 text-sm font-medium hover:bg-gray-50">
                  <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  Review
                </button>
                <button className="inline-flex items-center rounded-md border border-gray-200 bg-white px-3 py-2 text-sm font-medium hover:bg-gray-50">
                  <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                    <path d="M3 3v5h5" />
                  </svg>
                  Return
                </button>
              </>
            )}
            {order.trackingNumber && (
              <button className="inline-flex items-center rounded-md border border-gray-200 bg-white px-3 py-2 text-sm font-medium hover:bg-gray-50">
                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M10 17h4V5H2v12h3" />
                  <path d="m20 7 3 3-3 3" />
                  <path d="M17 20l-3-3 3-3" />
                  <circle cx="17.5" cy="17.5" r="2.5" />
                  <circle cx="7.5" cy="17.5" r="2.5" />
                </svg>
                Track Package
              </button>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="m7.5 4.27 9 5.15" />
            <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
            <path d="m3.3 7 8.7 5 8.7-5" />
            <path d="M12 22V12" />
          </svg>
          My Orders
        </h1>
        
        <div className="relative max-w-md w-full">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <input
            type="text"
            placeholder="Search orders..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      <div>
        <div className="grid grid-cols-5 gap-1 w-full rounded-md bg-gray-100 p-1">
          {["all", "processing", "shipped", "delivered", "cancelled"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === tab 
                  ? "bg-white shadow-sm text-gray-900" 
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)} (
              {tab === "all" 
                ? orders.length 
                : orders.filter(o => o.status === tab).length
              })
            </button>
          ))}
        </div>

        <div className="mt-6">
          {filteredOrders.length === 0 ? (
            <div className="text-center py-12">
              <svg className="mx-auto h-16 w-16 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="m7.5 4.27 9 5.15" />
                <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                <path d="m3.3 7 8.7 5 8.7-5" />
                <path d="M12 22V12" />
              </svg>
              <h3 className="mt-2 text-lg font-semibold">
                No orders found
              </h3>
              <p className="mt-1 text-gray-500">
                {searchQuery 
                  ? "Try adjusting your search terms" 
                  : activeTab === "all" 
                    ? "You haven't placed any orders yet"
                    : `No ${activeTab} orders`
                }
              </p>
              {activeTab === "all" && !searchQuery && (
                <button className="mt-4 px-4 py-2 rounded-md bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium hover:from-blue-700 hover:to-blue-600 transition-colors">
                  Start Shopping
                </button>
              )}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredOrders.map((order) => (
                <OrderCard key={order.id} order={order} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}