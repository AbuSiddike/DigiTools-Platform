const StatsBar = () => {
  return (
    <div className="bg-gradient-to-r from-[#7C3AED] to-[#6C3CE1] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-around items-center gap-4 text-white">
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold">50K+</h3>
            <p className="text-sm text-white/80">Active Users</p>
          </div>
          <div className="hidden md:block w-px h-12 bg-white/30"></div>
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold">200+</h3>
            <p className="text-sm text-white/80">Premium Tools</p>
          </div>
          <div className="hidden md:block w-px h-12 bg-white/30"></div>
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold">4.9</h3>
            <p className="text-sm text-white/80">Rating</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsBar;
