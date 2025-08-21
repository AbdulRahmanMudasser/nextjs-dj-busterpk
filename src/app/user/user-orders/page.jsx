"use client";
import { useState } from "react";

export default function Orders() {
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
          image: "/phone.jpg",
          isHot: true
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
          image: "/Fridge.jpg",
          isHot: true
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

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.items.some(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()));
    
    if (activeTab === "all") return matchesSearch;
    return matchesSearch && order.status === activeTab;
  });

  const OrderCard = ({ order }) => {
    const statusColor = getStatusColor(order.status);
    
    return (
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100 transition-all hover:shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6 pb-4 border-b border-blue-100">
          <div>
            <h3 className="text-xl font-bold text-blue-900">{order.id}</h3>
            <p className="text-blue-600 mt-1">
              Ordered on {new Date(order.date).toLocaleDateString()}
            </p>
          </div>
          <span className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-medium ${statusColor}`}>
            {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
          </span>
        </div>
        
        <div className="mb-6 space-y-4">
          {order.items.map((item, index) => (
            <div key={index} className="flex gap-4 p-3 bg-blue-50 rounded-xl">
              <div className="relative w-16 h-16 bg-white rounded-lg overflow-hidden shrink-0">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                {item.isHot && (
                  <div className="absolute top-1 left-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded flex items-center gap-1">
                    <ZapIcon size={10} className="fill-white" /> HOT
                  </div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-blue-900 truncate">{item.name}</h4>
                <p className="text-blue-600 text-sm">
                  Quantity: {item.quantity} • ${item.price.toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-3 mb-6">
          <div className="flex justify-between">
            <span className="text-blue-700">Total Amount:</span>
            <span className="font-bold text-blue-900">${order.total.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-blue-700">Delivery Address:</span>
            <span className="text-blue-900 text-right max-w-xs">
              {order.deliveryAddress}
            </span>
          </div>
          {order.trackingNumber && (
            <div className="flex justify-between">
              <span className="text-blue-700">Tracking Number:</span>
              <span className="font-mono text-blue-900">{order.trackingNumber}</span>
            </div>
          )}
          {order.estimatedDelivery && (
            <div className="flex justify-between">
              <span className="text-blue-700">Estimated Delivery:</span>
              <span className="text-blue-900">{new Date(order.estimatedDelivery).toLocaleDateString()}</span>
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-3 pt-4 border-t border-blue-100">
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-medium">
            <EyeIcon size={16} />
            View Details
          </button>
          {order.status === "delivered" && (
            <>
              <button className="flex items-center gap-2 px-4 py-2 border border-blue-200 text-blue-700 rounded-xl hover:bg-blue-50 transition-colors font-medium">
                <DownloadIcon size={16} />
                Invoice
              </button>
              <button className="flex items-center gap-2 px-4 py-2 border border-blue-200 text-blue-700 rounded-xl hover:bg-blue-50 transition-colors font-medium">
                <StarIcon size={16} />
                Review
              </button>
              <button className="flex items-center gap-2 px-4 py-2 border border-blue-200 text-blue-700 rounded-xl hover:bg-blue-50 transition-colors font-medium">
                <RefreshIcon size={16} />
                Return
              </button>
            </>
          )}
          {order.trackingNumber && (
            <button className="flex items-center gap-2 px-4 py-2 border border-blue-200 text-blue-700 rounded-xl hover:bg-blue-50 transition-colors font-medium">
              <TruckIcon size={16} />
              Track Package
            </button>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-blue-900 flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <PackageIcon size={24} className="text-blue-600" />
              </div>
              My Orders
            </h1>
            <p className="text-blue-700 mt-2">
              Track and manage your orders
            </p>
          </div>
          
          <div className="relative max-w-md w-full">
            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-400" />
            <input
              type="text"
              placeholder="Search orders..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-blue-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100 mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-2">
            {["all", "processing", "shipped", "delivered", "cancelled"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  activeTab === tab 
                    ? "bg-blue-600 text-white shadow-md" 
                    : "text-blue-700 hover:bg-blue-50"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)} 
                <span className="ml-1">
                  ({tab === "all" ? orders.length : orders.filter(o => o.status === tab).length})
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          {filteredOrders.length === 0 ? (
            <div className="bg-white rounded-2xl p-12 text-center shadow-lg border border-blue-100">
              <PackageIcon size={48} className="text-blue-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                No orders found
              </h3>
              <p className="text-blue-700 mb-6">
                {searchQuery 
                  ? "Try adjusting your search terms" 
                  : activeTab === "all" 
                    ? "You haven't placed any orders yet"
                    : `No ${activeTab} orders`
                }
              </p>
              {activeTab === "all" && !searchQuery && (
                <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-blue-900 transition-all shadow-md hover:shadow-lg">
                  Start Shopping
                </button>
              )}
            </div>
          ) : (
            filteredOrders.map((order) => (
              <OrderCard key={order.id} order={order} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

// Icon components
const PackageIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
    <path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/>
    <path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/>
  </svg>
);

const SearchIcon = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
    <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
  </svg>
);

const EyeIcon = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>
  </svg>
);

const DownloadIcon = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
);

const StarIcon = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);

const RefreshIcon = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>
  </svg>
);

const TruckIcon = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
    <path d="M10 17h4V5H2v12h3"/><path d="m20 7 3 3-3 3"/><path d="M17 20l-3-3 3-3"/>
    <circle cx="17.5" cy="17.5" r="2.5"/><circle cx="7.5" cy="17.5" r="2.5"/>
  </svg>
);

const ZapIcon = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
);