import { useState } from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  const [added, setAdded] = useState(false);

  const tagColors = {
    popular: 'bg-purple-50 text-[#7C3AED]',
    new: 'bg-emerald-50 text-emerald-600',
    'best seller': 'bg-amber-50 text-amber-600',
  };

  const handleBuy = () => {
    const success = onAddToCart(product);
    if (success) {
      setAdded(true);
      setTimeout(() => setAdded(false), 2500);
    }
  };

  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-xl hover:border-purple-100 transition-all duration-300 flex flex-col">
      {/* Top */}
      <div className="flex justify-between items-start mb-4">
        <div className="w-11 h-11 bg-purple-50 rounded-xl flex items-center justify-center text-[22px]">
          {product.icon}
        </div>
        <span
          className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
            tagColors[product.tagType] || 'bg-gray-100 text-gray-500'
          }`}
        >
          {product.tag}
        </span>
      </div>

      {/* Name */}
      <h3 className="text-[16px] font-bold text-gray-900 mb-1">
        {product.name}
      </h3>

      {/* Price */}
      <div className="mb-3">
        <span className="text-[24px] font-extrabold text-gray-900">
          ${product.price}
        </span>
        <span className="text-gray-400 text-[13px]">/{product.period}</span>
      </div>

      {/* Description */}
      <p className="text-gray-400 text-[13px] leading-relaxed mb-5 flex-grow">
        {product.description}
      </p>

      {/* Features */}
      <ul className="space-y-2.5 mb-6">
        {product.features.map((f, i) => (
          <li
            key={i}
            className="flex items-center gap-2.5 text-[13px] text-gray-500"
          >
            <span className="w-[18px] h-[18px] bg-purple-50 rounded-full flex items-center justify-center flex-shrink-0">
              <svg
                className="w-[10px] h-[10px] text-[#7C3AED]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            {f}
          </li>
        ))}
      </ul>

      {/* Button */}
      <button
        onClick={handleBuy}
        className={`w-full py-2.5 rounded-xl text-[13px] font-semibold transition-all duration-300 cursor-pointer ${
          added
            ? 'bg-emerald-500 text-white'
            : 'bg-[#7C3AED] hover:bg-[#6D28D9] text-white shadow-sm hover:shadow-md hover:shadow-purple-200'
        }`}
      >
        {added ? '✓ Added to Cart' : 'Buy Now'}
      </button>
    </div>
  );
};

export default ProductCard;
