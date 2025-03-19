import { X, Minus, Plus, ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const [isOpen, setIsOpen] = useState(false);
  const { state, dispatch } = useCart();

  const updateQuantity = (id, quantity) => {
    if (quantity < 1) {
      dispatch({ type: 'REMOVE_FROM_CART', payload: id });
      return;
    }
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const total = state.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-4 right-4 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700"
      >
        <ShoppingCart size={24} />
        {state.items.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
            {state.items.length}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="fixed right-0 top-0 h-full w-96 bg-white dark:bg-gray-800 shadow-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold dark:text-white">Your Cart</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <X size={24} />
              </button>
            </div>

            {state.items.length === 0 ? (
              <p className="text-gray-500 dark:text-gray-400">Your cart is empty</p>
            ) : (
              <>
                <div className="space-y-4">
                  {state.items.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center gap-4 border-b border-gray-200 dark:border-gray-700 pb-4"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold dark:text-white">{item.name}</h3>
                        <p className="text-gray-500 dark:text-gray-400">
                          ${item.price}
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="dark:text-white">{item.quantity}</span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-semibold dark:text-white">Total:</span>
                    <span className="text-lg font-semibold dark:text-white">
                      ${total.toFixed(2)}
                    </span>
                  </div>
                  <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                    Checkout
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}