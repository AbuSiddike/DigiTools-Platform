const Banner = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div className="flex-1 text-center md:text-left">
          <p>New: AI-Powered Tools Available</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Supercharge Your <br />
            <span className="text-[#7C3AED]">Digital Workflow</span>
          </h1>
          <p className="mt-4 text-gray-500 text-base md:text-lg max-w-lg">
            Access premium AI tools, design assets, templates, and productivity
            software-all in one place. Start creating faster today. Explore
            Products
          </p>
          <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start">
            <button className="bg-[#7C3AED] hover:bg-[#6C3CE1] text-white px-6 py-3 rounded-3xl font-medium transition">
              Explore Products
            </button>
            <button className="border-2 border-[#7C3AED] text-[#7C3AED] hover:bg-[#7C3AED] hover:text-white px-6 py-3 rounded-3xl font-medium transition">
              Watch Demo
            </button>
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <img
            src="../src/assets/banner.png"
            alt="Digital Workflow"
            className="w-full max-w-md rounded-xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
