"use client";

import { useState } from "react";

export default function Wishlist() {
  const initialWishlistItems = [
    {
      id: "1",
      name: "iPhone 15 Pro Max 256GB",
      price: 1199.99,
      originalPrice: 1299.99,
      rating: 4.8,
      reviewCount: 2847,
      image: "/iphone-15-pro.jpg",
      category: "Electronics",
      isOnSale: true,
      inStock: true,
      dateAdded: "2024-01-15",
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
      image: "/cotton-tshirt.jpg",
      category: "Fashion",
      isOnSale: true,
      inStock: true,
      dateAdded: "2024-01-12",
      isHot: true,
      timeLeft: "06:22:17"
    },
    {
      id: "3",
      name: "Smart Coffee Maker Pro",
      price: 149.99,
      rating: 4.7,
      reviewCount: 856,
      image: "/coffee-maker.jpg",
      category: "Home & Kitchen",
      inStock: false,
      dateAdded: "2024-01-10"
    },
    {
      id: "4",
      name: "The Art of Programming",
      price: 49.99,
      originalPrice: 59.99,
      rating: 4.9,
      reviewCount: 445,
      image: "/programming-book.jpg",
      category: "Books & Stationery",
      isOnSale: true,
      inStock: true,
      dateAdded: "2024-01-08"
    }
  ];

  const [wishlistItems, setWishlistItems] = useState(initialWishlistItems);
  const [viewMode, setViewMode] = useState("grid");
  const [searchQuery, setSearchQuery] = useState("");

  const removeFromWishlist = (productId) => {
    setWishlistItems(prev => prev.filter(item => item.id !== productId));
  };

  const addToCart = (productId) => {
    console.log("Adding to cart:", productId);
  };

  const addAllToCart = () => {
    const inStockItems = wishlistItems.filter(item => item.inStock);
    console.log("Adding all in-stock items to cart:", inStockItems);
  };

  const shareWishlist = () => {
    console.log("Sharing wishlist");
  };

  const filteredItems = wishlistItems.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const inStockCount = wishlistItems.filter(item => item.inStock).length;

  if (wishlistItems.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-2xl p-8 text-center shadow-xl">
          <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <HeartIcon size={32} className="text-blue-600" />
          </div>
          <h2 className="text-2xl font-bold text-blue-900 mb-3">Your wishlist is empty</h2>
          <p className="text-blue-700 mb-6">Start saving your favorite items to keep track of them</p>
          <button className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white py-3 px-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl">
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  const ProductCard = ({ product }) => (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-blue-100 transition-all duration-300 hover:shadow-xl">
      <div className="relative aspect-square bg-blue-50">
        <img
          src={product.image}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <button
          onClick={() => removeFromWishlist(product.id)}
          className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full w-9 h-9 flex items-center justify-center shadow-md hover:shadow-lg transition-all hover:scale-110"
        >
          <HeartIcon size={18} filled className="text-red-500" />
        </button>
        {product.isOnSale && (
          <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-lg text-xs font-bold">
            SALE
          </div>
        )}
        {product.isHot && (
          <div className="absolute bottom-3 left-3 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold px-2 py-1 rounded-lg flex items-center gap-1">
            <ZapIcon size={12} className="fill-white" /> HOT
          </div>
        )}
      </div>
      <div className="p-4">
        <span className="text-xs text-blue-600 font-medium mb-1">{product.category}</span>
        <h3 className="font-semibold text-blue-900 mb-2 line-clamp-2">{product.name}</h3>
        
        <div className="flex items-center mb-3">
          <div className="flex mr-1">
            {[...Array(5)].map((_, i) => (
              <StarIcon 
                key={i} 
                filled={i < Math.floor(product.rating)} 
                className={i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} 
              />
            ))}
          </div>
          <span className="text-xs text-blue-600">({product.reviewCount})</span>
        </div>
        
        <div className="flex items-center gap-2 mb-3">
          <span className="font-bold text-blue-900 text-lg">${product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        {product.isHot && (
          <div className="flex items-center gap-1 text-xs text-orange-600 bg-orange-50 px-2 py-1 rounded-md mb-3">
            <ClockIcon size={12} /> Limited time: {product.timeLeft}
          </div>
        )}
        
        <button
          onClick={() => addToCart(product.id)}
          disabled={!product.inStock}
          className={`w-full py-2.5 rounded-xl flex items-center justify-center gap-2 font-medium transition-all ${
            product.inStock
              ? "bg-gradient-to-r from-blue-600 to-blue-800 text-white hover:from-blue-700 hover:to-blue-900 shadow-md hover:shadow-lg"
              : "bg-gray-100 text-gray-400 cursor-not-allowed"
          }`}
        >
          <ShoppingCartIcon size={16} />
          {product.inStock ? "Add to Cart" : "Out of Stock"}
        </button>
      </div>
    </div>
  );

  const ProductListItem = ({ product }) => (
    <div className="flex gap-4 p-6 bg-white rounded-2xl border border-blue-100 hover:shadow-lg transition-all">
      <div className="relative w-24 h-24 bg-blue-50 rounded-xl overflow-hidden shrink-0">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        {product.isHot && (
          <div className="absolute top-2 left-2 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded flex items-center gap-1">
            <ZapIcon size={10} className="fill-white" /> HOT
          </div>
        )}
      </div>
      <div className="flex-grow">
        <div className="flex justify-between items-start mb-2">
          <div>
            <span className="text-xs text-blue-600 font-medium">{product.category}</span>
            <h3 className="font-semibold text-blue-900">{product.name}</h3>
          </div>
          <button 
            onClick={() => removeFromWishlist(product.id)}
            className="p-1.5 rounded-lg hover:bg-blue-100 text-blue-700 transition-colors"
          >
            <HeartIcon size={18} filled className="text-red-500" />
          </button>
        </div>
        
        <div className="flex items-center my-2">
          <div className="flex mr-1">
            {[...Array(5)].map((_, i) => (
              <StarIcon 
                key={i} 
                filled={i < Math.floor(product.rating)} 
                className={i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} 
                size={14}
              />
            ))}
          </div>
          <span className="text-xs text-blue-600">({product.reviewCount})</span>
        </div>
        
        {product.isHot && (
          <div className="flex items-center gap-1 text-xs text-orange-600 bg-orange-50 px-2 py-1 rounded-md mb-3">
            <ClockIcon size={12} /> Limited time: {product.timeLeft}
          </div>
        )}

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-bold text-blue-900 text-lg">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          <button
            onClick={() => addToCart(product.id)}
            disabled={!product.inStock}
            className={`px-4 py-2 rounded-xl font-medium transition-all ${
              product.inStock
                ? "bg-gradient-to-r from-blue-600 to-blue-800 text-white hover:from-blue-700 hover:to-blue-900 shadow-md hover:shadow-lg"
                : "bg-gray-100 text-gray-400 cursor-not-allowed"
            }`}
          >
            {product.inStock ? "Add to Cart" : "Out of Stock"}
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-blue-900 flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <HeartIcon size={24} className="text-blue-600" />
              </div>
              My Wishlist
            </h1>
            <p className="text-blue-700 mt-2">
              {wishlistItems.length} {wishlistItems.length === 1 ? 'item' : 'items'} saved
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3">
            <button
              onClick={shareWishlist}
              className="flex items-center gap-2 px-5 py-2.5 border border-blue-200 rounded-xl hover:bg-blue-50 transition-colors font-medium text-blue-800"
            >
              <ShareIcon size={18} />
              Share
            </button>
            {inStockCount > 0 && (
              <button
                onClick={addAllToCart}
                className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl hover:from-blue-700 hover:to-blue-900 transition-all font-medium shadow-md hover:shadow-lg"
              >
                <ShoppingCartIcon size={18} />
                Add All ({inStockCount})
              </button>
            )}
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
          <div className="relative flex-1 max-w-lg">
            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-400" />
            <input
              type="text"
              placeholder="Search your wishlist..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-blue-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="flex items-center gap-4">
            <span className="px-3 py-1.5 rounded-full bg-blue-100 text-blue-800 font-medium">
              {filteredItems.length} items
            </span>
            <div className="flex bg-blue-100 p-1 rounded-xl">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-lg ${viewMode === "grid" ? "bg-white text-blue-700 shadow-sm" : "text-blue-500"}`}
              >
                <GridIcon size={18} />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-lg ${viewMode === "list" ? "bg-white text-blue-700 shadow-sm" : "text-blue-500"}`}
              >
                <ListIcon size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Wishlist Items */}
        {filteredItems.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center shadow-sm">
            <SearchIcon size={48} className="text-blue-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-blue-900 mb-2">No items found</h3>
            <p className="text-blue-700">Try adjusting your search terms</p>
          </div>
        ) : viewMode === "grid" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredItems.map((product) => (
              <ProductListItem key={product.id} product={product} />
            ))}
          </div>
        )}

        {/* Tips */}
        {wishlistItems.length > 0 && (
          <div className="bg-blue-50 rounded-2xl p-6 mt-8 border border-blue-100">
            <h3 className="font-semibold text-blue-900 mb-4 flex items-center gap-2">
              <LightbulbIcon size={20} className="text-yellow-500" />
              Wishlist Tips
            </h3>
            <ul className="text-blue-700 space-y-2">
              <li className="flex items-start">
                <span className="mr-2">•</span> Share your wishlist with friends for gift ideas
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span> Get price drop notifications on saved items
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span> Move multiple items to cart for faster checkout
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

// Icon components
const HeartIcon = ({ size = 24, filled = false, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" className={className}>
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
);

const StarIcon = ({ size = 16, filled = false, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" className={className}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const ShoppingCartIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" />
    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
  </svg>
);

const ShareIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <circle cx="18" cy="5" r="1" /><circle cx="6" cy="12" r="1" /><circle cx="18" cy="19" r="1" />
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
  </svg>
);

const SearchIcon = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
    <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
  </svg>
);

const GridIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <rect width="7" height="7" x="3" y="3" rx="1" /><rect width="7" height="7" x="14" y="3" rx="1" />
    <rect width="7" height="7" x="14" y="14" rx="1" /><rect width="7" height="7" x="3" y="14" rx="1" />
  </svg>
);

const ListIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" />
    <line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" />
  </svg>
);

const LightbulbIcon = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
    <path d="M9 18h6" /><path d="M10 22h4" />
  </svg>
);

const ZapIcon = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const ClockIcon = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>
);