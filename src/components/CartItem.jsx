const CartItem = ({ item, onRemove }) => {
  return (
    <div className="flex items-center justify-between py-4 border-b border-gray-100">
      <div className="flex items-center gap-4">
        <span className="text-2xl">{item.icon}</span>
        <div>
          <h4 className="font-semibold text-gray-900">{item.name}</h4>
          <p className="text-sm text-gray-400">
            ${item.price}/{item.period}
          </p>
        </div>
      </div>
      <button
        onClick={() => onRemove(item.id)}
        className="text-red-400 hover:text-red-600 text-xl font-bold transition"
      >
        ✕
      </button>
    </div>
  );
};

export default CartItem;