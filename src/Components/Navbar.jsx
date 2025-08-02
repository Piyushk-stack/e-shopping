import React, { useState } from "react";
import logo from "../assets/logo.png";
import profile from "../assets/profile.png";
import cartt from "../assets/cartt.png";
import search from "../assets/search.png";
import { Menu, X } from "lucide-react"; // hamburger icons

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-fuchsia-600 shadow-lg text-white px-4 md:px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Logo & Brand */}
        <div className="flex items-center space-x-2">
          <img src={logo} className="h-12 md:h-16" alt="Logo" />
          <h1 className="font-semibold text-xl md:text-2xl">Darling & Dress</h1>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          {["WOMEN", "MEN", "KIDS", "HOME", "OFFERS", "VMART"].map((item) => (
            <li
              key={item}
              className="hover:text-fuchsia-200 transition duration-300 cursor-pointer"
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
                className="h-6 w-6 object-contain cursor-pointer hover:scale-110 transition"
                alt={item.label}
              />
              <span className="text-xs mt-1">{item.label}</span>
            </div>
          ))}
          <button className="px-3 py-1 rounded bg-fuchsia-500 hover:bg-fuchsia-600 transition hover:scale-105">
            Sign up
          </button>
          <button className="px-3 py-1 rounded bg-white text-fuchsia-600 font-medium hover:bg-fuchsia-100 transition hover:scale-105">
            Login
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-4 text-base font-medium">
          {["WOMEN", "MEN", "KIDS", "HOME", "OFFERS", "VMART"].map((item) => (
            <div key={item} className="hover:text-fuchsia-200 cursor-pointer">
              {item}
            </div>
          ))}

          <div className="flex justify-around mt-4">
            {[{ img: search, label: "Search" }, { img: cartt, label: "Cart" }, { img: profile, label: "Profile" }].map((item) => (
              <div key={item.label} className="flex flex-col items-center">
                <img
                  src={item.img}
                  className="h-5 w-5 object-contain"
                  alt={item.label}
                />
                <span className="text-xs mt-1">{item.label}</span>
              </div>
            ))}
          </div>

          <div className="flex space-x-4 justify-center mt-4">
            <button className="px-3 py-1 rounded bg-fuchsia-500 hover:bg-fuchsia-600 transition hover:scale-105">
              Sign up
            </button>
            <button className="px-3 py-1 rounded bg-white text-fuchsia-600 font-medium hover:bg-fuchsia-100 transition hover:scale-105">
              Login
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
