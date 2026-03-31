import { useState } from 'react';
import products from '../data/products.json';
import ProductCard from './ProductCard';
import CartItem from './CartItem';

const Home = ({ cart, onAddToCart, onRemoveFromCart, onCheckout }) => {
  const [activeTab, setActiveTab] = useState('products');

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Premium Digital Tools
        </h2>
      </div>

      <div className="flex justify-center gap-3 mb-10">
        <button
          onClick={() => setActiveTab('products')}
          className={`px-6 py-2.5 rounded-lg font-medium text-sm transition ${
            activeTab === 'products'
              ? 'bg-[#7C3AED] text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Product
        </button>
        <button
          onClick={() => setActiveTab('cart')}
          className={`px-6 py-2.5 rounded-lg font-medium text-sm transition ${
            activeTab === 'cart'
              ? 'bg-[#7C3AED] text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Cart
        </button>
      </div>

      {activeTab === 'products' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      )}

      {activeTab === 'cart' && (
        <div className="max-w-xl mx-auto bg-white border border-gray-200 rounded-xl p-6 md:p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-1">Your Cart</h3>

          {cart.length === 0 ? (
            <div className="text-center py-12">
              <span className="text-5xl block mb-4"><img src="./assets/shopping-cart.png" alt="" /></span>
              <h4 className="text-lg font-semibold text-gray-700 mb-2">
                Your cart is empty
              </h4>
              <p className="text-gray-400 text-sm mb-4">
                Browse our products and add items to your cart.
              </p>
              <button
                onClick={() => setActiveTab('products')}
                className="bg-[#7C3AED] hover:bg-[#6C3CE1] text-white px-6 py-2.5 rounded-lg text-sm font-medium transition"
              >
                Browse Products
              </button>
            </div>
          ) : (
            <>
              <div className="mb-6">
                {cart.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    onRemove={onRemoveFromCart}
                  />
                ))}
              </div>

              <div className="flex justify-between items-center mb-4 pt-2">
                <span className="text-gray-600 font-medium">
                  Total ({cart.length} items)
                </span>
                <span className="text-xl font-bold text-gray-900">
                  ${totalPrice}
                </span>
              </div>

              <button
                onClick={onCheckout}
                className="w-full bg-[#7C3AED] hover:bg-[#6C3CE1] text-white py-3 rounded-lg font-medium transition"
              >
                Proceed to Checkout
              </button>
            </>
          )}
        </div>
      )}
    </section>
  );
};

export default Home;
