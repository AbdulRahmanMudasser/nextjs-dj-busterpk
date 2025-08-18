'use client'

import { useState } from "react"
import { useParams } from "next/navigation"
import { 
  SlidersHorizontal, 
  X, 
  Grid, 
  List, 
  Smartphone, 
  Shirt, 
  Home, 
  BookOpen,
  Star,
  ShoppingCart,
  ChevronDown,
  ChevronUp
} from "lucide-react"

const CategoryPage = () => {
  const { category = "electronics" } = useParams()
  const [showFilters, setShowFilters] = useState(true)
  const [viewMode, setViewMode] = useState("grid")
  const [priceRange, setPriceRange] = useState([0, 2000])
  const [selectedBrands, setSelectedBrands] = useState([])
  const [selectedFeatures, setSelectedFeatures] = useState([])
  const [sortBy, setSortBy] = useState("popular")
  const [expandedSections, setExpandedSections] = useState({
    price: true,
    brands: true,
    features: true
  })

  const categoryConfig = {
    electronics: {
      name: "Electronics",
      icon: Smartphone,
      color: "from-blue-500 to-blue-600",
      description: "Latest gadgets, smartphones, laptops, and tech accessories",
      filters: {
        brands: ["Apple", "Samsung", "Google", "OnePlus", "Sony", "LG"],
        features: ["5G Ready", "Wireless Charging", "Water Resistant", "Fast Charging"]
      }
    },
    fashion: {
      name: "Fashion",
      icon: Shirt,
      color: "from-pink-500 to-pink-600",
      description: "Trendy clothing, accessories, and footwear for all occasions",
      filters: {
        brands: ["Nike", "Adidas", "Puma", "H&M", "Zara", "Uniqlo"],
        features: ["Organic Cotton", "Sustainable", "Limited Edition", "Quick Dry"]
      }
    },
    "home-kitchen": {
      name: "Home & Kitchen",
      icon: Home,
      color: "from-green-500 to-green-600",
      description: "Essential home appliances, kitchen tools, and home decor",
      filters: {
        brands: ["Philips", "Breville", "KitchenAid", "Dyson", "IKEA", "Williams Sonoma"],
        features: ["Smart Home", "Energy Efficient", "Dishwasher Safe", "Non-Stick"]
      }
    },
    books: {
      name: "Books & Stationery",
      icon: BookOpen,
      color: "from-purple-500 to-purple-600",
      description: "Books, educational materials, and office supplies",
      filters: {
        brands: ["Penguin", "Harper Collins", "McGraw Hill", "Moleskine", "Staedtler"],
        features: ["Bestseller", "Educational", "Reference", "Digital Copy Included"]
      }
    }
  }

  const categoryProducts = {
    electronics: Array(8).fill({
      id: "1",
      name: "iPhone 15 Pro Max 256GB",
      price: 1199.99,
      originalPrice: 1299.99,
      rating: 4.8,
      reviewCount: 2847,
      image: "/iphone-15-pro.jpg",
      category: "Electronics",
      isOnSale: true,
      inStock: true
    }),
    fashion: Array(8).fill({
      id: "2",
      name: "Premium Cotton T-Shirt",
      price: 29.99,
      originalPrice: 39.99,
      rating: 4.5,
      reviewCount: 1203,
      image: "/cotton-tshirt.jpg",
      category: "Fashion",
      isOnSale: true,
      inStock: true
    }),
    "home-kitchen": Array(8).fill({
      id: "3",
      name: "Smart Coffee Maker Pro",
      price: 149.99,
      rating: 4.7,
      reviewCount: 856,
      image: "/coffee-maker.jpg",
      category: "Home & Kitchen",
      inStock: true
    }),
    books: Array(8).fill({
      id: "4",
      name: "The Art of Programming",
      price: 49.99,
      originalPrice: 59.99,
      rating: 4.9,
      reviewCount: 445,
      image: "/programming-book.jpg",
      category: "Books & Stationery",
      isOnSale: true,
      inStock: true
    })
  }

  const config = categoryConfig[category] || categoryConfig.electronics
  const products = categoryProducts[category] || []
  const Icon = config.icon

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
    setPriceRange([0, 2000])
  }

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  const ProductCard = ({ product }) => (
    <div className="relative group bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      <div className="relative aspect-square bg-gray-50">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-contain p-4"
        />
        {product.isOnSale && (
          <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
            SALE
          </span>
        )}
        <button className="absolute bottom-3 right-3 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors">
          <ShoppingCart size={16} className="text-gray-700" />
        </button>
      </div>
      <div className="p-4">
        <span className="text-xs text-gray-500">{product.category}</span>
        <h3 className="font-medium text-gray-900 mt-1 line-clamp-2">{product.name}</h3>
        <div className="flex items-center mt-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i}
                size={14}
                className={i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500 ml-1">({product.reviewCount})</span>
        </div>
        <div className="mt-2 flex items-center gap-2">
          <span className="font-semibold text-gray-900">${product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">${product.originalPrice.toFixed(2)}</span>
          )}
        </div>
        <button className="w-full mt-3 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors">
          Add to Cart
        </button>
      </div>
    </div>
  )

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Category Header */}
      <div className={`relative rounded-xl overflow-hidden bg-gradient-to-r ${config.color} mb-8`}>
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative py-12 px-6 sm:px-12 text-center">
          <div className="mx-auto w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
            <Icon className="text-white w-8 h-8" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">{config.name}</h1>
          <p className="text-white/90 max-w-2xl mx-auto">{config.description}</p>
          <span className="inline-block mt-4 bg-white/20 text-white text-sm font-medium px-3 py-1 rounded-full">
            {products.length}+ Products Available
          </span>
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900"
          >
            <SlidersHorizontal size={16} />
            {showFilters ? "Hide" : "Show"} Filters
          </button>
          
          {(selectedBrands.length > 0 || selectedFeatures.length > 0) && (
            <button 
              onClick={clearFilters}
              className="flex items-center gap-1 text-sm font-medium text-red-600 hover:text-red-700"
            >
              <X size={14} />
              Clear Filters
            </button>
          )}
        </div>
        
        <div className="flex items-center gap-4">
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
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
              <ChevronDown size={16} className="text-gray-500" />
            </div>
          </div>
          
          <div className="flex bg-gray-100 p-1 rounded-lg">
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
      {(selectedBrands.length > 0 || selectedFeatures.length > 0) && (
        <div className="flex flex-wrap gap-2 mb-6">
          {selectedBrands.map(brand => (
            <span 
              key={brand} 
              onClick={() => toggleBrand(brand)}
              className="inline-flex items-center gap-1 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm px-3 py-1 rounded-full cursor-pointer transition-colors"
            >
              {brand}
              <X size={12} />
            </span>
          ))}
          {selectedFeatures.map(feature => (
            <span 
              key={feature} 
              onClick={() => toggleFeature(feature)}
              className="inline-flex items-center gap-1 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm px-3 py-1 rounded-full cursor-pointer transition-colors"
            >
              {feature}
              <X size={12} />
            </span>
          ))}
        </div>
      )}

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Filters Sidebar */}
        {showFilters && (
          <div className="lg:w-72 shrink-0 bg-white p-5 rounded-xl shadow-sm border border-gray-200">
            <h3 className="flex items-center gap-2 font-semibold text-lg mb-5">
              <SlidersHorizontal size={18} /> Filters
            </h3>

            {/* Price Range */}
            <div className="mb-6">
              <div 
                className="flex justify-between items-center cursor-pointer mb-3"
                onClick={() => toggleSection('price')}
              >
                <h4 className="font-medium text-gray-900">Price Range</h4>
                {expandedSections.price ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </div>
              {expandedSections.price && (
                <div className="space-y-4">
                  <input
                    type="range"
                    min="0"
                    max="2000"
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
              )}
            </div>

            {/* Brands */}
            <div className="mb-6">
              <div 
                className="flex justify-between items-center cursor-pointer mb-3"
                onClick={() => toggleSection('brands')}
              >
                <h4 className="font-medium text-gray-900">Brands</h4>
                {expandedSections.brands ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </div>
              {expandedSections.brands && (
                <div className="space-y-2">
                  {config.filters.brands.map(brand => (
                    <label key={brand} className="flex items-center gap-2 cursor-pointer">
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
              )}
            </div>

            {/* Features */}
            <div className="mb-6">
              <div 
                className="flex justify-between items-center cursor-pointer mb-3"
                onClick={() => toggleSection('features')}
              >
                <h4 className="font-medium text-gray-900">Features</h4>
                {expandedSections.features ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </div>
              {expandedSections.features && (
                <div className="space-y-2">
                  {config.filters.features.map(feature => (
                    <label key={feature} className="flex items-center gap-2 cursor-pointer">
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
              )}
            </div>
          </div>
        )}

        {/* Products */}
        <div className="flex-1">
          {products.length === 0 ? (
            <div className="bg-white rounded-xl p-12 text-center">
              <Icon className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-4 text-lg font-medium text-gray-900">No products found</h3>
              <p className="mt-2 text-gray-500">Try adjusting your filters or check back later</p>
            </div>
          ) : (
            <div className={`${viewMode === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : 'space-y-4'} gap-6`}>
              {products.map((product, index) => (
                <ProductCard key={`${product.id}-${index}`} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CategoryPage