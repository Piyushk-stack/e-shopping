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
    { id: 6, name: "Stylish Tote Bag", price: "₹2,899", image: white12 },
    { id: 7, name: "Bright Yellow Kurta", price: "₹1,099", image: yellow },
    { id: 8, name: "Purple Anarkali", price: "₹1,499", image: purple },
    { id: 9, name: "Multi-color Dupatta", price: "₹899", image: multi },
    { id: 10, name: "Purple Saree", price: "₹1,799", image: purple2 },
    { id: 11, name: "Olive Green Dress", price: "₹1,599", image: olive },
    { id: 12, name: "Denim Blue Skirt", price: "₹1,299", image: blue },
    { id: 13, name: "Brown Footwear", price: "₹1,199", image: brown },
    { id: 14, name: "Black Clutch", price: "₹1,499", image: secondl },
    { id: 15, name: "Golden Earrings", price: "₹799", image: last },
    { id: 16, name: "Red Lehenga", price: "₹3,599", image: last2 },
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
    <div className="px-4 sm:px-6 lg:px-12 py-6">
      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {categories.map((category) => (
          <span
            key={category.id}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold px-4 py-2 rounded-full transition duration-200 cursor-pointer"
          >
            {category.name}
          </span>
        ))}
      </div>

      {/* Circle Category Grid */}
      <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-8 xl:grid-cols-11 gap-4 justify-items-center mb-8">
        {circleItems.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={item.image}
              alt={item.name}
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover shadow-md hover:scale-105 transition-transform duration-300"
            />
            <span className="mt-1 text-xs sm:text-sm text-center font-medium">
              {item.name}
            </span>
          </div>
        ))}
      </div>

      {/* Heading */}
      <h2 className="text-xl sm:text-3xl font-bold text-center text-gray-800 mb-8">
        Featured Products
      </h2>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow hover:shadow-xl border border-gray-100 transition-all duration-300 overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-32 sm:h-48 object-cover"
            />
            <div className="p-3 sm:p-4">
              <h3 className="text-sm sm:text-lg font-semibold text-gray-800 truncate">
                {product.name}
              </h3>
              <p className="text-sm font-bold text-gray-900 mt-1">
                {product.price}
              </p>

              {/* Sizes & Actions - Only on md+ */}
              <div className="hidden sm:block mt-4">
                <div className="flex flex-wrap gap-2 mb-3">
                  {sizes.map((size, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs border border-gray-300 rounded-full hover:bg-purple-100 cursor-pointer"
                    >
                      {size}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <button className="bg-purple-600 text-white text-sm px-4 py-2 rounded-full hover:bg-purple-700 transition">
                    View Card
                  </button>
                  <button className="text-gray-400 hover:text-red-500 transition">
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
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
