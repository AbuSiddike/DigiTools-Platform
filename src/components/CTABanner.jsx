const CTABanner = () => {
  return (
    <section className="bg-gradient-to-r from-[#7C3AED] via-[#6D28D9] to-[#7C3AED] py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-extrabold text-white mb-4">
          Ready To Transform Your Workflow?
        </h2>
        <p className="text-white/60 max-w-md mx-auto mb-8 text-[14px]">
          Join thousands of professionals already using DigiTools to supercharge
          their productivity and creativity.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <button className="bg-white text-[#7C3AED] hover:bg-gray-100 text-[13px] font-semibold px-8 py-3 rounded-full transition shadow-xl cursor-pointer">
            Get Started for Free
          </button>
          <button className="border-2 border-white/30 text-white hover:bg-white/10 text-[13px] font-semibold px-8 py-3 rounded-full transition cursor-pointer">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;