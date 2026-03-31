import { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import StatsBar from '../components/StatsBar';
import Footer from '../components/Footer';

function App() {
  const [cart, setCart] = useState([]);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar cartCount={cart.length} />
      <Hero />
      <StatsBar />
      <Footer />
    </div>
  );
}

export default App;
