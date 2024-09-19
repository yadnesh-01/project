import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Rsignin = () => {
  const [formData, setFormData] = useState({
    username: '',
    cont: '',
    uname: '',
    email: '',
    upass: '',
    confirm_password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form validation and submission logic here
    console.log(formData);
  };

  return (
    <div className="py-5">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="w-full max-w-md">
            <div className="shadow-lg rounded-lg">
              <div className="bg-gray-100 p-4 rounded-t-lg">
                <h4 className="text-lg font-bold text-center">Restaurant Registration Form</h4>
              </div>
              <div className="p-6 bg-white rounded-b-lg">
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                      Restaurant Name
                    </label>
                    <input
                      type="text"
                      name="username"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      required
                      value={formData.username}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="cont" className="block text-sm font-medium text-gray-700">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      name="cont"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      required
                      value={formData.cont}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="uname" className="block text-sm font-medium text-gray-700">
                      User-ID
                    </label>
                    <input
                      type="text"
                      name="uname"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      required
                      value={formData.uname}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
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
                    <label htmlFor="upass" className="block text-sm font-medium text-gray-700">
                      Password
                    </label>
                    <input
                      type="password"
                      name="upass"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      required
                      value={formData.upass}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="confirm_password" className="block text-sm font-medium text-gray-700">
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
                <p className="mt-4 text-center text-sm text-gray-600">
                  Already have an account?{' '}
                  <Link 
                  className="text-indigo-600 font-semibold hover:text-indigo-500"
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