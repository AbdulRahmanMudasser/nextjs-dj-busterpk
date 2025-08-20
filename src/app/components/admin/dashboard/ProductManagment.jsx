"use client"

import { useState } from "react"
import {
    Search,
    Filter,
    MoreVertical,
    Package,
    Eye,
    CheckCircle,
    XCircle,
    AlertTriangle,
    Flag,
    Download,
    Upload,
    Plus,
    ChevronDown,
    BarChart3,
    TrendingUp,
    Calendar,
    DollarSign,
    Users,
    ShoppingCart
} from "lucide-react"

const ProductControl = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const [statusFilter, setStatusFilter] = useState("all")
    const [categoryFilter, setCategoryFilter] = useState("all")
    const [selectedProducts, setSelectedProducts] = useState([])
    const [isFilterOpen, setIsFilterOpen] = useState(false)

    // Mock data - replace with actual API calls to Django backend
    const products = [
        {
            id: "1",
            name: "Wireless Bluetooth Headphones",
            sellerId: "1",
            sellerName: "TechGadgets Pro",
            category: "Electronics",
            price: 89.99,
            status: "approved",
            dateSubmitted: "2024-01-15",
            platform: "website",
            views: 1250,
            sales: 45,
            stock: 120,
            image: "/api/placeholder/60/60"
        },
        {
            id: "2",
            name: "Summer Dress Collection",
            sellerId: "2",
            sellerName: "Fashion Forward",
            category: "Clothing",
            price: 59.99,
            status: "pending",
            dateSubmitted: "2024-01-18",
            platform: "app",
            views: 0,
            sales: 0,
            stock: 45,
            image: "/api/placeholder/60/60"
        },
        {
            id: "3",
            name: "Kitchen Knife Set",
            sellerId: "3",
            sellerName: "Home Essentials",
            category: "Home & Garden",
            price: 129.99,
            status: "flagged",
            dateSubmitted: "2024-01-12",
            platform: "website",
            views: 890,
            sales: 12,
            stock: 78,
            image: "/api/placeholder/60/60"
        },
        {
            id: "4",
            name: "Professional Camera DSLR",
            sellerId: "4",
            sellerName: "Photo World",
            category: "Electronics",
            price: 899.99,
            status: "approved",
            dateSubmitted: "2024-01-10",
            platform: "website",
            views: 2450,
            sales: 32,
            stock: 25,
            image: "/api/placeholder/60/60"
        },
        {
            id: "5",
            name: "Yoga Mat Premium",
            sellerId: "5",
            sellerName: "Fitness Gear",
            category: "Sports",
            price: 39.99,
            status: "pending",
            dateSubmitted: "2024-01-20",
            platform: "app",
            views: 320,
            sales: 0,
            stock: 150,
            image: "/api/placeholder/60/60"
        }
    ]

    const getStatusBadge = (status) => {
        const styles = {
            approved: "bg-green-100 text-green-800 border-green-200",
            pending: "bg-yellow-100 text-yellow-800 border-yellow-200",
            rejected: "bg-red-100 text-red-800 border-red-200",
            flagged: "bg-orange-100 text-orange-800 border-orange-200"
        }
        return `${styles[status] || "bg-gray-100 text-gray-800 border-gray-200"} inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border`
    }

    const getStatusIcon = (status) => {
        switch (status) {
            case "approved":
                return <CheckCircle className="h-4 w-4 text-green-600" />
            case "pending":
                return <AlertTriangle className="h-4 w-4 text-yellow-600" />
            case "rejected":
                return <XCircle className="h-4 w-4 text-red-600" />
            case "flagged":
                return <Flag className="h-4 w-4 text-orange-600" />
            default:
                return null
        }
    }

    const toggleProductSelection = (productId) => {
        if (selectedProducts.includes(productId)) {
            setSelectedProducts(selectedProducts.filter(id => id !== productId))
        } else {
            setSelectedProducts([...selectedProducts, productId])
        }
    }

    const toggleSelectAll = () => {
        if (selectedProducts.length === filteredProducts.length) {
            setSelectedProducts([])
        } else {
            setSelectedProducts(filteredProducts.map(product => product.id))
        }
    }

    const filteredProducts = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.sellerName.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesStatus = statusFilter === "all" || product.status === statusFilter
        const matchesCategory = categoryFilter === "all" || product.category === categoryFilter

        return matchesSearch && matchesStatus && matchesCategory
    })

    const stats = {
        total: 8934,
        approved: 7892,
        pending: 156,
        flagged: 34,
        revenue: 128432
    }

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900">Product Management</h1>
                            <p className="text-gray-600 mt-2">Review and manage product listings</p>
                        </div>
                        <div className="flex space-x-3 mt-4 md:mt-0">
                            <button className="flex items-center justify-center px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                <Download className="h-4 w-4 mr-2" />
                                Export
                            </button>
                            <button className="flex items-center justify-center px-4 py-2 bg-indigo-600 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                <Plus className="h-4 w-4 mr-2" />
                                Add Product
                            </button>
                        </div>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                        <div className="flex items-center">
                            <div className="bg-indigo-100 p-3 rounded-lg mr-4">
                                <Package className="h-6 w-6 text-indigo-600" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-600">Total Products</p>
                                <p className="text-2xl font-bold text-gray-900">{stats.total.toLocaleString()}</p>
                            </div>
                        </div>
                        <div className="mt-4 flex items-center text-sm text-green-600">
                            <TrendingUp className="h-4 w-4 mr-1" />
                            <span>+12% from last month</span>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                        <div className="flex items-center">
                            <div className="bg-green-100 p-3 rounded-lg mr-4">
                                <CheckCircle className="h-6 w-6 text-green-600" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-600">Approved</p>
                                <p className="text-2xl font-bold text-green-600">{stats.approved.toLocaleString()}</p>
                            </div>
                        </div>
                        <div className="mt-4">
                            <div className="w-full bg-gray-200 rounded-full h-2">
                                <div
                                    className="bg-green-600 h-2 rounded-full"
                                    style={{ width: `${(stats.approved / stats.total) * 100}%` }}
                                ></div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                        <div className="flex items-center">
                            <div className="bg-yellow-100 p-3 rounded-lg mr-4">
                                <AlertTriangle className="h-6 w-6 text-yellow-600" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-600">Pending Review</p>
                                <p className="text-2xl font-bold text-yellow-600">{stats.pending}</p>
                            </div>
                        </div>
                        <div className="mt-4 flex items-center">
                            <span className="text-sm text-gray-500">Need your attention</span>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                        <div className="flex items-center">
                            <div className="bg-orange-100 p-3 rounded-lg mr-4">
                                <Flag className="h-6 w-6 text-orange-600" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-600">Flagged</p>
                                <p className="text-2xl font-bold text-orange-600">{stats.flagged}</p>
                            </div>
                        </div>
                        <div className="mt-4 flex items-center">
                            <span className="text-sm text-gray-500">Requires immediate review</span>
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
                                    placeholder="Search products or sellers..."
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
                                <Upload className="h-4 w-4" />
                            </button>
                        </div>
                    </div>

                    {/* Advanced Filters */}
                    {isFilterOpen && (
                        <div className="mt-6 pt-6 border-t border-gray-200 grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                                <select
                                    value={statusFilter}
                                    onChange={(e) => setStatusFilter(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                >
                                    <option value="all">All Status</option>
                                    <option value="approved">Approved</option>
                                    <option value="pending">Pending</option>
                                    <option value="rejected">Rejected</option>
                                    <option value="flagged">Flagged</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                                <select
                                    value={categoryFilter}
                                    onChange={(e) => setCategoryFilter(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                >
                                    <option value="all">All Categories</option>
                                    <option value="Electronics">Electronics</option>
                                    <option value="Clothing">Clothing</option>
                                    <option value="Home & Garden">Home & Garden</option>
                                    <option value="Sports">Sports</option>
                                    <option value="Books">Books</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Date Added</label>
                                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
                                    <option>Any Date</option>
                                    <option>Last 7 days</option>
                                    <option>Last 30 days</option>
                                    <option>Last 90 days</option>
                                </select>
                            </div>
                        </div>
                    )}
                </div>

                {/* Products Table */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
                        <div>
                            <h2 className="text-lg font-medium text-gray-900">Products</h2>
                            <p className="text-sm text-gray-500">{filteredProducts.length} products found</p>
                        </div>
                        <div className="flex items-center space-x-3">
                            {selectedProducts.length > 0 && (
                                <span className="text-sm text-gray-700">
                                    {selectedProducts.length} selected
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
                                            checked={selectedProducts.length === filteredProducts.length && filteredProducts.length > 0}
                                            onChange={toggleSelectAll}
                                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                        />
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Product
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Seller
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Category
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Price
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Status
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Stats
                                    </th>
                                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {filteredProducts.map((product) => (
                                    <tr key={product.id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <input
                                                type="checkbox"
                                                checked={selectedProducts.includes(product.id)}
                                                onChange={() => toggleProductSelection(product.id)}
                                                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                            />
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0 h-10 w-10 bg-gray-200 rounded-md overflow-hidden">
                                                    <img
                                                        className="h-10 w-10 object-cover"
                                                        src={product.image}
                                                        alt={product.name}
                                                    />
                                                </div>
                                                <div className="ml-4">
                                                    <div className="text-sm font-medium text-gray-900">
                                                        {product.name}
                                                    </div>
                                                    <div className="text-sm text-gray-500">
                                                        {new Date(product.dateSubmitted).toLocaleDateString()}
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">{product.sellerName}</div>
                                            <div className="text-sm text-gray-500">ID: {product.sellerId}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            {product.category}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm font-medium text-gray-900">
                                                ${product.price.toFixed(2)}
                                            </div>
                                            <div className="text-sm text-gray-500">{product.stock} in stock</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                {getStatusIcon(product.status)}
                                                <span className={`ml-2 ${getStatusBadge(product.status)}`}>
                                                    {product.status}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center space-x-4">
                                                <div className="flex items-center text-sm text-gray-500">
                                                    <Eye className="h-4 w-4 mr-1 text-gray-400" />
                                                    {product.views}
                                                </div>
                                                <div className="flex items-center text-sm text-gray-500">
                                                    <ShoppingCart className="h-4 w-4 mr-1 text-gray-400" />
                                                    {product.sales}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <div className="flex items-center justify-end space-x-2">
                                                {product.status === "pending" && (
                                                    <>
                                                        <button className="text-green-600 hover:text-green-800 p-1">
                                                            <CheckCircle className="h-5 w-5" />
                                                        </button>
                                                        <button className="text-red-600 hover:text-red-800 p-1">
                                                            <XCircle className="h-5 w-5" />
                                                        </button>
                                                    </>
                                                )}
                                                <button className="text-gray-400 hover:text-gray-600 p-1 rounded-md hover:bg-gray-100">
                                                    <MoreVertical className="h-5 w-5" />
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
                            Showing <span className="font-medium">1</span> to <span className="font-medium">{filteredProducts.length}</span> of{" "}
                            <span className="font-medium">{filteredProducts.length}</span> results
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

export default ProductControl