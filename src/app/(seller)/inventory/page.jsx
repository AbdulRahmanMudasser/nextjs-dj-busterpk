"use client";

import { useState } from "react";
import {
  AlertTriangle,
  TrendingUp,
  TrendingDown,
  Package,
  Search,
  Filter,
  Download,
  Upload,
} from "lucide-react";

// Inline UI components (basic Tailwind replacements)
const Button = ({ children, className = "", ...props }) => (
  <button
    {...props}
    className={`inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
  >
    {children}
  </button>
);

const Card = ({ children, className = "" }) => (
  <div className={`rounded-lg border border-gray-200 bg-white shadow-sm ${className}`}>
    {children}
  </div>
);

const Input = ({ className = "", ...props }) => (
  <input
    {...props}
    className={`block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500 ${className}`}
  />
);

const Badge = ({ children, className = "" }) => (
  <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${className}`}>
    {children}
  </span>
);

const Progress = ({ value, className = "" }) => (
  <div className={`w-full bg-gray-200 rounded-full ${className}`}>
    <div
      className="bg-blue-600 h-full rounded-full"
      style={{ width: `${value}%`, height: "100%" }}
    ></div>
  </div>
);

const Alert = ({ children, className = "" }) => (
  <div className={`flex items-start space-x-2 rounded-md border p-4 ${className}`}>{children}</div>
);

