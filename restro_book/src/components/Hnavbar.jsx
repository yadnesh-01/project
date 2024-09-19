// src/components/Hnavbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Hnavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full bg-gray-100 shadow-md">
      <div className="container mx-auto">
        <nav className="flex items-center justify-between p-4">
          {/* Logo */}
          <a className="text-xl font-bold text-gray-800" href="/">
            Restaurant Booking
          </a>

          {/* Hamburger Menu Button for Small Screens */}
          <button
            className="block md:hidden text-gray-800 hover:text-gray-600 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
              ></path>
            </svg>
          </button>

          {/* Links - Hidden on Small Screens */}
          <div className={`flex-col md:flex-row flex md:flex items-center space-x-4 md:space-x-4 ${isOpen ? 'block' : 'hidden'} md:block`}>
            <Link
              className="text-gray-800 hover:text-gray-600 transition-colors"
              to="/Login"
            >
              Customer LogIn
            </Link>

            <Link
              className="text-gray-800 hover:text-gray-600 transition-colors"
              to="/Restaurant/Login"
            >
              Restaurant LogIn
            </Link>

            <Link
              className="text-gray-800 hover:text-gray-600 transition-colors"
              to="/BookingForm"
            >
              Book Now
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Hnavbar;
