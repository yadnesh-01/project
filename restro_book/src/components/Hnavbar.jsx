// src/components/Hnavbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Hnavbar = () => {
  return (
    <div className="w-full bg-gray-100 shadow-md">
      <div className="container mx-auto">
        <nav className="flex items-center justify-between p-4">
          <a className="text-xl font-bold text-gray-800" href="/">
            Restaurant Booking
          </a>

          <div className="flex space-x-4">
            <Link
              className="text-gray-800 hover:text-gray-600 transition-colors"
              to="/Login"
            >
              Customer Log in
            </Link>

            {/* <Link
              className="text-gray-800 hover:text-gray-600 transition-colors"
              to="/register"
            >
              Restaurant Sign Up
            </Link> */}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Hnavbar;
