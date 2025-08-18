'use client';

import { useState } from "react";
import { Search as SearchIcon, Filter, Grid, List, SlidersHorizontal, X, Star, ChevronDown, ChevronUp } from "lucide-react";
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
    inStock: true
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
    inStock: true
  },
  {
    id: "3",
    name: "Smart Coffee Maker Pro",
    price: 149.99,
    rating: 4.7,
    reviewCount: 856,
    image: coffeeMakerImage,
    category: "Home & Kitchen",
    inStock: true
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
    <div className={`relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow ${
      viewMode === "list" ? "flex max-h-48" : ""
    }`}>
      <div className={`relative aspect-square bg-gray-50 ${
        viewMode === "list" ? "w-48 flex-shrink-0" : ""
      }`}>
        <img
          src={product.image.src}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        {product.isOnSale && (
          <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-medium px-2 py-1 rounded-full">
            Sale
          </div>
        )}
      </div>
      <div className="p-4 flex-1">
        <h3 className="font-medium text-gray-900 line-clamp-2">{product.name}</h3>
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
          <span className="font-semibold">${product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>
        <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">
          <span>{product.category}</span>
          <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
          <span className={product.inStock ? "text-green-600" : "text-red-600"}>
            {product.inStock ? "In Stock" : "Out of Stock"}
          </span>
        </div>
        <button className="w-full mt-3 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md text-sm font-medium transition-colors">
          Add to Cart
        </button>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Search Header */}
      <div className="mb-8">
        <div className="flex gap-3">
          <div className="relative flex-1">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search for products, brands, categories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 h-12 text-lg rounded-md border border-gray-300 bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="h-12 px-6 rounded-md border border-gray-300 bg-white hover:bg-gray-50 flex items-center gap-2 font-medium"
          >
            <Filter size={16} />
            Filters
          </button>
        </div>
      </div>

      {/* Results Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div className="flex items-center gap-3">
          <h2 className="text-xl font-semibold">
            Search Results ({searchResults.length} items)
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
        
        <div className="flex items-center gap-2">
          <div className="relative">
            <select
              className="appearance-none bg-white border border-gray-300 rounded-md pl-3 pr-8 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option>Sort by: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Customer Rating</option>
              <option>Newest</option>
            </select>
            <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 pointer-events-none" />
          </div>
          
          <div className="flex bg-gray-100 p-1 rounded-md">
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
      {(selectedCategories.length > 0 || selectedBrands.length > 0) && (
        <div className="flex flex-wrap gap-2 mb-6">
          {selectedCategories.map(category => (
            <span
              key={category}
              onClick={() => toggleCategory(category)}
              className="inline-flex items-center gap-1 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm px-3 py-1 rounded-full cursor-pointer transition-colors"
            >
              {category}
              <X size={12} />
            </span>
          ))}
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
        </div>
      )}

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Filters Sidebar */}
        {showFilters && (
          <div className="lg:w-72 shrink-0 bg-white p-5 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-5">
              <h3 className="flex items-center gap-2 font-semibold">
                <SlidersHorizontal size={16} /> Filters
              </h3>
              <button
                onClick={() => setShowFilters(false)}
                className="p-1 rounded-md hover:bg-gray-100"
              >
                <X size={16} />
              </button>
            </div>

            {/* Price Range */}
            <div className="mb-6">
              <div
                className="flex justify-between items-center cursor-pointer mb-3"
                onClick={() => toggleSection('price')}
              >
                <h4 className="font-medium">Price Range</h4>
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
                    className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
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
                <h4 className="font-medium">Categories</h4>
                {expandedSections.categories ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </div>
              {expandedSections.categories && (
                <div className="space-y-2">
                  {categories.map(category => (
                    <label key={category} className="flex items-center gap-2 cursor-pointer">
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
                <h4 className="font-medium">Brands</h4>
                {expandedSections.brands ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </div>
              {expandedSections.brands && (
                <div className="space-y-2">
                  {brands.map(brand => (
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
          </div>
        )}

        {/* Results */}
        <div className="flex-1">
          {searchResults.length === 0 ? (
            <div className="bg-white rounded-lg p-12 text-center">
              <SearchIcon className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-4 text-lg font-medium">No products found</h3>
              <p className="mt-2 text-gray-500">Try adjusting your search or filters</p>
            </div>
          ) : (
            <div className={viewMode === "grid" 
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" 
              : "space-y-4"
            }>
              {searchResults.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}