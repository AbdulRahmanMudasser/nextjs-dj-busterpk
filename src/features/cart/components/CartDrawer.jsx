// src/components/electronics/CartDrawer.jsx
'use client'

export default function CartDrawer({ cart, isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <div className="fixed right-0 top-0 w-80 h-full bg-white shadow-lg p-6 overflow-y-auto z-50">
      <button
        onClick={onClose}
        className="mb-4 text-red-600 font-bold hover:text-red-800"
      >
        Close
      </button>
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map(({ product, quantity }, index) => (
            <li
              key={index}
              className="flex items-center mb-4 border-b pb-3 last:border-none"
            >
              <img
                src={`/${product.img}`}
                alt={product.name}
                className="w-16 h-16 object-contain rounded mr-4"
              />
              <div className="flex-1">
                <p className="font-semibold">{product.name}</p>
                <p className="text-sm text-gray-600">
                  Quantity: <span className="font-semibold">{quantity}</span>
                </p>
                <p className="text-red-600 font-bold">{product.price}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}