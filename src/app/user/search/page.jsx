'use client';

import { useState } from "react";
import { Search as SearchIcon, Filter, Grid, List, SlidersHorizontal, X, Star, ChevronDown, ChevronUp, Heart, ShoppingCart, Clock, Zap } from "lucide-react";
import iphoneImage from "../../../../public/phone.jpeg";
import tshirtImage from "../../../../public/jumpers.webp";
import coffeeMakerImage from "../../../../public/Fridge.jpg";
import bookImage from "../../../../public/books.jpg";

const searchResults = [
  {
    id: "1",
    name: "iPhone 15 Pro Max 256GB",
    price: 1199.99,
    originalPrice: 1299.99,
    rating: 4.8,
    reviewCount: 2847,
    image: iphoneImage,
    category: "Electronics",
    isOnSale: true,
    inStock: true,
    isHot: true,
    timeLeft: "12:45:33"
  },
  {
    id: "2", 
    name: "Premium Cotton T-Shirt",
    price: 29.99,
    originalPrice: 39.99,
    rating: 4.5,
    reviewCount: 1203,
    image: tshirtImage,
    category: "Fashion",
    isOnSale: true,
    inStock: true,
    isHot: true,
    timeLeft: "06:22:17"
  },
  {
    id: "3",
    name: "Smart Coffee Maker Pro",
    price: 149.99,
    rating: 4.7,
    reviewCount: 856,
    image: coffeeMakerImage,
    category: "Home & Kitchen",
    inStock: true,
    isFeatured: true
  },
  {
    id: "4",
    name: "The Art of Programming",
    price: 49.99,
    originalPrice: 59.99,
    rating: 4.9,
    reviewCount: 445,
    image: bookImage,
    category: "Books & Stationery",
    isOnSale: true,
    inStock: true,
    isFeatured: true
  },
  {
    id: "5",
    name: "Wireless Earbuds Pro",
    price: 129.99,
    originalPrice: 159.99,
    rating: 4.6,
    reviewCount: 892,
    image: iphoneImage,
    category: "Electronics",
    isOnSale: true,
    inStock: true,
    isHot: true,
    timeLeft: "18:14:09"
  },
  {
    id: "6",
    name: "Designer Running Shoes",
    price: 89.99,
    originalPrice: 119.99,
    rating: 4.7,
    reviewCount: 1256,
    image: tshirtImage,
    category: "Fashion",
    isOnSale: true,
    inStock: true
  }
];

const categories = ["Electronics", "Fashion", "Home & Kitchen", "Books & Stationery"];
const brands = ["Apple", "Samsung", "Nike", "Adidas", "Philips", "LG"];

