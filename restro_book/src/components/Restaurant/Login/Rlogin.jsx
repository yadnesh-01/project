// src/componenets/Restaurant/Login/Rlogin.jsx

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function UlogIn({ setIsAuthenticated }) {
  const [ruid, setUname] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    const response = await fetch('http://localhost:8081/api/auth/rlogin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ruid, password }),
      credentials: 'include', // Include cookies for session
    });

    const data = await response.json();
    if (!response.ok) {
      alert(data.error); // Show the error message returned from the server
    } else {
      localStorage.setItem('isAuthenticated', true);
      setIsAuthenticated(true); // Update authentication state
      navigate('/Restaurant/RDashboard'); // Redirect to the dashboard
    }
  };
  
  return (
    <div className="py-5">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="w-full max-w-md">
            <div className="shadow-lg rounded-lg bg-[url('https://media.istockphoto.com/id/1428737062/photo/empty-wooden-table-top-with-lights-bokeh-on-blur-restaurant-background.jpg?s=170667a&w=0&k=20&c=a9yid1VyeUHUsZ3vgR4bNUU9IK0n3wflK1XuKiQPtyw=')] bg-cover bg-center">
              <div className="bg-[url('https://i0.wp.com/www.designlike.com/wp-content/uploads/2018/03/restaurant-1948732_1920.jpg')]  p-4 rounded-t-lg">
                <h3 className="text-lg  font-bold text-center text-white">Restaurant Login Form</h3>
              </div>

              <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={handleLogin} className="space-y-6">
                  <div>
                    <label htmlFor="ruid" className="block text-sm font-medium leading-6 text-gray-100">
                      User Id
                    </label>
                    <div className="mt-2">
                      <input
                        id="ruid"
                        name="ruid"
                        type="text"
                        value={ruid} 
                        placeholder='hotel@admin'
                        onChange={(e) => setUname(e.target.value)} 
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-100">
                      Password
                    </label>
                    <div className="mt-2">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        value={password} 
                        placeholder='*******'
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit" 
                      className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Sign in
                    </button>
                  </div>
                </form>

                <p className="mt-10 text-center text-base font-bold text-teal-100 pb-8">
                  Not a member?{' '}
                  <a href="/Restaurant/Sigin" className="font-semibold leading-6 text-white hover:text-indigo-200">
                    Create New Account
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
