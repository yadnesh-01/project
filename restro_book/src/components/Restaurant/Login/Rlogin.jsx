import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function UlogIn() {
  const [ruid, setUname] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate


  const handleLogin = async (event) => {
    event.preventDefault();

    const response = await fetch('http://localhost:8081/api/auth/rlogin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ruid, password }),
    });

    const data = await response.json();
    if (!response.ok) {
      alert(data.error); // Show the error message returned from the server
    } else {
      alert("Logged in Successfully!");
      navigate('/Restaurant/RDashboard'); // Redirect to the dashboard
    }
  };
  
  return (
    <div className="py-5">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="w-full max-w-md">
            <div className="shadow-lg rounded-lg">
              <div className="bg-gray-100 p-4 rounded-t-lg">
                <h3 className="text-lg font-bold text-center">Restaurant Login Form</h3>
              </div>

              <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={handleLogin} className="space-y-6">
                  <div>
                    <label htmlFor="ruid" className="block text-sm font-medium leading-6 text-gray-900">
                      User Id
                    </label>
                    <div className="mt-2">
                      <input
                        id="ruid"
                        name="ruid"
                        type="text"
                        value={ruid} // Ensure controlled input
                        onChange={(e) => setUname(e.target.value)} // Update state on change
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                      Password
                    </label>
                    <div className="mt-2">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        value={password} // Ensure controlled input
                        onChange={(e) => setPassword(e.target.value)} // Update state on change
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

                <p className="mt-10 text-center text-sm text-gray-500">
                  Not a member?{' '}
                  <a href="/Restaurant/Sigin" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
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