export default function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState("grid");
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [expandedSections, setExpandedSections] = useState({
    price: true,
    categories: true,
    brands: true
  });

  const toggleCategory = (category) => {
    setSelectedCategories(prev => 
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    );
  };

  const toggleBrand = (brand) => {
    setSelectedBrands(prev => 
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedBrands([]);
    setPriceRange([0, 2000]);
  };

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const ProductCard = ({ product }) => (
    <div className={`group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 ${
      viewMode === "list" ? "flex max-h-48" : ""
    } ${product.isHot ? 'border-2 border-orange-300' : 'border border-gray-100'}`}>
      <div className={`relative aspect-square bg-gray-50 ${
        viewMode === "list" ? "w-48 flex-shrink-0" : ""
      }`}>
        <img
          src={product.image.src}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {product.isOnSale && (
          <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-lg shadow-md">
            SALE
          </div>
        )}
        
        {product.isHot && (
          <div className="absolute top-2 left-2 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold px-2 py-1 rounded-lg flex items-center gap-1">
            <Zap size={12} className="fill-white" /> HOT
          </div>
        )}
        
        <button className="absolute top-2 right-2 bg-white/90 hover:bg-white p-1.5 rounded-full shadow-md transition-all hover:scale-110">
          <Heart size={16} className="text-blue-600" />
        </button>
      </div>
      
      <div className="p-4 flex-1">
        <div className="flex justify-between items-start mb-1">
          <h3 className="font-semibold text-gray-900 line-clamp-2">{product.name}</h3>
          {product.isHot && viewMode === "grid" && (
            <div className="flex items-center gap-1 text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
              <Clock size={12} /> {product.timeLeft}
            </div>
          )}
        </div>
        
        <div className="flex items-center mt-1 gap-1">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                className={i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500">({product.reviewCount})</span>
        </div>
        
        <div className="mt-2 flex items-center gap-2">
          <span className="font-bold text-blue-900">${product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>
        
        <div className="mt-2 flex items-center gap-2 text-xs text-gray-500">
          <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-md">{product.category}</span>
          <span className={product.inStock ? "text-green-600 bg-green-100 px-2 py-0.5 rounded-md" : "text-red-600"}>
            {product.inStock ? "In Stock" : "Out of Stock"}
          </span>
        </div>
        
        {product.isHot && viewMode === "list" && (
          <div className="flex items-center gap-1 text-xs text-orange-600 mt-2">
            <Clock size={12} /> Limited time offer: {product.timeLeft}
          </div>
        )}
        
        <button className="w-full mt-3 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white py-2 px-4 rounded-lg text-sm font-medium transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg">
          <ShoppingCart size={16} /> Add to Cart
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50 px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Search Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-blue-900 mb-6">Discover Amazing Products</h1>
          <div className="flex gap-3">
            <div className="relative flex-1">
              <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-blue-400" />
              <input
                type="text"
                placeholder="Search for products, brands, categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 h-14 text-lg rounded-xl border border-blue-200 bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="h-14 px-6 rounded-xl border border-blue-300 bg-white hover:bg-blue-50 flex items-center gap-2 font-medium text-blue-800 shadow-sm transition-colors"
            >
              <Filter size={18} />
              Filters
            </button>
          </div>
        </div>

        {/* Results Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div className="flex items-center gap-3">
            <h2 className="text-xl font-semibold text-blue-900">
              Search Results <span className="text-blue-700">({searchResults.length} items)</span>
            </h2>
            {(selectedCategories.length > 0 || selectedBrands.length > 0) && (
              <button
                onClick={clearFilters}
                className="flex items-center gap-1 text-sm text-red-600 hover:text-red-700"
              >
                <X size={14} />
                Clear Filters
              </button>
            )}
          </div>
          
          <div className="flex items-center gap-3">
            <div className="relative">
              <select className="appearance-none bg-white border border-blue-200 rounded-xl pl-4 pr-10 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm text-blue-900">
                <option>Sort by: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Customer Rating</option>
                <option>Newest</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-blue-500 pointer-events-none" />
            </div>
            
            <div className="flex bg-blue-100 p-1 rounded-xl">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-lg ${viewMode === "grid" ? "bg-white shadow-sm text-blue-700" : "text-blue-500"}`}
              >
                <Grid size={18} />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-lg ${viewMode === "list" ? "bg-white shadow-sm text-blue-700" : "text-blue-500"}`}
              >
                <List size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Active Filters */}
        {(selectedCategories.length > 0 || selectedBrands.length > 0) && (
          <div className="flex flex-wrap gap-2 mb-6">
            {selectedCategories.map(category => (
              <span
                key={category}
                onClick={() => toggleCategory(category)}
                className="inline-flex items-center gap-1 bg-blue-100 hover:bg-blue-200 text-blue-800 text-sm px-3 py-1.5 rounded-full cursor-pointer transition-colors"
              >
                {category}
                <X size={12} />
              </span>
            ))}
            {selectedBrands.map(brand => (
              <span
                key={brand}
                onClick={() => toggleBrand(brand)}
                className="inline-flex items-center gap-1 bg-blue-100 hover:bg-blue-200 text-blue-800 text-sm px-3 py-1.5 rounded-full cursor-pointer transition-colors"
              >
                {brand}
                <X size={12} />
              </span>
            ))}
          </div>
        )}

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Filters Sidebar */}
          {showFilters && (
            <div className="lg:w-80 shrink-0 bg-white p-6 rounded-2xl shadow-md border border-blue-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="flex items-center gap-2 font-semibold text-blue-900">
                  <SlidersHorizontal size={18} /> Filters
                </h3>
                <button
                  onClick={() => setShowFilters(false)}
                  className="p-1.5 rounded-lg hover:bg-blue-100 text-blue-700"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <div
                  className="flex justify-between items-center cursor-pointer mb-3"
                  onClick={() => toggleSection('price')}
                >
                  <h4 className="font-medium text-blue-900">Price Range</h4>
                  {expandedSections.price ? <ChevronUp size={16} className="text-blue-600" /> : <ChevronDown size={16} className="text-blue-600" />}
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
                      className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-sm text-blue-700">
                      <span>${priceRange[0]}</span>
                      <span>${priceRange[1]}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Categories */}
              <div className="mb-6">
                <div
                  className="flex justify-between items-center cursor-pointer mb-3"
                  onClick={() => toggleSection('categories')}
                >
                  <h4 className="font-medium text-blue-900">Categories</h4>
                  {expandedSections.categories ? <ChevronUp size={16} className="text-blue-600" /> : <ChevronDown size={16} className="text-blue-600" />}
                </div>
                {expandedSections.categories && (
                  <div className="space-y-2">
                    {categories.map(category => (
                      <label key={category} className="flex items-center gap-3 cursor-pointer py-1.5">
                        <input
                          type="checkbox"
                          checked={selectedCategories.includes(category)}
                          onChange={() => toggleCategory(category)}
                          className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">{category}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* Brands */}
              <div className="mb-6">
                <div
                  className="flex justify-between items-center cursor-pointer mb-3"
                  onClick={() => toggleSection('brands')}
                >
                  <h4 className="font-medium text-blue-900">Brands</h4>
                  {expandedSections.brands ? <ChevronUp size={16} className="text-blue-600" /> : <ChevronDown size={16} className="text-blue-600" />}
                </div>
                {expandedSections.brands && (
                  <div className="space-y-2">
                    {brands.map(brand => (
                      <label key={brand} className="flex items-center gap-3 cursor-pointer py-1.5">
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
            </div>
          )}

          {/* Results */}
          <div className="flex-1">
            {searchResults.length === 0 ? (
              <div className="bg-white rounded-2xl p-12 text-center shadow-sm">
                <SearchIcon className="mx-auto h-16 w-16 text-blue-300" />
                <h3 className="mt-4 text-xl font-medium text-blue-900">No products found</h3>
                <p className="mt-2 text-blue-700">Try adjusting your search or filters</p>
                <button 
                  onClick={clearFilters}
                  className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg font-medium transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className={viewMode === "grid" 
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" 
                : "space-y-6"
              }>
                {searchResults.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}