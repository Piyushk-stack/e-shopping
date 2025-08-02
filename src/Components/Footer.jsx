import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-600 to-pink-500 text-white pt-10 pb-6 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Darling & Dress</h2>
          <p className="text-sm opacity-90">
            Your fashion destination for stylish and affordable clothing. We bring the latest trends directly to you with quality and comfort.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <p className="text-sm">
            📧 Email:{" "}
            <a href="mailto:support@darlingdress.com" className="underline hover:text-gray-200">
              support@darlingdress.com
            </a>
          </p>
          <p className="text-sm mt-2">
            📞 Phone:{" "}
            <a href="tel:+918765432100" className="underline hover:text-gray-200">
              +91 87654 32100
            </a>
          </p>
        </div>

        {/* Message Box */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Leave a Message</h2>
          <form className="flex flex-col space-y-3">
            <textarea
              rows="4"
              className="p-3 rounded text-black resize-none"
              placeholder="Write your message..."
            />
            <button
              type="submit"
              className="self-start bg-white text-purple-600 font-semibold px-4 py-2 rounded hover:bg-purple-100 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white mt-10 pt-4 text-center text-sm text-white/80">
        © {new Date().getFullYear()} Darling & Dress. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
