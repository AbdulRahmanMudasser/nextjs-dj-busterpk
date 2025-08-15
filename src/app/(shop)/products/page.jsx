// app/(shop)/products/page.jsx
'use client';

import { Filter, Grid3X3, List } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { allProducts, categories } from '@/data/mockData.js';
import { useRouter, useSearchParams } from 'next/navigation';

export default function ProductsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const query = searchParams.get('query') || '';
  const category = searchParams.get('category') || 'all';
  const sort = searchParams.get('sort') || 'name';
  const minPrice = searchParams.get('minPrice') || '0';
  const maxPrice = searchParams.get('maxPrice') || '50000';
  const view = searchParams.get('view') || 'grid';

  const priceRange = [parseInt(minPrice), parseInt(maxPrice)];

  const filteredAndSortedProducts = allProducts
    .filter((product) => {
      const matchesSearch =
        query === '' ||
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase()) ||
        (product.nameUrdu && product.nameUrdu.includes(query));

      const matchesCategory =
        category === 'all' || product.category === category;

      const matchesPrice =
        product.price >= priceRange[0] && product.price <= priceRange[1];

      return matchesSearch && matchesCategory && matchesPrice;
    })
    .sort((a, b) => {
      switch (sort) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Browse Products</h1>
          <p className="text-gray-600">
            {filteredAndSortedProducts.length} products found
            {query && ` for "${query}"`}
          </p>
        </div>

        <div className="flex items-center gap-4 mt-4 md:mt-0">
          {/* View Mode Toggle */}
          <div className="flex bg-gray-100 rounded-lg p-1">
            <a
              href={`?view=grid`}
              className={`p-2 rounded-md ${view === 'grid' ? 'bg-white shadow-sm' : ''}`}
            >
              <Grid3X3 className="h-4 w-4" />
            </a>
            <a
              href={`?view=list`}
              className={`p-2 rounded-md ${view === 'list' ? 'bg-white shadow-sm' : ''}`}
            >
              <List className="h-4 w-4" />
            </a>
          </div>

          {/* Filters Toggle (Mobile) */}
          <a
            href="#filters"
            className="lg:hidden flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <Filter className="h-4 w-4" />
            Filters
          </a>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters Sidebar */}
        <div id="filters" className="lg:w-64 space-y-6">
          {/* Categories */}
          <div className="bg-white rounded-xl p-6 border border-gray-100">
            <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
            <div className="space-y-2">
              <a
                href="?category=all"
                className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                  category === 'all' ? 'bg-green-100 text-green-700' : 'hover:bg-gray-100'
                }`}
              >
                All Products
              </a>
              {categories.map((cat) => (
                <a
                  key={cat.id}
                  href={`?category=${cat.id}`}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                    category === cat.id ? 'bg-green-100 text-green-700' : 'hover:bg-gray-100'
                  }`}
                >
                  {cat.name}
                </a>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div className="bg-white rounded-xl p-6 border border-gray-100">
            <h3 className="font-semibold text-gray-900 mb-4">Price Range</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>₨{priceRange[0].toLocaleString()}</span>
                <span>₨{priceRange[1].toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="0"
                max="50000"
                value={priceRange[1]}
                onChange={(e) => {
                  const newMax = parseInt(e.target.value);
                  router.push(`?minPrice=${priceRange[0]}&maxPrice=${newMax}`);
                }}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
              />
            </div>
          </div>

          {/* Sort Options */}
          <div className="bg-white rounded-xl p-6 border border-gray-100">
            <h3 className="font-semibold text-gray-900 mb-4">Sort By</h3>
            <select
              value={sort}
              onChange={(e) => {
                router.push(`?sort=${e.target.value}`);
              }}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="name">Name A-Z</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="flex-1">
          <div
            className={
              view === 'list'
                ? 'grid grid-cols-1 gap-6'
                : 'grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6'
            }
          >
            {filteredAndSortedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filteredAndSortedProducts.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-4">
                <Grid3X3 className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-600">
                Try adjusting your filters or search terms
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
