import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';
import { CartProvider } from './context/CartContext';

const products = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    description: "High-quality wireless headphones with noise cancellation",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 2,
    name: "Smart Watch Pro",
    description: "Advanced smartwatch with health tracking features",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 3,
    name: "Ultra HD Camera",
    description: "Professional-grade camera for stunning photography",
    price: 899.99,
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 4,
    name: "Gaming Console X",
    description: "Next-gen gaming console for immersive gameplay",
    price: 499.99,
    image: "https://images.unsplash.com/photo-1486401899868-0e435ed85128?w=800&auto=format&fit=crop&q=60"
  }
];

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="fixed top-4 left-4 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg hover:shadow-xl transition-all"
        >
          {darkMode ? (
            <Sun className="text-yellow-500" size={24} />
          ) : (
            <Moon className="text-gray-700" size={24} />
          )}
        </button>

        <Cart />

        {/* Hero Section */}
        <div className="relative h-[500px] bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-2xl">
              <h1 className="text-5xl font-bold mb-4">
                Welcome to TechStore
              </h1>
              <p className="text-xl mb-8">
                Discover the latest in technology and gadgets. From premium headphones
                to cutting-edge smartwatches, we've got everything you need.
              </p>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-colors">
                Shop Now
              </button>
            </div>
          </div>
        </div>

        {/* Products Section */}
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </CartProvider>
  );
}

export default App;