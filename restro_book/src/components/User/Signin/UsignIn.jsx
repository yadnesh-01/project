import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';  

const UsignIn = () => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the data to the backend
      const response = await axios.post('http://localhost:8081/api/auth/register', formData);
      
      // Handle success response
      if (response.status === 201) {
        alert('Registration successful!');
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
              <div className=" p-4 rounded-t-lg bg-[url('https://cmkt-image-prd.freetls.fastly.net/0.1.0/ps/106396/910/606/m2/fpnw/wm1/keih4mm9pyv3kpq8scymlnub2aecxzs9iscdane82nvbmfcc3leqqh7pjk0adoki-.jpg?1399222056&s=d4d7e3d9d10ef5cb29365912c8c531b2')] bg-opacity-35">
                <h4 className="text-lg font-bold text-center">Registration Form</h4>
              </div>
              <div className="p-6 rounded-b-lg bg-[url('https://img.freepik.com/premium-photo/restaurant-blurred-background-generative-ai_538159-9164.jpg')] bg-center bg-cover ">
                <form onSubmit={handleSubmit}>
                  {/* Your form fields */}
                  <div className="mb-4">
                    <label htmlFor="username" className="block text-base font-bold text-gray-100 ">
                      Name
                    </label>
                    <input
                      type="text"
                      name="username"
                      placeholder='Jhon Harward'
                      required
                      value={formData.username}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="cont" className="block text-base font-bold text-gray-100">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      name="cont"
                      placeholder='935214****'
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      required
                      value={formData.cont}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="uname" className="block text-base font-bold text-gray-100">
                      User-ID
                    </label>
                    <input
                      type="text"
                      name="uname"
                      placeholder='jhon_har01'
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      required
                      value={formData.uname}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="email" className="block text-base font-bold text-gray-100">
                      Email ID
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder='harwardjhon@gmail.com' 
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="upass" className="block text-base font-bold text-gray-100">
                      Password
                    </label>
                    <input
                      type="password"
                      name="upass"
                      placeholder='jhon@0101'
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      required
                      value={formData.upass}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="confirm_password" className="block text-base font-bold text-gray-100">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      name="confirm_password"
                      placeholder='jhon@0101'
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
                <p className="mt-4 text-center text-base text-amber-200 font-bold">
                  Already have an account?{' '}
                  <Link className="text-blue-500 font-semibold hover:text-white" to="../Login">
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

export default UsignIn;
