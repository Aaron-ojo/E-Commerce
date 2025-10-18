// src/components/Cart.jsx
import React from "react";

/**
 * Cart component
 * Props:
 *  - cart: array of items { id, title, price, image, quantity }
 *  - removeFromCart: fn(productId)
 *  - incrementQty: fn(productId)
 *  - decrementQty: fn(productId)
 *  - totalPrice: string or number (formatted)
 */
export default function Cart({
  cart = [],
  removeFromCart = () => {},
  incrementQty = () => {},
  decrementQty = () => {},
  totalPrice = "0.00",
}) {
  return (
    <section className="mt-10 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Cart</h2>

      {cart.length === 0 ? (
        <div className="bg-white shadow rounded-lg p-6">
          <p className="text-gray-600">Your cart is empty 🛒</p>
        </div>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4 bg-white rounded-lg shadow p-4"
            >
              {/* Left: Image + title */}
              <div className="flex items-center gap-4 w-full sm:w-2/3">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 object-contain rounded"
                />
                <div className="min-w-0">
                  <h3 className="font-medium text-gray-800 truncate">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">${item.price}</p>
                </div>
              </div>

              {/* Right: Quantity controls + remove */}
              <div className="flex items-center gap-3 justify-end w-full sm:w-1/3">
                <div className="flex items-center border rounded-md overflow-hidden">
                  <button
                    type="button"
                    aria-label={`Decrease quantity of ${item.title}`}
                    onClick={() => decrementQty(item.id)}
                    className="px-3 py-1 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  >
                    −
                  </button>

                  <div className="px-4 py-1 bg-gray-50 text-sm font-medium">
                    {item.quantity}
                  </div>

                  <button
                    type="button"
                    aria-label={`Increase quantity of ${item.title}`}
                    onClick={() => incrementQty(item.id)}
                    className="px-3 py-1 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  >
                    +
                  </button>
                </div>

                <div className="flex flex-col items-end">
                  <button
                    type="button"
                    onClick={() => removeFromCart(item.id)}
                    className="text-sm text-red-600 hover:underline"
                    aria-label={`Remove ${item.title} from cart`}
                  >
                    Remove
                  </button>
                  <p className="text-sm text-gray-600 mt-1">
                    ${(item.quantity * item.price).toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Footer: total and checkout */}
          <div className="flex flex-col sm:flex-row items-center justify-between bg-white rounded-lg shadow p-4">
            <div>
              <p className="text-gray-600">Total</p>
              <p
                className="text-xl font-semibold text-blue-700"
                aria-live="polite"
              >
                ${totalPrice}
              </p>
            </div>

            <div className="mt-4 sm:mt-0">
              <button
                type="button"
                className="bg-blue-600 text-white px-5 py-2 rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
