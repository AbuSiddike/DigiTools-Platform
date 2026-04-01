import { FiPlayCircle } from 'react-icons/fi';
import banner from '../assets/banner.png';

const Banner = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
        <div className="flex-1 text-center md:text-left space-y-6">
          <div
            className="
              inline-flex items-center gap-2 px-3 py-1
              bg-[#4f38f6]/10 text-[#4f38f6]
              font-bold uppercase tracking-widest text-xs
              rounded-full transition-all hover:bg-[#4f38f6]/20
            "
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4f38f6] opacity-75"></span>
              <span className="relative inline-flex h-full w-full rounded-full bg-[#7922f8]"></span>
            </span>
            New: AI-Powered Tools Available
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
            Supercharge Your{' '}
            <span className="block bg-gradient-to-r from-[#4f38f6] via-[#7922f8] to-[#9315fa] bg-clip-text text-transparent">
              Digital Workflow
            </span>
          </h1>

          <p className="text-gray-600 text-lg md:text-xl max-w-xl mx-auto md:mx-0 leading-relaxed">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-6">
            <button
              className="
                text-white px-6 py-3 text-sm font-bold uppercase tracking-widest
                rounded-full
                bg-[linear-gradient(to_right,#4f38f6,#7922f8,#9315fa)]
                bg-[length:200%_auto] bg-left
                transition-all duration-500

                hover:bg-right hover:scale-105 active:scale-95
                shadow-lg hover:shadow-[#7922f8]/40
              "
            >
              Explore Products
            </button>

            <button
              className="
                group flex items-center justify-center gap-2
                px-6 py-3 text-sm font-bold uppercase tracking-widest
                rounded-full bg-white transition-all duration-500

                border-2 border-transparent
                [background-image:linear-gradient(white,white),linear-gradient(to_right,#4f38f6,#7922f8,#9315fa)]
                [background-origin:border-box]
                [background-clip:padding-box,border-box]

                hover:bg-[linear-gradient(to_right,#4f38f6,#7922f8,#9315fa)]
                hover:bg-[length:200%_auto] hover:bg-right
                hover:scale-105 active:scale-95
                shadow-md hover:shadow-[#7922f8]/40
              "
            >
              <FiPlayCircle className="text-lg text-[#7922f8] group-hover:text-white transition-colors duration-500" />
              <span className="bg-gradient-to-r from-[#4f38f6] via-[#7922f8] to-[#9315fa] bg-clip-text text-transparent group-hover:text-white transition-all duration-500">
                Watch Demo
              </span>
            </button>
          </div>
        </div>

        <div className="flex-1 flex justify-center relative group">
          <div className="absolute inset-0 bg-purple-500/20 blur-3xl opacity-30 group-hover:opacity-50 transition duration-500"></div>

          <div className="relative max-w-md">
            <img
              src={banner}
              alt="Digital Workflow Dashboard"
              className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
