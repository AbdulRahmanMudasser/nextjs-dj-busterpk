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
      dateAdded: "2024-01-15"
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
      dateAdded: "2024-01-12"
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
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
        <div className="mb-6 text-primary/20">
          <HeartIcon size={80} />
        </div>
        <h2 className="text-2xl font-bold mb-3">Your wishlist is empty</h2>
        <p className="text-gray-500 mb-6 max-w-md">
          Start saving your favorite items to keep track of them
        </p>
        <button className="bg-primary text-white px-6 py-2.5 rounded-lg font-medium hover:bg-primary/90 transition-colors">
          Continue Shopping
        </button>
      </div>
    );
  }

  const ProductCard = ({ product }) => (
    <div className="border rounded-xl overflow-hidden flex flex-col h-full hover:shadow-sm transition-all duration-200">
      <div className="relative aspect-square bg-gray-50">
        <img
          src={product.image}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <button
          onClick={() => removeFromWishlist(product.id)}
          className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm rounded-full w-8 h-8 flex items-center justify-center shadow-sm hover:shadow-md transition-all"
        >
          <HeartIcon size={16} filled />
        </button>
        {product.isOnSale && (
          <div className="absolute bottom-3 left-3 bg-primary text-white px-2 py-1 rounded-full text-xs font-medium">
            Sale
          </div>
        )}
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <span className="text-xs text-gray-500 mb-1">{product.category}</span>
        <h3 className="font-medium mb-2 line-clamp-2">{product.name}</h3>
        
        <div className="flex items-center mb-3">
          <div className="flex mr-1">
            {[...Array(5)].map((_, i) => (
              <StarIcon 
                key={i} 
                filled={i < Math.floor(product.rating)} 
                className={i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"} 
              />
            ))}
          </div>
          <span className="text-xs text-gray-500">({product.reviewCount})</span>
        </div>
        
        <div className="mt-auto">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-semibold text-gray-900">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          <button
            onClick={() => addToCart(product.id)}
            disabled={!product.inStock}
            className={`w-full py-2 rounded-lg flex items-center justify-center gap-2 text-sm ${
              product.inStock
                ? "bg-primary text-white hover:bg-primary/90"
                : "bg-gray-100 text-gray-400 cursor-not-allowed"
            }`}
          >
            <ShoppingCartIcon size={16} />
            {product.inStock ? "Add to Cart" : "Out of Stock"}
          </button>
        </div>
      </div>
    </div>
  );

  const ProductListItem = ({ product }) => (
    <div className="flex gap-4 p-4 border-b last:border-0 hover:bg-gray-50 transition-colors">
      <div className="relative w-24 h-24 bg-gray-100 rounded-lg overflow-hidden shrink-0">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
      </div>
      <div className="flex-grow">
        <div className="flex justify-between">
          <div>
            <span className="text-xs text-gray-500">{product.category}</span>
            <h3 className="font-medium">{product.name}</h3>
          </div>
          <button 
            onClick={() => removeFromWishlist(product.id)}
            className="text-gray-400 hover:text-primary"
          >
            <HeartIcon size={18} filled />
          </button>
        </div>
        
        <div className="flex items-center my-1">
          <div className="flex mr-1">
            {[...Array(5)].map((_, i) => (
              <StarIcon 
                key={i} 
                filled={i < Math.floor(product.rating)} 
                className={i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"} 
                size={14}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500">({product.reviewCount})</span>
        </div>
        
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-gray-900">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          <button
            onClick={() => addToCart(product.id)}
            disabled={!product.inStock}
            className={`px-4 py-1.5 rounded-lg text-sm ${
              product.inStock
                ? "bg-primary text-white hover:bg-primary/90"
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
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-3">
            <HeartIcon size={24} className="text-primary" />
            My Wishlist
          </h1>
          <p className="text-gray-500">
            {wishlistItems.length} {wishlistItems.length === 1 ? 'item' : 'items'} saved
          </p>
        </div>
        
        <div className="flex gap-3">
          <button
            onClick={shareWishlist}
            className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50 transition-colors text-sm"
          >
            <ShareIcon size={16} />
            Share
          </button>
          {inStockCount > 0 && (
            <button
              onClick={addAllToCart}
              className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-sm"
            >
              <ShoppingCartIcon size={16} />
              Add All ({inStockCount})
            </button>
          )}
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div className="relative flex-1 max-w-md">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search your wishlist..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-lg bg-white focus:outline-none focus:ring-1 focus:ring-primary/50"
          />
        </div>

        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm">
            {filteredItems.length} items
          </span>
          <div className="flex bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-lg ${viewMode === "grid" ? "bg-primary text-white" : "text-gray-700"}`}
            >
              <GridIcon size={16} />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded-lg ${viewMode === "list" ? "bg-primary text-white" : "text-gray-700"}`}
            >
              <ListIcon size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Wishlist Items */}
      {filteredItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-12 text-center bg-gray-50 rounded-xl">
          <SearchIcon size={48} className="text-gray-300 mb-4" />
          <h3 className="text-lg font-semibold mb-1">No items found</h3>
          <p className="text-gray-500">Try adjusting your search terms</p>
        </div>
      ) : viewMode === "grid" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredItems.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="border rounded-xl divide-y bg-white">
          {filteredItems.map((product) => (
            <ProductListItem key={product.id} product={product} />
          ))}
        </div>
      )}

      {/* Tips */}
      {wishlistItems.length > 0 && (
        <div className="bg-gray-50 rounded-xl p-5 mt-8">
          <h3 className="font-semibold mb-3 flex items-center gap-2">
            <LightbulbIcon size={20} className="text-yellow-500" />
            Wishlist Tips
          </h3>
          <ul className="text-sm text-gray-600 space-y-2">
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
  );
}

// Icon components for cleaner code
const HeartIcon = ({ size = 24, filled = false, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth="1.5"
    className={className}
  >
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
);

const StarIcon = ({ size = 16, filled = false, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth="1.5"
    className={className}
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const ShoppingCartIcon = ({ size = 16 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="8" cy="21" r="1" />
    <circle cx="19" cy="21" r="1" />
    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
  </svg>
);

const ShareIcon = ({ size = 16 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="18" cy="5" r="1" />
    <circle cx="6" cy="12" r="1" />
    <circle cx="18" cy="19" r="1" />
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
  </svg>
);

const SearchIcon = ({ size = 16, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);

const GridIcon = ({ size = 16 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <rect width="7" height="7" x="3" y="3" rx="1" />
    <rect width="7" height="7" x="14" y="3" rx="1" />
    <rect width="7" height="7" x="14" y="14" rx="1" />
    <rect width="7" height="7" x="3" y="14" rx="1" />
  </svg>
);

const ListIcon = ({ size = 16 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <line x1="8" y1="6" x2="21" y2="6" />
    <line x1="8" y1="12" x2="21" y2="12" />
    <line x1="8" y1="18" x2="21" y2="18" />
    <line x1="3" y1="6" x2="3.01" y2="6" />
    <line x1="3" y1="12" x2="3.01" y2="12" />
    <line x1="3" y1="18" x2="3.01" y2="18" />
  </svg>
);

const LightbulbIcon = ({ size = 16, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
    <path d="M9 18h6" />
    <path d="M10 22h4" />
  </svg>
);