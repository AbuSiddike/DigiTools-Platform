import { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import StatsBar from '../components/StatsBar';

function App() {
  const [cart, setCart] = useState([]);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar cartCount={cart.length} />
      <Hero />
      <StatsBar />
    </div>
  );
}

export default App;
