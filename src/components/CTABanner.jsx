const CTABanner = () => {
  return (
    <section className="bg-gradient-to-r from-[#7C3AED] to-[#6C3CE1] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
          Ready To Transform Your Workflow?
        </h2>
        <p className="text-white/80 max-w-lg mx-auto mb-8">
          Join thousands of professionals who are already using DigiTools 
          to supercharge their productivity.
        </p>
        <button className="bg-white text-[#7C3AED] hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition">
          Get Started for Free
        </button>
      </div>
    </section>
  );
};

export default CTABanner;