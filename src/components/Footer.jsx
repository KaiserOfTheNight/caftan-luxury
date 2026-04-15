import React from "react";

function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/10 py-12 px-6 md:px-16">
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Brand */}
        <div>
          <img src="/images/logo.png" alt="logo" className="h-10 mb-4" />
          <p className="text-gray-400 text-sm leading-relaxed">
            Luxury Moroccan caftans crafted with passion, tradition, and elegance.
            We bring timeless beauty to every special moment.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-yellow-400">
            Quick Links
          </h3>

          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Services</li>
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-yellow-400">
            Contact
          </h3>

          <p className="text-gray-400 text-sm mb-2">
            📍 Marrakech, Morocco
          </p>
          <p className="text-gray-400 text-sm mb-2">
            📞 +212 600 000 000
          </p>
          <p className="text-gray-400 text-sm">
            ✉️ contact@caftanluxury.com
          </p>
        </div>

      </div>

      {/* Bottom line */}
      <div className="mt-10 border-t border-white/10 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Caftan Luxury. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;