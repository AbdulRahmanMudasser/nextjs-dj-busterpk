'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { 
  SlidersHorizontal, 
  X, 
  Grid, 
  List, 
  Home,
  Star,
  ShoppingCart,
  ChevronDown,
  Search,
  Filter,
  ArrowRight
} from "lucide-react";

export default function HomeKitchenPage() {
  const router = useRouter()
  const [showFilters, setShowFilters] = useState(false)
  const [viewMode, setViewMode] = useState("grid")
  const [priceRange, setPriceRange] = useState([0, 1000])
  const [selectedBrands, setSelectedBrands] = useState([])
  const [selectedFeatures, setSelectedFeatures] = useState([])
  const [sortBy, setSortBy] = useState("popular")
  const [searchQuery, setSearchQuery] = useState("")

  const config = {
    name: "Home & Kitchen",
    icon: Home,
    color: "bg-green-600",
    gradient: "from-green-500 to-green-700",
    description: "Essential home appliances, kitchen tools, and home decor",
    filters: {
      brands: ["Philips", "Breville", "KitchenAid", "Dyson", "IKEA", "Williams Sonoma"],
      features: ["Smart Home", "Energy Efficient", "Dishwasher Safe", "Non-Stick"]
    }
  }

  const products = Array(12).fill().map((_, i) => ({
    id: `home-${i}`,
    name: i % 3 === 0 ? "Smart Coffee Maker" : 
          i % 3 === 1 ? "Air Fryer Oven" : "Robot Vacuum",
    price: i % 3 === 0 ? 149.99 : i % 3 === 1 ? 199.99 : 299.99,
    originalPrice: i % 3 === 0 ? 179.99 : i % 3 === 1 ? 229.99 : 349.99,
    rating: 4.6 + (i % 5 * 0.1),
    reviewCount: 856 - (i * 30),
    image: "/home.jpg",
    category: "Home & Kitchen",
    isOnSale: i % 2 === 0,
    inStock: true,
    brand: i % 3 === 0 ? "Breville" : i % 3 === 1 ? "Philips" : "Dyson",
    feature: i % 4 === 0 ? "Smart Home" : 
            i % 4 === 1 ? "Energy Efficient" : 
            i % 4 === 2 ? "Dishwasher Safe" : "Non-Stick"
  }))

  // Apply filters
  let filteredProducts = [...products]
  if (selectedBrands.length > 0) {
    filteredProducts = filteredProducts.filter(p => selectedBrands.includes(p.brand))
  }
  if (selectedFeatures.length > 0) {
    filteredProducts = filteredProducts.filter(p => selectedFeatures.includes(p.feature))
  }
  if (searchQuery) {
    filteredProducts = filteredProducts.filter(p => 
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.brand.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }
  filteredProducts = filteredProducts.filter(p => 
    p.price >= priceRange[0] && p.price <= priceRange[1]
  )

  // Apply sorting
  switch (sortBy) {
    case "price-low":
      filteredProducts.sort((a, b) => a.price - b.price)
      break
    case "price-high":
      filteredProducts.sort((a, b) => b.price - a.price)
      break
    case "rating":
      filteredProducts.sort((a, b) => b.rating - a.rating)
      break
    case "newest":
      filteredProducts.sort((a, b) => b.reviewCount - a.reviewCount)
      break
    default:
      filteredProducts.sort((a, b) => b.reviewCount - a.reviewCount)
  }

  const toggleBrand = (brand) => {
    setSelectedBrands(prev => 
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    )
  }

  const toggleFeature = (feature) => {
    setSelectedFeatures(prev => 
      prev.includes(feature) ? prev.filter(f => f !== feature) : [...prev, feature]
    )
  }

  const clearFilters = () => {
    setSelectedBrands([])
    setSelectedFeatures([])
    setPriceRange([0, 1000])
    setSearchQuery("")
  }

  const ProductCard = ({ product }) => (
    <div className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
      <div className="relative aspect-square bg-gray-50">
        <div className="w-full h-full flex items-center justify-center p-4">
          <div className={`w-full h-full bg-gradient-to-br ${config.gradient} rounded-lg flex items-center justify-center text-white text-2xl font-bold`}>
            {product.name.split(' ')[0]}
          </div>
        </div>
        {product.isOnSale && (
          <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            SALE
          </span>
        )}
        <button className="absolute bottom-3 right-3 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors">
          <ShoppingCart className="w-4 h-4 text-gray-700" />
        </button>
      </div>
      
      <div className="p-4">
        <span className="text-xs text-gray-500 uppercase tracking-wider">{product.brand}</span>
        <h3 className="font-medium text-gray-900 mt-1 line-clamp-2">{product.name}</h3>
        
        <div className="flex items-center mt-2 gap-1">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                fill={i < Math.floor(product.rating) ? "#f59e0b" : "none"}
                className={i < Math.floor(product.rating) ? "text-amber-400" : "text-gray-300"}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500 ml-1">({product.reviewCount})</span>
        </div>

        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-2">
            <span className="font-bold text-gray-900">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="text-xs text-gray-400 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
            {product.feature}
          </span>
        </div>
      </div>
    </div>
  )

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Category Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{config.name}</h1>
          <p className="text-gray-600 mt-2">{config.description}</p>
        </div>
        <div className="text-sm text-gray-500">
          Showing <span className="font-medium text-gray-900">{filteredProducts.length}</span> of {products.length} products
        </div>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder={`Search ${config.name.toLowerCase()}...`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        
        <div className="flex gap-3">
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg border ${
              showFilters ? 'bg-blue-50 border-blue-200 text-blue-600' : 'border-gray-300 text-gray-700'
            }`}
          >
            <Filter size={16} />
            <span className="text-sm font-medium">Filters</span>
          </button>
          
          <div className="relative">
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-white border border-gray-300 rounded-lg pl-3 pr-8 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="popular">Most Popular</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="newest">Newest First</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
          </div>
          
          <div className="hidden sm:flex bg-gray-100 p-1 rounded-lg">
            <button 
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-md ${viewMode === "grid" ? "bg-white shadow-sm" : "text-gray-500"}`}
            >
              <Grid size={16} />
            </button>
            <button 
              onClick={() => setViewMode("list")}
              className={`p-2 rounded-md ${viewMode === "list" ? "bg-white shadow-sm" : "text-gray-500"}`}
            >
              <List size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Active Filters */}
      {(selectedBrands.length > 0 || selectedFeatures.length > 0 || searchQuery || priceRange[1] < 1000) && (
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="text-sm text-gray-500">Filters:</span>
          {searchQuery && (
            <span 
              onClick={() => setSearchQuery("")}
              className="inline-flex items-center gap-1 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm px-3 py-1 rounded-full cursor-pointer transition-colors"
            >
              Search: "{searchQuery}"
              <X size={12} />
            </span>
          )}
          {priceRange[1] < 1000 && (
            <span 
              onClick={() => setPriceRange([0, 1000])}
              className="inline-flex items-center gap-1 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm px-3 py-1 rounded-full cursor-pointer transition-colors"
            >
              Price: ${priceRange[0]} - ${priceRange[1]}
              <X size={12} />
            </span>
          )}
          {selectedBrands.map(brand => (
            <span 
              key={brand} 
              onClick={() => toggleBrand(brand)}
              className="inline-flex items-center gap-1 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm px-3 py-1 rounded-full cursor-pointer transition-colors"
            >
              Brand: {brand}
              <X size={12} />
            </span>
          ))}
          {selectedFeatures.map(feature => (
            <span 
              key={feature} 
              onClick={() => toggleFeature(feature)}
              className="inline-flex items-center gap-1 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm px-3 py-1 rounded-full cursor-pointer transition-colors"
            >
              Feature: {feature}
              <X size={12} />
            </span>
          ))}
          <button 
            onClick={clearFilters}
            className="text-sm text-blue-600 hover:text-blue-800 font-medium ml-2"
          >
            Clear all
          </button>
        </div>
      )}

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Filters Sidebar */}
        {showFilters && (
          <div className="lg:w-80 shrink-0 bg-white p-5 rounded-xl shadow-sm border border-gray-200">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-semibold text-lg">Filters</h3>
              <button 
                onClick={clearFilters}
                className="text-sm text-blue-600 hover:text-blue-800"
              >
                Reset all
              </button>
            </div>

            {/* Price Range */}
            <div className="mb-6">
              <h4 className="font-medium text-gray-900 mb-3">Price Range</h4>
              <div className="space-y-4">
                <input
                  type="range"
                  min="0"
                  max="1000"
                  step="10"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm text-gray-600">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>
            </div>

            {/* Brands */}
            <div className="mb-6">
              <h4 className="font-medium text-gray-900 mb-3">Brands</h4>
              <div className="space-y-3 max-h-60 overflow-y-auto">
                {config.filters.brands.map(brand => (
                  <label key={brand} className="flex items-center gap-3 cursor-pointer">
                    <input 
                      type="checkbox"
                      checked={selectedBrands.includes(brand)}
                      onChange={() => toggleBrand(brand)}
                      className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">{brand}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="mb-6">
              <h4 className="font-medium text-gray-900 mb-3">Features</h4>
              <div className="space-y-3 max-h-60 overflow-y-auto">
                {config.filters.features.map(feature => (
                  <label key={feature} className="flex items-center gap-3 cursor-pointer">
                    <input 
                      type="checkbox"
                      checked={selectedFeatures.includes(feature)}
                      onChange={() => toggleFeature(feature)}
                      className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Products */}
        <div className="flex-1">
          {filteredProducts.length === 0 ? (
            <div className="bg-white rounded-xl p-12 text-center border border-gray-200">
              <Search className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-4 text-lg font-medium text-gray-900">No products found</h3>
              <p className="mt-2 text-gray-500">
                Try adjusting your filters or search for something else
              </p>
              <button 
                onClick={clearFilters}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className={`${
              viewMode === 'grid' 
                ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                : 'space-y-4'
            } gap-6`}>
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}