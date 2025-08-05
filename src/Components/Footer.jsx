import React from "react";
import { Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-slate-800 via-gray-900 to-zinc-900 text-gray-100 pt-6 pb-4 px-6 sm:px-10 shadow-xl">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* Company Info */}
        <div>
          <h2 className="text-xl font-bold mb-3 tracking-wide">Pooja's Clothset</h2>
          <p>Fashion that feels good, looks great, and won't break the bank.</p>
          <p className="text-sm text-gray-400">
            Your fashion destination for stylish and affordable clothing. We bring the latest trends directly to you with quality and comfort.
          </p>
        </div>

        {/* Contact Info & Social Media */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Contact & Follow Us</h2>
          <p className="text-sm text-gray-300">
            📧 Email:{" "}
            <a href="mailto:support@darlingdress.com" className="underline hover:text-amber-300 transition duration-300">
              support@darlingdress.com
            </a>
          </p>
          <p className="text-sm mt-2 text-gray-300">
  💬 Chat:{" "}
  <a href="https://wa.me/918770068460" target="_blank" rel="noopener noreferrer" className="underline hover:text-amber-300 transition duration-300">
    Chat on WhatsApp
  </a>
</p>

          <div className="flex space-x-4 mt-4">
            <a href="https://www.instagram.com/pooja.scloset?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="hover:text-amber-300 transition duration-300">
              <Instagram size={24} />
            </a>
            <a href="wa.me/messege/FAHWENBN2ARSI1" target="_blank" rel="noopener noreferrer" className="hover:text-amber-300 transition duration-300">
              <MessageCircle size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Pooja's Clothset. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;