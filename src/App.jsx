import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import StatsBar from './components/StatsBar';
import Hero from './components/Hero';
import Home from './components/Home';
import Steps from './components/Steps';
import CardPricing from './components/CardPricing';
import CTABanner from './components/CTABanner';
import Footer from './components/Footer';

function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    const exists = cart.some((item) => item.id === product.id);

    if (exists) {
      toast.warning('This product is already in your cart!');
      return false;
    }

    setCart((prev) => [...prev, product]);
    toast.success(`${product.name} added to cart!`);
    return true;
  };

  const handleRemoveFromCart = (productId) => {
    const product = cart.find((item) => item.id === productId);

    if (!product) return;

    setCart((prev) => prev.filter((item) => item.id !== productId));
    toast.error(`${product.name} removed from cart!`);
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      toast.info('Your cart is empty!');
      return;
    }

    setCart([]);
    toast.success('Checkout successful! Thank you for your purchase!');
  };

  return (
    <div className="font-sans bg-white">
      <Navbar cartCount={cart.length} />
      <Hero />
      <StatsBar />
      <Home
        cart={cart}
        onAddToCart={handleAddToCart}
        onRemoveFromCart={handleRemoveFromCart}
        onCheckout={handleCheckout}
      />
      <Steps />
      <CardPricing />
      <CTABanner />
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
      />
    </div>
  );
}

export default App;
