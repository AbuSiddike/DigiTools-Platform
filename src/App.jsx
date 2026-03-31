import { useState } from 'react';
import Navbar from '../components/Navbar';


function App() {
  const [cart, setCart] = useState([]);

  return (
    <div className="bg-gray-100 min-h-screen">

      <Navbar cartCount={cart.length} />

    </div>
  );
}

export default App;
