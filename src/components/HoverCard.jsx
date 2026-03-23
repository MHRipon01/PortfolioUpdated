// HoverCard.jsx
import React from "react";
import { FaUserCircle } from "react-icons/fa";

const HoverCard = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative w-72 h-48 group">
        {/* Slide 1: Icon */}
        <div className="absolute inset-0 bg-blue-600 flex items-center justify-center transform translate-y-24 transition-transform duration-700 group-hover:translate-y-0 z-10">
          <FaUserCircle className="text-white text-6xl" />
        </div>

        {/* Slide 2: Content */}
        <div className="absolute inset-0 bg-white p-5 shadow-2xl flex flex-col items-center justify-center transform -translate-y-24 transition-transform duration-800 group-hover:translate-y-0">
          <h3 className="text-gray-700 text-xl mb-2 text-center">Hello there!</h3>
          <p className="text-gray-700 text-center">Trust yourself and keep going.</p>
          <span className="absolute bottom-4 left-1/2 w-8 h-1 bg-blue-600 transform -translate-x-1/2"></span>
        </div>
      </div>
    </div>
  );
};

export default HoverCard;