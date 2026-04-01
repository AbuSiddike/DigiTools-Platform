import { useState } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoCloseSharp } from 'react-icons/io5';

const navItems = [
  { id: 1, name: 'Products', url: '#' },
  { id: 2, name: 'Features', url: '#' },
  { id: 3, name: 'Pricing', url: '#' },
  { id: 4, name: 'Testimonials', url: '#' },
  { id: 5, name: 'FAQ', url: '#' },
];

const Navbar = ({ cartCount }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3">
            <button
              className="md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <IoCloseSharp className="text-2xl" />
              ) : (
                <GiHamburgerMenu className="text-2xl" />
              )}
            </button>

            <h1 className="text-2xl font-bold bg-gradient-to-r from-[#4f38f6] via-[#7922f8] to-[#9315fa] bg-clip-text text-transparent">
              DigiTools
            </h1>
          </div>

          <ul className="hidden md:flex items-center gap-4">
            {navItems.map((nav) => (
              <li key={nav.id} className="list-none group">
                <a
                  href={nav.url}
                  className="relative px-3 py-2 text-gray-700 font-semibold text-sm uppercase tracking-wide transition-all duration-300 hover:text-[#7C3AED]
                  after:content-[''] after:absolute after:left-0 after:-bottom-1
                  after:w-full after:h-[3px]
                  after:bg-gradient-to-r from-[#4f38f6] via-[#7922f8] to-[#9315fa]
                  after:scale-x-0 after:origin-left
                  after:transition-transform after:duration-500
                  group-hover:after:scale-x-100"
                >
                  {nav.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <div className="relative cursor-pointer group">
              <FiShoppingCart className="text-xl text-gray-600 transition-transform duration-300 group-hover:scale-110" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full animate-bounce">
                  {cartCount}
                </span>
              )}
            </div>

            <button className="hidden md:block">Login</button>

            <button className="hidden md:block text-white px-5 py-2 text-sm font-semibold rounded-full bg-[linear-gradient(to_right,#4f38f6,#7922f8,#9315fa)] bg-[length:200%_auto] bg-left transition-all duration-500 hover:bg-right hover:scale-105 active:scale-95 shadow-md hover:shadow-[#7922f8]/40">
              Get Started
            </button>
          </div>
        </div>

        <div
          className={`md:hidden absolute left-0 w-full bg-white transition-all duration-300 z-40 ${
            menuOpen
              ? 'top-16 opacity-100'
              : 'top-14 opacity-0 pointer-events-none'
          }`}
        >
          <ul className="flex flex-col py-3">
            {navItems.map((nav) => (
              <li key={nav.id}>
                <a
                  href={nav.url}
                  onClick={() => setMenuOpen(false)}
                  className="
            block px-5 py-3 
            text-gray-700 text-sm font-semibold uppercase tracking-wide
            hover:text-[#7C3AED]
            transition-colors duration-300
          "
                >
                  {nav.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
