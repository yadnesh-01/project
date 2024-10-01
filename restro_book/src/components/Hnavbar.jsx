import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Hnavbar = ({ isAuthenticated, userType, handleLogout, setUserType }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full bg-gray-100 shadow-md bg-[url('https://www.fodors.com/wp-content/uploads/2019/04/TraditionalfoodsinJava__HERO_shutterstock_1161085942.jpg')] bg-center bg-cover">
      <div className="container mx-auto">
        <nav className="flex items-center justify-between p-4">
          {/* Logo */}
          <Link
            className="text-gray-100 hover:text-gray-200 transition-colors text-2xl font-bold"
            to="/"
          >
            Restaurant Booking
          </Link>

          {/* Hamburger Menu Button for Small Screens */}
          <button
            className="block md:hidden text-gray-700 hover:text-gray-700 focus:outline-none"
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

          {/* Links */}
          <div
            className={`flex-col md:flex-row flex md:flex items-center space-x-4 md:space-x-4 ${
              isOpen ? 'block' : 'hidden'
            } md:block`}
          >
            {!isAuthenticated ? (
              <>
                {/* Links for unauthenticated users */}
                <Link
                  className="text-pink-700 hover:text-gray-600  bg-gray-200 hover:bg-white bg-opacity-80 transition-colors font-bold"
                  onClick={() => setUserType('customer')}
                  to="/Login"
                >
                  Customer LogIn
                </Link>

                <Link
                  className="text-pink-700 hover:text-gray-600 bg-gray-200 hover:bg-white bg-opacity-80  transition-colors font-bold"
                  onClick={() => setUserType('restaurant')}
                  to="/Restaurant/Login"
                >
                  Restaurant LogIn
                </Link>
              </>
            ) : userType === 'customer' ? (
              <>
                {/* Links for authenticated customers */}
                <Link
                  className="text-pink-700 hover:text-gray-600 bg-gray-200 hover:bg-white bg-opacity-80 transition-colors font-bold"
                  to="/BookingForm"
                >
                  Book Now
                </Link>
                <Link
                  className="text-pink-700 hover:text-gray-600 bg-gray-200 hover:bg-white bg-opacity-80 transition-colors font-bold"
                  to="/Dashboard"
                >
                  Dashboard
                </Link>
                <Link
                  className="text-pink-700 hover:text-gray-600  bg-gray-200 hover:bg-white bg-opacity-80 transition-colors font-bold"
                  onClick={handleLogout}
                >
                  Logout
                </Link>
              </>
            ) : (
              <>
                {/* Links for authenticated restaurants */}
                <Link
                  className="text-pink-700 hover:text-gray-600 bg-gray-200 hover:bg-white bg-opacity-80 transition-colors font-bold"
                  to="/Restaurant/RDashboard"
                >
                  Restaurant Dashboard
                </Link>
                <Link
                  className="text-pink-700 hover:text-gray-600 bg-gray-200 hover:bg-white bg-opacity-80 transition-colors font-bold"
                  onClick={handleLogout}
                >
                  Logout
                </Link>
              </>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Hnavbar;