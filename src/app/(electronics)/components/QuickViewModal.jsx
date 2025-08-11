// src/app/(electronics)/components/QuickViewModal.jsx
'use client'

export default function QuickViewModal({ product, addToCart, onClose }) {
  if (!product) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-md w-full">
        <div className="space-y-4">
          <img
            src={product.img}
            alt={product.name}
            className="w-full max-h-64 object-contain"
          />
          <h2 className="text-2xl font-bold">{product.name}</h2>
          {product.oldPrice && (
            <p className="line-through text-gray-500">{product.oldPrice}</p>
          )}
          <p className="text-xl text-red-600 font-semibold">{product.price}</p>
          <p>{product.description || "No description available."}</p>
          <button
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            onClick={() => {
              addToCart(product)
              onClose()
            }}
          >
            Add to Cart
          </button>
          <button
            className="ml-2 bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}