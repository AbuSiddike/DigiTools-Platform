import { useState } from "react";

const ProductCard = ({ product, onAddToCart }) => {
  const [added, setAdded] = useState(false);

  const getTagColor = (tagType) => {
    switch (tagType) {
      case "popular":
        return "bg-purple-100 text-purple-700";
      case "new":
        return "bg-green-100 text-green-700";
      case "best seller":
        return "bg-orange-100 text-orange-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const handleBuyNow = () => {
    const success = onAddToCart(product);
    if (success) {
      setAdded(true);
      setTimeout(() => setAdded(false), 2000);
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col">

      <div className="flex justify-between items-start mb-3">
        <span className="text-3xl">{product.icon}</span>
        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${getTagColor(product.tagType)}`}>
          {product.tag}
        </span>
      </div>

      
      <h3 className="text-lg font-bold text-gray-900">{product.name}</h3>

      
      <div className="mt-2 mb-3">
        <span className="text-2xl font-bold text-gray-900">${product.price}</span>
        <span className="text-gray-400 text-sm">/{product.period}</span>
      </div>

      
      <p className="text-gray-500 text-sm mb-4 flex-grow">{product.description}</p>

      
      <ul className="space-y-2 mb-6">
        {product.features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
            <svg className="w-4 h-4 text-[#7C3AED] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      
      <button
        onClick={handleBuyNow}
        className={`w-full py-3 rounded-lg font-medium transition ${
          added
            ? "bg-green-500 text-white"
            : "bg-[#7C3AED] hover:bg-[#6C3CE1] text-white"
        }`}
      >
        {added ? "✓ Added to Cart" : "Buy Now"}
      </button>
    </div>
  );
};

export default ProductCard;