const Table = ({ children }) => <table className="min-w-full divide-y divide-gray-200">{children}</table>;
const TableHeader = ({ children }) => <thead className="bg-gray-50">{children}</thead>;
const TableBody = ({ children }) => <tbody className="divide-y divide-gray-200">{children}</tbody>;
const TableRow = ({ children }) => <tr>{children}</tr>;
const TableHead = ({ children, className = "" }) => (
  <th
    scope="col"
    className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 ${className}`}
  >
    {children}
  </th>
);
const TableCell = ({ children, className = "" }) => (
  <td className={`px-6 py-4 whitespace-nowrap text-sm text-gray-700 ${className}`}>{children}</td>
);

const mockInventoryData = [
  { id: 1, name: "iPhone 15 Pro Max", sku: "IPH15PM-256-BLK", currentStock: 25, reorderPoint: 10, maxStock: 50, category: "Smartphones", lastUpdated: "2 hours ago", status: "in_stock", avgDailySales: 2.3, daysOfStock: 11 },
  { id: 2, name: "MacBook Pro 16-inch", sku: "MBP16-M3-SLV", currentStock: 12, reorderPoint: 15, maxStock: 30, category: "Laptops", lastUpdated: "4 hours ago", status: "low_stock", avgDailySales: 0.8, daysOfStock: 15 },
  { id: 3, name: "AirPods Pro (2nd Gen)", sku: "APP2-WHT", currentStock: 0, reorderPoint: 20, maxStock: 100, category: "Audio", lastUpdated: "1 day ago", status: "out_of_stock", avgDailySales: 3.2, daysOfStock: 0 },
  { id: 4, name: "iPad Air 5th Gen", sku: "IPA5-256-BLU", currentStock: 18, reorderPoint: 8, maxStock: 40, category: "Tablets", lastUpdated: "6 hours ago", status: "in_stock", avgDailySales: 1.1, daysOfStock: 16 },
  { id: 5, name: "Apple Watch Series 9", sku: "AWS9-45-GPS", currentStock: 5, reorderPoint: 12, maxStock: 25, category: "Wearables", lastUpdated: "3 hours ago", status: "critical", avgDailySales: 1.8, daysOfStock: 3 }
];

export default function InventoryPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const getStatusBadge = (status, currentStock, reorderPoint) => {
    if (currentStock === 0) {
      return <Badge className="bg-red-100 text-red-800">Out of Stock</Badge>;
    } else if (currentStock <= reorderPoint / 2) {
      return <Badge className="bg-red-100 text-red-800">Critical</Badge>;
    } else if (currentStock <= reorderPoint) {
      return <Badge className="bg-yellow-100 text-yellow-800">Low Stock</Badge>;
    } else {
      return <Badge className="bg-green-100 text-green-800">In Stock</Badge>;
    }
  };

  const getStockPercentage = (current, max) => Math.min((current / max) * 100, 100);

  const filteredInventory = mockInventoryData.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || item.sku.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || item.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const totalProducts = mockInventoryData.length;
  const outOfStock = mockInventoryData.filter((item) => item.currentStock === 0).length;
  const lowStock = mockInventoryData.filter((item) => item.currentStock <= item.reorderPoint && item.currentStock > 0).length;
  const totalValue = mockInventoryData.reduce((sum, item) => sum + item.currentStock * 100, 0);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Inventory Control</h1>
          <p className="mt-2 text-gray-600">Monitor and manage your stock levels in real-time</p>
        </div>
        <div className="flex space-x-3">
          <Button>
            <Download className="h-4 w-4 mr-2" /> Export
          </Button>
          <Button>
            <Upload className="h-4 w-4 mr-2" /> Import
          </Button>
        </div>
      </div>

      {/* Alerts */}
      {(outOfStock > 0 || lowStock > 0) && (
        <Alert className="border-yellow-200 bg-yellow-50">
          <AlertTriangle className="h-4 w-4 text-yellow-600" />
          <div className="text-yellow-800">
            <strong>Inventory Alert:</strong> You have {outOfStock} products out of stock and {lowStock} products running low.
          </div>
        </Alert>
      )}

      {/* Stats */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
        <Card className="p-6 flex items-center space-x-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
            <Package className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <p className="text-2xl font-bold">{totalProducts}</p>
            <p className="text-gray-600">Total Products</p>
          </div>
        </Card>
        <Card className="p-6 flex items-center space-x-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-100">
            <TrendingDown className="h-6 w-6 text-red-600" />
          </div>
          <div>
            <p className="text-2xl font-bold text-red-600">{outOfStock}</p>
            <p className="text-gray-600">Out of Stock</p>
          </div>
        </Card>
        <Card className="p-6 flex items-center space-x-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-100">
            <AlertTriangle className="h-6 w-6 text-yellow-600" />
          </div>
          <div>
            <p className="text-2xl font-bold text-yellow-600">{lowStock}</p>
            <p className="text-gray-600">Low Stock</p>
          </div>
        </Card>
        <Card className="p-6 flex items-center space-x-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
            <TrendingUp className="h-6 w-6 text-green-600" />
          </div>
          <div>
            <p className="text-2xl font-bold">${totalValue.toLocaleString()}</p>
            <p className="text-gray-600">Total Value</p>
          </div>
        </Card>
      </div>

      {/* Search & Filter */}
      <Card className="p-6">
        <div className="flex flex-col gap-4 sm:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search by product name or SKU..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="rounded-md border border-gray-300 px-3 py-2 text-sm"
          >
            <option value="all">All Status</option>
            <option value="in_stock">In Stock</option>
            <option value="low_stock">Low Stock</option>
            <option value="critical">Critical</option>
            <option value="out_of_stock">Out of Stock</option>
          </select>
          <Button>
            <Filter className="h-4 w-4 mr-2" /> More Filters
          </Button>
        </div>
      </Card>

      {/* Table */}
      <Card>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>SKU</TableHead>
                <TableHead>Current Stock</TableHead>
                <TableHead>Stock Level</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Days of Stock</TableHead>
                <TableHead>Last Updated</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredInventory.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-500">{item.category}</p>
                  </TableCell>
                  <TableCell>
                    <code className="rounded bg-gray-100 px-2 py-1 text-sm">{item.sku}</code>
                  </TableCell>
                  <TableCell>
                    <p className="font-medium">{item.currentStock} units</p>
                    <p className="text-sm text-gray-500">Max: {item.maxStock}</p>
                  </TableCell>
                  <TableCell>
                    <div className="w-full">
                      <span className="text-xs text-gray-500">
                        {Math.round(getStockPercentage(item.currentStock, item.maxStock))}%
                      </span>
                      <Progress value={getStockPercentage(item.currentStock, item.maxStock)} className="h-2 mt-1" />
                    </div>
                  </TableCell>
                  <TableCell>{getStatusBadge(item.status, item.currentStock, item.reorderPoint)}</TableCell>
                  <TableCell>
                    <span
                      className={`font-medium ${
                        item.daysOfStock <= 7
                          ? "text-red-600"
                          : item.daysOfStock <= 14
                          ? "text-yellow-600"
                          : "text-green-600"
                      }`}
                    >
                      {item.daysOfStock} days
                    </span>
                  </TableCell>
                  <TableCell className="text-sm text-gray-500">{item.lastUpdated}</TableCell>
                  <TableCell className="text-right">
                    <Button>Update Stock</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
}
