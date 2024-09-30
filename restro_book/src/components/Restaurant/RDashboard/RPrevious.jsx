import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const RPrevious = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [rname, setUsername] = useState('');
  const [rcontact, setContact] = useState('');
  const [setIsAuthenticated] = useState(false); // Define isAuthenticated here

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userResponse = await axios.get('http://localhost:8081/api/auth/restro', { withCredentials: true });
        setUsername(userResponse.data.rname);
        setContact(userResponse.data.rcontact);
        setBookings(userResponse.data.bookings);
        setLoading(false);
        setIsAuthenticated(true); // Set isAuthenticated to true
      } catch (error) {
        console.error('Error fetching data', error);
        setLoading(false);
      }
    };
    
    fetchUserData();
  }, []);

  const currentDate = new Date();

  // Filter out only past bookings
  const pastBookings = bookings.filter((booking) => new Date(booking.res_date) < currentDate);

  return (
    <div className="py-5">
      <div className="container mx-auto">
      <div className="bg-[url('https://wallpapers.com/images/hd/healthy-food-background-k4nsqgrjnoi1fuhk.jpg')] bg-cover bg-center rounded-lg p-5">
          <h3 className="text-2xl font-bold">Welcome, {rname}!</h3>
          <p className="text-lg text-gray-600">Contact: {rcontact}</p>

          {loading ? (
            <p>Loading your previous bookings...</p>
          ) : pastBookings.length > 0 ? (
            <>
              <h4 className="text-xl mt-4">Your Previous Bookings:</h4>
              <br/>
              <Link
                to="/Restaurant/RDashboard"
                className="btn bg-blue-500 text-white px-4 py-2 rounded mb-4"
              >
                View Current Bookings
              </Link>

              <div className="overflow-x-auto mt-4">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr>
                      <th className="px-4 py-2 border">Booking Id</th>
                      <th className="px-4 py-2 border">Customer Name</th>
                      <th className="px-4 py-2 border">Contact</th>
                      <th className="px-4 py-2 border">Date</th>
                      <th className="px-4 py-2 border">Time</th>
                      <th className="px-4 py-2 border">Table No.</th>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    {pastBookings.map((booking) => (
                      <tr key={booking.id}>
                        <td className="px-4 py-2 border">{booking.id}</td>
                        <td className="px-4 py-2 border ">{booking.username}</td>
                        <td className="px-4 py-2 border">{booking.cont}</td>
                        <td className="px-4 py-2 border"> {new Date(booking.res_date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                          </td>
                        <td className="px-4 py-2 border">{booking.res_time}</td>
                        <td className="px-4 py-2 border">{booking.tab_no}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          ) : (
            <p>You have no previous bookings.</p>
          )} 
        </div>
      </div>
    </div>
  );
};

export default RPrevious;
