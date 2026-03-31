import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const links = {
    Product: ["Features", "Pricing", "Integrations", "Updates"],
    Company: ["About Us", "Careers", "Blog", "Press"],
    Resources: ["Help Center", "Documentation", "Community", "Tutorials"],
    "Social Links": [],
  };

  const socialIcons = [FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn];

  return (
    <footer className="bg-[#111827] text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <h3 className="text-[20px] font-extrabold text-white mb-3">
              DigiTools
            </h3>
            <p className="text-[13px] text-gray-500 max-w-[280px] leading-relaxed">
              Your one-stop marketplace for premium digital tools, templates,
              and resources to power your creative workflow.
            </p>
            <div className="flex gap-3 mt-5">
              {socialIcons.map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 bg-gray-800 hover:bg-[#7C3AED] rounded-full flex items-center justify-center transition-colors duration-300 group"
                >
                  <Icon className="text-[13px] text-gray-500 group-hover:text-white transition" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(links)
            .filter(([, items]) => items.length > 0)
            .map(([title, items]) => (
              <div key={title}>
                <h4 className="text-white text-[12px] font-semibold uppercase tracking-widest mb-4">
                  {title}
                </h4>
                <ul className="space-y-2.5">
                  {items.map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-[13px] text-gray-500 hover:text-white transition"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-[12px] text-gray-600">
          <p>© 2025 DigiTools. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;