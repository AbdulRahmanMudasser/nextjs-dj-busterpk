"use client"

import { useState } from "react"
import {
    Search,
    Filter,
    MoreVertical,
    ShoppingCart,
    Truck,
    CheckCircle,
    XCircle,
    AlertTriangle,
    Clock,
    Download,
    ChevronDown,
    TrendingUp,
    BarChart3,
    DollarSign,
    User,
    Package,
    CreditCard,
    Calendar,
    Eye,
    FileText
} from "lucide-react"

const OrderTracking = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const [statusFilter, setStatusFilter] = useState("all")
    const [paymentFilter, setPaymentFilter] = useState("all")
    const [selectedOrders, setSelectedOrders] = useState([])
    const [isFilterOpen, setIsFilterOpen] = useState(false)

    // Mock data - replace with actual API calls to Django backend
    const orders = [
        {
            id: "ORD-001",
            userId: "1",
            userName: "John Doe",
            sellerId: "1",
            sellerName: "TechGadgets Pro",
            productName: "Wireless Bluetooth Headphones",
            amount: 89.99,
            status: "delivered",
            orderDate: "2024-01-15",
            platform: "website",
            paymentStatus: "completed",
            items: 1,
            shippingAddress: "123 Main St, New York, NY"
        },
        {
            id: "ORD-002",
            userId: "2",
            userName: "Jane Smith",
            sellerId: "2",
            sellerName: "Fashion Forward",
            productName: "Summer Dress Collection",
            amount: 59.99,
            status: "disputed",
            orderDate: "2024-01-16",
            platform: "app",
            paymentStatus: "completed",
            items: 2,
            shippingAddress: "456 Oak Ave, Los Angeles, CA"
        },
        {
            id: "ORD-003",
            userId: "3",
            userName: "Mike Johnson",
            sellerId: "1",
            sellerName: "TechGadgets Pro",
            productName: "Smartphone Case",
            amount: 24.99,
            status: "processing",
            orderDate: "2024-01-18",
            platform: "website",
            paymentStatus: "pending",
            items: 1,
            shippingAddress: "789 Pine Rd, Chicago, IL"
        },
        {
            id: "ORD-004",
            userId: "4",
            userName: "Sarah Williams",
            sellerId: "3",
            sellerName: "Home Essentials",
            productName: "Kitchen Knife Set",
            amount: 129.99,
            status: "shipped",
            orderDate: "2024-01-17",
            platform: "website",
            paymentStatus: "completed",
            items: 1,
            shippingAddress: "321 Elm St, Houston, TX"
        },
        {
            id: "ORD-005",
            userId: "5",
            userName: "David Brown",
            sellerId: "4",
            sellerName: "Photo World",
            productName: "Professional Camera DSLR",
            amount: 899.99,
            status: "pending",
            orderDate: "2024-01-19",
            platform: "app",
            paymentStatus: "pending",
            items: 1,
            shippingAddress: "654 Maple Dr, Phoenix, AZ"
        }
    ]

    const getStatusBadge = (status) => {
        const styles = {
            pending: "bg-yellow-100 text-yellow-800 border-yellow-200",
            processing: "bg-blue-100 text-blue-800 border-blue-200",
            shipped: "bg-purple-100 text-purple-800 border-purple-200",
            delivered: "bg-green-100 text-green-800 border-green-200",
            cancelled: "bg-gray-100 text-gray-800 border-gray-200",
            disputed: "bg-red-100 text-red-800 border-red-200"
        }
        return `${styles[status] || "bg-gray-100 text-gray-800 border-gray-200"} inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border`
    }

    const getStatusIcon = (status) => {
        switch (status) {
            case "pending":
                return <Clock className="h-4 w-4 text-yellow-600" />
            case "processing":
                return <ShoppingCart className="h-4 w-4 text-blue-600" />
            case "shipped":
                return <Truck className="h-4 w-4 text-purple-600" />
            case "delivered":
                return <CheckCircle className="h-4 w-4 text-green-600" />
            case "cancelled":
                return <XCircle className="h-4 w-4 text-gray-600" />
            case "disputed":
                return <AlertTriangle className="h-4 w-4 text-red-600" />
            default:
                return null
        }
    }

    const getPaymentBadge = (status) => {
        const styles = {
            pending: "bg-yellow-100 text-yellow-800 border-yellow-200",
            completed: "bg-green-100 text-green-800 border-green-200",
            failed: "bg-red-100 text-red-800 border-red-200",
            refunded: "bg-gray-100 text-gray-800 border-gray-200"
        }
        return `${styles[status] || "bg-gray-100 text-gray-800 border-gray-200"} inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border`
    }

    const toggleOrderSelection = (orderId) => {
        if (selectedOrders.includes(orderId)) {
            setSelectedOrders(selectedOrders.filter(id => id !== orderId))
        } else {
            setSelectedOrders([...selectedOrders, orderId])
        }
    }

    const toggleSelectAll = () => {
        if (selectedOrders.length === filteredOrders.length) {
            setSelectedOrders([])
        } else {
            setSelectedOrders(filteredOrders.map(order => order.id))
        }
    }

    const filteredOrders = orders.filter(order => {
        const matchesSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
            order.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            order.productName.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesStatus = statusFilter === "all" || order.status === statusFilter
        const matchesPayment = paymentFilter === "all" || order.paymentStatus === paymentFilter

        return matchesSearch && matchesStatus && matchesPayment
    })

    const stats = {
        total: 5672,
        processing: 234,
        delivered: 4892,
        disputes: 7,
        revenue: 128432
    }

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900">Order Management</h1>
                            <p className="text-gray-600 mt-2">Monitor and manage all platform orders</p>
                        </div>
                        <div className="flex space-x-3 mt-4 md:mt-0">
                            <button className="flex items-center justify-center px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                <Download className="h-4 w-4 mr-2" />
                                Export
                            </button>
                            <button className="flex items-center justify-center px-4 py-2 bg-indigo-600 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                <BarChart3 className="h-4 w-4 mr-2" />
                                Reports
                            </button>
                        </div>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                        <div className="flex items-center">
                            <div className="bg-indigo-100 p-3 rounded-lg mr-4">
                                <ShoppingCart className="h-6 w-6 text-indigo-600" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-600">Total Orders</p>
                                <p className="text-2xl font-bold text-gray-900">{stats.total.toLocaleString()}</p>
                            </div>
                        </div>
                        <div className="mt-4 flex items-center text-sm text-green-600">
                            <TrendingUp className="h-4 w-4 mr-1" />
                            <span>+8% from last month</span>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                        <div className="flex items-center">
                            <div className="bg-blue-100 p-3 rounded-lg mr-4">
                                <Clock className="h-6 w-6 text-blue-600" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-600">Processing</p>
                                <p className="text-2xl font-bold text-blue-600">{stats.processing}</p>
                            </div>
                        </div>
                        <div className="mt-4">
                            <div className="w-full bg-gray-200 rounded-full h-2">
                                <div
                                    className="bg-blue-600 h-2 rounded-full"
                                    style={{ width: `${(stats.processing / stats.total) * 100}%` }}
                                ></div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                        <div className="flex items-center">
                            <div className="bg-green-100 p-3 rounded-lg mr-4">
                                <CheckCircle className="h-6 w-6 text-green-600" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-600">Delivered</p>
                                <p className="text-2xl font-bold text-green-600">{stats.delivered.toLocaleString()}</p>
                            </div>
                        </div>
                        <div className="mt-4">
                            <div className="w-full bg-gray-200 rounded-full h-2">
                                <div
                                    className="bg-green-600 h-2 rounded-full"
                                    style={{ width: `${(stats.delivered / stats.total) * 100}%` }}
                                ></div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                        <div className="flex items-center">
                            <div className="bg-red-100 p-3 rounded-lg mr-4">
                                <AlertTriangle className="h-6 w-6 text-red-600" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-600">Disputes</p>
                                <p className="text-2xl font-bold text-red-600">{stats.disputes}</p>
                            </div>
                        </div>
                        <div className="mt-4 flex items-center">
                            <span className="text-sm text-gray-500">Requires immediate attention</span>
                        </div>
                    </div>
                </div>

                {/* Filters and Search */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                        <div className="flex-1 max-w-xl">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search orders, customers, or products..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                />
                            </div>
                        </div>

                        <div className="flex space-x-3">
                            <button
                                onClick={() => setIsFilterOpen(!isFilterOpen)}
                                className="flex items-center px-4 py-2.5 bg-white border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50"
                            >
                                <Filter className="h-4 w-4 mr-2" />
                                Filters
                                <ChevronDown className={`h-4 w-4 ml-2 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
                            </button>

                            <button className="px-4 py-2.5 bg-white border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50">
                                <Download className="h-4 w-4" />
                            </button>
                        </div>
                    </div>

                    {/* Advanced Filters */}
                    {isFilterOpen && (
                        <div className="mt-6 pt-6 border-t border-gray-200 grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Order Status</label>
                                <select
                                    value={statusFilter}
                                    onChange={(e) => setStatusFilter(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                >
                                    <option value="all">All Status</option>
                                    <option value="pending">Pending</option>
                                    <option value="processing">Processing</option>
                                    <option value="shipped">Shipped</option>
                                    <option value="delivered">Delivered</option>
                                    <option value="cancelled">Cancelled</option>
                                    <option value="disputed">Disputed</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Payment Status</label>
                                <select
                                    value={paymentFilter}
                                    onChange={(e) => setPaymentFilter(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                >
                                    <option value="all">All Payments</option>
                                    <option value="pending">Pending</option>
                                    <option value="completed">Completed</option>
                                    <option value="failed">Failed</option>
                                    <option value="refunded">Refunded</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Date Range</label>
                                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
                                    <option>Any Date</option>
                                    <option>Last 7 days</option>
                                    <option>Last 30 days</option>
                                    <option>Last 90 days</option>
                                    <option>Custom Range</option>
                                </select>
                            </div>
                        </div>
                    )}
                </div>

                {/* Orders Table */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
                        <div>
                            <h2 className="text-lg font-medium text-gray-900">Orders</h2>
                            <p className="text-sm text-gray-500">{filteredOrders.length} orders found</p>
                        </div>
                        <div className="flex items-center space-x-3">
                            {selectedOrders.length > 0 && (
                                <span className="text-sm text-gray-700">
                                    {selectedOrders.length} selected
                                </span>
                            )}
                            <button className="text-sm font-medium text-indigo-600 hover:text-indigo-800">
                                Bulk Actions
                            </button>
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-4">
                                        <input
                                            type="checkbox"
                                            checked={selectedOrders.length === filteredOrders.length && filteredOrders.length > 0}
                                            onChange={toggleSelectAll}
                                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                        />
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Order ID
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Customer
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Product & Seller
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Amount
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Status
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Payment
                                    </th>
                                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {filteredOrders.map((order) => (
                                    <tr key={order.id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <input
                                                type="checkbox"
                                                checked={selectedOrders.includes(order.id)}
                                                onChange={() => toggleOrderSelection(order.id)}
                                                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                            />
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm font-medium text-gray-900">{order.id}</div>
                                            <div className="text-sm text-gray-500 flex items-center">
                                                <Calendar className="h-3 w-3 mr-1" />
                                                {new Date(order.orderDate).toLocaleDateString()}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="bg-indigo-100 rounded-full p-2 mr-3">
                                                    <User className="h-4 w-4 text-indigo-600" />
                                                </div>
                                                <div>
                                                    <div className="text-sm font-medium text-gray-900">{order.userName}</div>
                                                    <div className="text-sm text-gray-500">ID: {order.userId}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="text-sm font-medium text-gray-900">{order.productName}</div>
                                            <div className="text-sm text-gray-500 flex items-center">
                                                <Package className="h-3 w-3 mr-1" />
                                                {order.sellerName}
                                            </div>
                                            <div className="text-xs text-gray-400 capitalize mt-1">{order.platform}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm font-medium text-gray-900">
                                                ${order.amount.toFixed(2)}
                                            </div>
                                            <div className="text-sm text-gray-500">{order.items} item(s)</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                {getStatusIcon(order.status)}
                                                <span className={`ml-2 ${getStatusBadge(order.status)}`}>
                                                    {order.status}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={getPaymentBadge(order.paymentStatus)}>
                                                {order.paymentStatus}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right">
                                            <div className="flex items-center justify-end space-x-2">
                                                <button className="text-gray-400 hover:text-gray-600 p-1 rounded-md hover:bg-gray-100">
                                                    <Eye className="h-4 w-4" />
                                                </button>
                                                <button className="text-gray-400 hover:text-gray-600 p-1 rounded-md hover:bg-gray-100">
                                                    <FileText className="h-4 w-4" />
                                                </button>
                                                <button className="text-gray-400 hover:text-gray-600 p-1 rounded-md hover:bg-gray-100">
                                                    <MoreVertical className="h-4 w-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Table Footer */}
                    <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
                        <div className="text-sm text-gray-700">
                            Showing <span className="font-medium">1</span> to <span className="font-medium">{filteredOrders.length}</span> of{" "}
                            <span className="font-medium">{filteredOrders.length}</span> results
                        </div>
                        <div className="flex space-x-2">
                            <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                                Previous
                            </button>
                            <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderTracking