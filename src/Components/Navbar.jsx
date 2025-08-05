import React, { useState } from "react";
import logo from "../assets/logo.png";
import profile from "../assets/profile.png";
import cartt from "../assets/cartt.png";
import search from "../assets/search.png";
import { Menu, X } from "lucide-react"; // hamburger icons

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-gradient-to-r from-slate-800 via-gray-900 to-zinc-900 shadow-xl text-gray-100 px-4 md:px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Logo & Brand */}
        <div className="flex items-center space-x-2">
          <img src={logo} className="h-12 md:h-16" alt="Logo" />
          <h1 className="font-semibold text-xl md:text-2xl tracking-wide">Pooja's Clothset</h1>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          {["WOMEN", "MEN", "KIDS", "HOME", "OFFERS", "VMART"].map((item) => (
            <li
              key={item}
              className="hover:text-amber-300 transition duration-300 cursor-pointer uppercase"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Icons & Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          {[{ img: search, label: "Search" }, { img: cartt, label: "Cart" }, { img: profile, label: "Profile" }].map((item) => (
            <div key={item.label} className="flex flex-col items-center">
              <img
                src={item.img}
                className="h-6 w-6 object-contain cursor-pointer hover:scale-110 transition duration-300"
                alt={item.label}
              />
              <span className="text-xs mt-1 text-gray-300">{item.label}</span>
            </div>
          ))}
          <button className="px-4 py-2 rounded-md bg-amber-500 text-gray-900 font-semibold hover:bg-amber-400 transition hover:scale-105 duration-300 shadow-md">
            Sign up
          </button>
          <button className="px-4 py-2 rounded-md bg-gray-700 text-gray-100 font-medium hover:bg-gray-600 transition hover:scale-105 duration-300 shadow-md">
            Login
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-100 hover:text-amber-300 transition duration-300">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-4 text-base font-medium bg-gray-800 p-4 rounded-b-lg shadow-lg">
          {["WOMEN", "MEN", "KIDS", "HOME", "OFFERS", "VMART"].map((item) => (
            <div key={item} className="text-gray-100 hover:text-amber-300 cursor-pointer uppercase py-1">
              {item}
            </div>
          ))}

          <div className="flex justify-around mt-4 border-t border-gray-700 pt-4">
            {[{ img: search, label: "Search" }, { img: cartt, label: "Cart" }, { img: profile, label: "Profile" }].map((item) => (
              <div key={item.label} className="flex flex-col items-center">
                <img
                  src={item.img}
                  className="h-5 w-5 object-contain"
                  alt={item.label}
                />
                <span className="text-xs mt-1 text-gray-300">{item.label}</span>
              </div>
            ))}
          </div>

          <div className="flex space-x-4 justify-center mt-4">
            <button className="px-3 py-1 rounded-md bg-amber-500 text-gray-900 font-semibold hover:bg-amber-400 transition hover:scale-105 duration-300">
              Sign up
            </button>
            <button className="px-3 py-1 rounded-md bg-gray-700 text-gray-100 font-medium hover:bg-gray-600 transition hover:scale-105 duration-300">
              Login
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;