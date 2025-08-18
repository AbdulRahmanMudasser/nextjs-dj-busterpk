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
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="mb-4 text-muted-foreground">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
        </div>
        <h2 className="text-3xl font-semibold mb-2">Your wishlist is empty</h2>
        <p className="text-muted-foreground mb-6 max-w-md">
          Start adding products you love to keep track of them
        </p>
        <button className="bg-gradient-to-r from-primary to-orange text-white px-6 py-2 rounded-md font-medium hover:opacity-90 transition-opacity">
          Continue Shopping
        </button>
      </div>
    );
  }

  const ProductCard = ({ product, onAddToCart, onAddToWishlist }) => {
    return (
      <div className="border rounded-lg overflow-hidden flex flex-col h-full hover:shadow-md transition-shadow">
        <div className="relative aspect-square overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <button
            onClick={() => onAddToWishlist(product.id)}
            className="absolute top-3 right-3 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-primary"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
          </button>
          {product.isOnSale && (
            <div className="absolute bottom-3 left-3 bg-primary text-white px-2 py-1 rounded text-xs font-medium">
              Sale
            </div>
          )}
        </div>
        <div className="p-4 flex flex-col flex-grow">
          <span className="text-xs text-muted-foreground mb-1">{product.category}</span>
          <h3 className="font-medium mb-2 line-clamp-2">{product.name}</h3>
          
          <div className="flex items-center mb-3">
            <div className="flex mr-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className={
                    i < Math.floor(product.rating) 
                      ? "text-primary" 
                      : "text-muted"
                  }
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
            </div>
            <span className="text-xs text-muted-foreground">({product.reviewCount})</span>
          </div>
          
          <div className="mt-auto">
            <div className="flex items-center gap-2 mb-3">
              <span className="font-semibold text-lg">${product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>
            <button
              onClick={() => onAddToCart(product.id)}
              disabled={!product.inStock}
              className={`w-full py-2 rounded-md flex items-center justify-center gap-2 ${
                product.inStock
                  ? "bg-primary text-white hover:bg-primary/90"
                  : "bg-muted text-muted-foreground cursor-not-allowed"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="8" cy="21" r="1" />
                <circle cx="19" cy="21" r="1" />
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
              </svg>
              {product.inStock ? "Add to Cart" : "Out of Stock"}
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-orange"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
            My Wishlist
          </h1>
          <p className="text-muted-foreground">
            {wishlistItems.length} {wishlistItems.length === 1 ? 'item' : 'items'} saved
          </p>
        </div>
        
        <div className="flex gap-2">
          <button
            onClick={shareWishlist}
            className="flex items-center gap-2 px-4 py-2 border rounded-md hover:bg-accent transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="18" cy="5" r="3" />
              <circle cx="6" cy="12" r="3" />
              <circle cx="18" cy="19" r="3" />
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
            </svg>
            Share
          </button>
          {inStockCount > 0 && (
            <button
              onClick={addAllToCart}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-orange text-white rounded-md hover:opacity-90 transition-opacity"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="8" cy="21" r="1" />
                <circle cx="19" cy="21" r="1" />
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
              </svg>
              Add All to Cart ({inStockCount})
            </button>
          )}
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="relative flex-1 max-w-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <input
            type="text"
            placeholder="Search your wishlist..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>

        <div className="flex items-center gap-2">
          <span className="px-2 py-1 rounded-md bg-secondary text-secondary-foreground text-sm font-medium">
            {filteredItems.length} results
          </span>
          <div className="flex bg-muted/50 p-1 rounded-md">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded ${viewMode === "grid" ? "bg-primary text-white" : "text-foreground"}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
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
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded ${viewMode === "list" ? "bg-primary text-white" : "text-foreground"}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
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
            </button>
          </div>
        </div>
      </div>

      {/* Wishlist Items */}
      {filteredItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-muted-foreground mb-4"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <h3 className="text-lg font-semibold mb-1">No items found</h3>
          <p className="text-muted-foreground">Try adjusting your search terms</p>
        </div>
      ) : (
        <div
          className={
            viewMode === "grid"
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              : "space-y-4"
          }
        >
          {filteredItems.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={addToCart}
              onAddToWishlist={removeFromWishlist}
            />
          ))}
        </div>
      )}

      {/* Tips */}
      {wishlistItems.length > 0 && (
        <div className="bg-gradient-to-r from-orange/10 to-primary/10 rounded-lg p-6 mt-8">
          <h3 className="font-semibold mb-2 flex items-center gap-2">
            <span className="text-lg">💡</span> Wishlist Tips
          </h3>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li className="flex items-start">
              <span className="mr-2">•</span> Share your wishlist with friends and family for gift ideas
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span> Get notified when prices drop on your saved items
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span> Move multiple items to cart at once for faster checkout
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}