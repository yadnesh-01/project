// src/componenets/user/Login/Ulogin.jsx

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function UlogIn({ setIsAuthenticated }) {
  const [uname, setUname] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    setLoading(true); // Start loading
    setError(''); // Clear any previous errors

    try {
      const response = await fetch('http://localhost:8081/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ uname, password }),
        credentials: 'include', // Include cookies for session
      });

      const data = await response.json();
      if (!response.ok) {
        // If the response is not okay, display the error
        setError(data.error || 'Login failed. Please check your credentials.');
      } else {
        // Successful login
        localStorage.setItem('isAuthenticated', 'true');
        setIsAuthenticated(true); // Update authentication state
        navigate('/Dashboard'); // Redirect to the dashboard
      }
    } catch (err) {
      // Handle any unexpected errors
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="py-5">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="w-full max-w-md">
            <div className="shadow-lg rounded-lg bg-[url('https://i0.wp.com/www.designlike.com/wp-content/uploads/2018/03/restaurant-1948732_1920.jpg')] bg-cover bg-center">
              <div className="bg-[url('https://i0.wp.com/www.designlike.com/wp-content/uploads/2018/03/restaurant-1948732_1920.jpg')] p-4 rounded-t-lg">
                <h2 className="text-lg font-bold text-center text-white">User Login Form</h2>
              </div>

              <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={handleLogin} className="space-y-6">
                  {/* Error message */}
                  {error && <p className="text-red-600 text-center">{error}</p>}

                  <div>
                    <label htmlFor="uname" className="block text-sm font-medium leading-6 text-gray-100">
                      User Id
                    </label>
                    <div className="mt-2">
                      <input
                        id="uname"
                        name="uname"
                        type="text"
                        value={uname}
                        placeholder="john@01"
                        onChange={(e) => setUname(e.target.value)}
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-100 ">
                      Password
                    </label>
                    <div className="mt-2">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        value={password}
                        placeholder="******"
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
                      disabled={loading} // Disable button while loading
                    >
                      {loading ? 'Signing in...' : 'Sign in'}
                    </button>
                  </div>
                </form>

                <p className="mt-10 text-center text-base text-teal-100 py-6">
                  Not a member?{' '}
                  <a href="/Signin" className="font-semibold leading-6 text-indigo-200 hover:text-indigo-400">
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
