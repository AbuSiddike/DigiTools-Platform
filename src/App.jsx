import { useState } from 'react';
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import Navbar from './components/Navbar';
import StatsBar from './components/StatsBar';
import Hero from './components/Hero';
import Home from './components/Home';
// import Steps from "./components/Steps";
// import Pricing from "./components/Pricing";
// import CTABanner from "./components/CTABanner";
import Footer from './components/Footer';

function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);
    if (exists) {
      toast.warning('This product is already in your cart!', {
        position: 'top-right',
        autoClose: 2000,
      });
      return false;
    }
    setCart([...cart, product]);
    toast.success(`${product.name} added to cart!`, {
      position: 'top-right',
      autoClose: 2000,
    });
    return true;
  };

  const handleRemoveFromCart = (productId) => {
    const product = cart.find((item) => item.id === productId);
    setCart(cart.filter((item) => item.id !== productId));
    toast.error(`${product.name} removed from cart!`, {
      position: 'top-right',
      autoClose: 2000,
    });
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      toast.info('Your cart is empty!', {
        position: 'top-right',
        autoClose: 2000,
      });
      return;
    }
    setCart([]);
    toast.success('Checkout successful! Thank you for your purchase! 🎉', {
      position: 'top-center',
      autoClose: 3000,
    });
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
      {/* <Steps /> */}
      {/* <Pricing /> */}
      {/* <CTABanner /> */}
      <Footer />
      {/* <ToastContainer /> */}
    </div>
  );
}

export default App;
