import { FaShoppingCart } from 'react-icons/fa';

const Navbar = ({ cartCount }) => {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a className="text-2xl font-bold text-[#7C3AED]">DigiTools</a>

          <div className="hidden md:flex items-center gap-6">
            <a
              href="#"
              className="text-gray-600 hover:text-[#7C3AED] font-medium text-sm"
            >
              Products
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-[#7C3AED] font-medium text-sm"
            >
              Features
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-[#7C3AED] font-medium text-sm"
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-[#7C3AED] font-medium text-sm"
            >
              Testimonials
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-[#7C3AED] font-medium text-sm"
            >
              FAQ
            </a>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative cursor-pointer">
              <FaShoppingCart className="text-xl text-gray-600" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#7C3AED] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </div>

            <button className="bg-[#7C3AED] hover:bg-[#6C3CE1] text-white px-5 py-2 rounded-3xl text-sm font-medium transition">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
