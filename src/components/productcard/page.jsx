// app/components/ProductCard.jsx
import { Star, Plus, TrendingUp, Heart } from 'lucide-react';
import Link from 'next/link';

export default function ProductCard({ product, showTrending }) {
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-200 hover:scale-102">
      <Link href={`/shop/products/${product.id}`} className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        {discount > 0 && (
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
            -{discount}%
          </div>
        )}
        {showTrending && (
          <div className="absolute top-2 right-2 bg-orange-500 text-white p-1.5 rounded-full">
            <TrendingUp className="h-3 w-3" />
          </div>
        )}
        <button className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm p-1.5 rounded-full hover:bg-white transition-colors">
          <Heart className="h-4 w-4 text-gray-600" />
        </button>
      </Link>

      <div className="p-4">
        <h3 className="font-medium text-gray-900 mb-1 line-clamp-2">{product.name}</h3>
        {product.nameUrdu && (
          <p className="text-sm text-gray-500 mb-2">{product.nameUrdu}</p>
        )}

        <div className="flex items-center gap-1 mb-2">
          <Star className="h-4 w-4 text-yellow-400 fill-current" />
          <span className="text-sm text-gray-600">
            {product.rating} ({product.reviews})
          </span>
        </div>

        <div className="flex items-center justify-between mb-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-gray-900">
                ₨{product.price.toLocaleString()}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-gray-500 line-through">
                  ₨{product.originalPrice.toLocaleString()}
                </span>
              )}
            </div>
            <span className="text-xs text-gray-500">Free delivery</span>
          </div>
        </div>

        <button
          disabled={!product.inStock}
          className={`w-full py-2 px-4 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors ${
            product.inStock
              ? 'bg-green-600 hover:bg-green-700 text-white'
              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
          }`}
        >
          <Plus className="h-4 w-4" />
          {product.inStock ? 'Add to Cart' : 'Out of Stock'}
        </button>
      </div>
    </div>
  );
}
