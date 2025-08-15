// app/(home)/page.jsx
import { Star, ArrowRight, TrendingUp, Heart, Zap } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { featuredProducts, categories, trendingProducts } from '@/data/mockData';

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="py-8 lg:py-12">
        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-white">
          <div className="max-w-2xl">
            <h1 className="text-3xl lg:text-4xl font-bold mb-4">
              Welcome to PakShop
              <br />
              <span className="text-green-200 text-lg">آپ کا اپنا آن لائن مارکیٹ</span>
            </h1>
            <p className="text-green-100 text-lg mb-6">
              Discover amazing products at unbeatable prices. Free delivery across Pakistan!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/shop/products"
                className="bg-white text-green-600 px-6 py-3 rounded-lg font-medium hover:bg-green-50 transition-colors flex items-center justify-center gap-2"
              >
                Shop Now <ArrowRight className="h-4 w-4" />
              </a>
              <div className="flex items-center gap-2 text-green-200">
                <Zap className="h-4 w-4" />
                <span>Cash on Delivery Available</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <a
              key={category.id}
              href="/shop/products"
              className="bg-white rounded-xl p-4 text-center hover:shadow-md transition-all duration-200 hover:scale-105 border border-gray-100"
            >
              <div className="w-16 h-16 mx-auto mb-3 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-medium text-gray-900 text-sm">{category.name}</h3>
              {category.nameUrdu && (
                <p className="text-xs text-gray-500 mt-1">{category.nameUrdu}</p>
              )}
              <p className="text-xs text-gray-400 mt-1">{category.productCount} items</p>
            </a>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Featured Products</h2>
          <a
            href="/shop/products"
            className="text-green-600 hover:text-green-700 font-medium flex items-center gap-1"
          >
            View All <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {featuredProducts.slice(0, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Trending Now */}
      <section className="py-8">
        <div className="flex items-center gap-2 mb-6">
          <TrendingUp className="h-6 w-6 text-orange-500" />
          <h2 className="text-2xl font-bold text-gray-900">Trending Now</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {trendingProducts.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} showTrending={true} />
          ))}
        </div>
      </section>

      {/* Features Banner */}
      <section className="py-8">
        <div className="bg-white rounded-xl p-6 border border-gray-100">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Zap className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Cash on Delivery</h3>
              <p className="text-sm text-gray-600">Pay when you receive your order</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Heart className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Quality Guaranteed</h3>
              <p className="text-sm text-gray-600">100% authentic products</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Fast Delivery</h3>
              <p className="text-sm text-gray-600">2-5 days across Pakistan</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
