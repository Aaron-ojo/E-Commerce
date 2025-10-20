const Cart = ({ cart, removeFromCart, incrementQty, decrementQty }) => {
  return (
    <section className="mt-10 max-w-4xl mx-auto px-4">
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
              <div className="flex items-center gap-4 w-full sm:w-2/3">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 object-contain rounded"
                />
                <div>
                  <h3 className="font-medium text-gray-800">{item.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">${item.price}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 justify-end w-full sm:w-1/3">
                <div className="flex items-center border rounded-md overflow-hidden">
                  <button
                    onClick={() => decrementQty(item.id)}
                    className="px-3 py-1 hover:bg-gray-100"
                  >
                    −
                  </button>
                  <div className="px-4 py-1 bg-gray-50 text-sm font-medium">
                    {item.quantity}
                  </div>
                  <button
                    onClick={() => incrementQty(item.id)}
                    className="px-3 py-1 hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>

                <div className="flex flex-col items-end">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-sm text-red-600 hover:underline"
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
        </div>
      )}
    </section>
  );
};

export default Cart;
