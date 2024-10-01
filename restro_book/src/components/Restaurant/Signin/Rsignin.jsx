// src/componenets/Restaurant/login/Rlogin.jsx

import React, { useState } from 'react';
import {useNavigate ,Link } from 'react-router-dom';
import axios from 'axios';

const Rsignin = () => {
  const [formData, setFormData] = useState({
    rname: '',
    rcontact: '',
    ruid: '',
    radd: '',
    email: '',
    rpass: '',
    confirm_password: '',
  });

  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the data to the backend
      const response = await axios.post('http://localhost:8081/api/auth/restRegister', formData);
      
      // Handle success response
      if (response.status === 201) {
        alert('Restaurant Registration successful!');
        navigate('/Restaurant/Login'); // Redirects to login page
      }
    } catch (error) {
      // Handle error response
      alert(error.response?.data?.error || 'Something went wrong!');
    }
  };

  return (
    <div className="py-5">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="w-full max-w-md">
            <div className="shadow-lg rounded-lg">
            <div className=" p-4 rounded-t-lg bg-[url('https://cmkt-image-prd.freetls.fastly.net/0.1.0/ps/106396/910/606/m2/fpnw/wm1/keih4mm9pyv3kpq8scymlnub2aecxzs9iscdane82nvbmfcc3leqqh7pjk0adoki-.jpg?1399222056&s=d4d7e3d9d10ef5cb29365912c8c531b2')] ">
            <h4 className="text-lg font-bold text-center">Restaurant Registration Form</h4>
              </div>
              <div className="p-6 rounded-b-lg bg-[url('https://cmkt-image-prd.freetls.fastly.net/0.1.0/ps/106396/910/606/m2/fpnw/wm1/keih4mm9pyv3kpq8scymlnub2aecxzs9iscdane82nvbmfcc3leqqh7pjk0adoki-.jpg?1399222056&s=d4d7e3d9d10ef5cb29365912c8c531b2')] bg-cover bg-center">
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="rname" className="block text-base font-bold text-gray-700">
                      Restaurant Name
                    </label>
                    <input
                      type="text"
                      name="rname"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      required
                      value={formData.rname}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="radd" className="block text-base font-bold text-gray-700">
                      Restaurant Address
                    </label>
                    <input
                      type="text"
                      name="radd"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      required
                      value={formData.radd}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="rcontact" className="block text-base font-bold text-gray-700">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      name="rcontact"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      required
                      value={formData.rcontact}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="ruid" className="block text-base font-bold text-gray-700">
                      User-ID
                    </label>
                    <input
                      type="text"
                      name="ruid"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      required
                      value={formData.ruid}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="email" className="block text-base font-bold text-gray-700">
                      Email ID
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="rpass" className="block text-base font-bold text-gray-700">
                      Password
                    </label>
                    <input
                      type="password"
                      name="rpass"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      required
                      value={formData.rpass}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="confirm_password" className="block text-base font-bold text-gray-700">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      name="confirm_password"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      required
                      value={formData.confirm_password}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-4">
                    <button
                      type="submit"
                      className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md font-semibold hover:bg-indigo-500"
                    >
                      Register Now
                    </button>
                  </div>
                </form>
                <p className="mt-4 text-center text-base font-bold text-gray-600">
                  Already have an account?{' '}
                  <Link 
                  className="text-indigo-600 text-base font-bold hover:text-indigo-500"
                  to="../../Restaurant/Login">
                    Login Here
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rsignin;
