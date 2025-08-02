import React from "react";
import kurta from "../assets/kurta.avif";
import tops from "../assets/tops.jpeg";
import dresses from "../assets/dresses.avif";
import sare from "../assets/sare.jpeg";
import suits from "../assets/suits.webp";
import ethnic from "../assets/ethnic.webp";
import bott from "../assets/bott.jpeg";
import bags from "../assets/bags.jpeg";
import footwear from "../assets/footwear.jpeg";
import addons from "../assets/addons.jpeg";
import winter from "../assets/winter.jpeg";
import red1 from "../assets/red1.jpeg";
import red12 from "../assets/red12.jpeg";
import red13 from "../assets/red13.jpeg";
import white1 from "../assets/white1.jpeg";
import white2 from "../assets/white2.jpeg";
import white12 from "../assets/white12.jpeg";
import yellow from "../assets/yellow.jpeg";
import purple from "../assets/purple.jpeg";
import purple2 from "../assets/purple2.jpeg";
import olive from "../assets/olive.jpeg";
import multi from "../assets/multi.jpeg";
import blue from "../assets/blue.jpeg";
import brown from "../assets/brown.jpeg";
import secondl from "../assets/secondl.webp";
import last from "../assets/last.webp";
import last2 from "../assets/last2.jpeg";

const Hero = () => {
  const products = [
    { id: 1, name: "Floral Summer Dress", price: "₹1,299", image: red1 },
    { id: 2, name: "Striped T-Shirt", price: "₹799", image: red12 },
    { id: 3, name: "Classic Denim Jacket", price: "₹2,500", image: red13 },
    { id: 4, name: "Casual Sneakers", price: "₹999", image: white1 },
    { id: 5, name: "Leather Handbag", price: "₹3,150", image: white2 },
    { id: 6, name: "Leather Handbag", price: "₹3,150", image: white12 },
    { id: 7, name: "Leather Handbag", price: "₹3,150", image: yellow },
    { id: 8, name: "Leather Handbag", price: "₹3,150", image: purple },
    { id: 9, name: "Leather Handbag", price: "₹3,150", image: multi },
    { id: 10, name: "Leather Handbag", price: "₹3,150", image: purple2 },
    { id: 11, name: "Leather Handbag", price: "₹3,150", image: olive },
    { id: 12, name: "Leather Handbag", price: "₹3,150", image: blue },
    { id: 13, name: "Leather Handbag", price: "₹3,150", image: brown },
    { id: 14, name: "Leather Handbag", price: "₹3,150", image: secondl },
    { id: 15, name: "Leather Handbag", price: "₹3,150", image: last },
    { id: 16, name: "Leather Handbag", price: "₹3,150", image: last2 },
  ];

  const categories = [
    { id: "men", name: "Men" },
    { id: "women", name: "Women" },
    { id: "kids", name: "Kids" },
  ];

  const circleItems = [
    { name: "KURTAS", image: kurta },
    { name: "TOPS", image: tops },
    { name: "DRESSES", image: dresses },
    { name: "SARE", image: sare },
    { name: "SUITS", image: suits },
    { name: "ETHNIC", image: ethnic },
    { name: "BOTTOMS", image: bott },
    { name: "BAGS", image: bags },
    { name: "FOOTWEAR", image: footwear },
    { name: "ADD ONS", image: addons },
    { name: "WINTER", image: winter },
  ];

  const sizes = ["S", "M", "L", "XL", "XXL"];

  return (
    <div className="px-4 sm:px-6 lg:px-12">
      {/* Category Links */}
      <div className="flex flex-wrap justify-center gap-4 mt-4 mb-8">
        {categories.map((category) => (
          <span
            key={category.id}
            className="rounded px-4 py-2 bg-gray-200 text-gray-800 font-semibold hover:bg-gray-300 transition duration-200 cursor-pointer"
          >
            {category.name}
          </span>
        ))}
      </div>

      {/* Circular Category Icons */}
      <div className="flex flex-wrap justify-center gap-6 mb-12">
        {circleItems.map((item, index) => (
          <div key={index} className="flex flex-col items-center w-20 sm:w-24">
            <img
              src={item.image}
              alt={item.name}
              className="h-16 w-16 sm:h-20 sm:w-20 rounded-full object-cover shadow-md hover:scale-105 transition duration-300"
            />
            <span className="mt-2 text-xs sm:text-sm font-medium text-center">
              {item.name}
            </span>
          </div>
        ))}
      </div>

      {/* Featured Products */}
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-gray-800">
        Featured Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-10">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-xl rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-56 sm:h-64 object-cover"
            />
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-base sm:text-lg font-semibold text-gray-800">
                  {product.name}
                </span>
                <button className="text-gray-400 hover:text-red-500 transition duration-200 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </button>
              </div>

              {/* Sizes */}
              <div className="flex flex-wrap gap-2 mt-2">
                {sizes.map((size, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 text-xs border border-gray-300 rounded hover:bg-purple-100 cursor-pointer"
                  >
                    {size}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center mt-4">
                <span className="text-xl font-bold text-gray-900">
                  {product.price}
                </span>
                <button className="bg-purple-500 text-white text-sm px-4 py-2 rounded-lg hover:bg-purple-600 transition duration-300">
                  View Card
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
