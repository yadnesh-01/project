// src/components/Restaurant/RDashboard/RDashboard.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const RDashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [rname, setUsername] = useState('');
  const [rcontact, setContact] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userResponse = await axios.get('http://localhost:8081/api/auth/user', { withCredentials: true });
        setUsername(userResponse.data.rname);
        setContact(userResponse.data.rcontact);
        setBookings(userResponse.data.bookings);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data', error);
        setLoading(false);
      }
    };
    
    fetchUserData();
  }, []);

  return (
    <div className="py-5">
      <div className="container mx-auto">
        <div className="bg-white shadow-md rounded-lg p-5">
          <h3 className="text-2xl font-bold">Welcome Restaurant, {rname}!</h3>
          <p className="text-lg text-gray-600">Contact: {rcontact}</p>

          {loading ? (
            <p>Loading your bookings...</p>
          ) : bookings.length > 0 ? (
            <>
              <h4 className="text-xl mt-4">Your Bookings:</h4>
              <Link to="/previous_reservations" className="btn bg-blue-500 text-white px-4 py-2 rounded">
                Previous Bookings
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
                  <tbody>
                    {bookings.map((booking) => {
                      const currentDate = new Date();
                      const bookingDate = new Date(booking.res_date);

                      return (
                        <tr key={booking.id}>
                          <td className="px-4 py-2 border">{booking.id}</td>
                          <td className="px-4 py-2 border">{booking.rname}</td>
                          <td className="px-4 py-2 border">{booking.rcontact}</td>
                          <td className="px-4 py-2 border">{booking.radd}</td>
                          <td className="px-4 py-2 border">{booking.res_date}</td>
                          <td className="px-4 py-2 border">{booking.res_time}</td>
                          <td className="px-4 py-2 border">{booking.tab_no}</td>
                          <td className="px-4 py-2 border flex space-x-2">
                            {bookingDate >= currentDate ? (
                              <>
                                <Link to={`/update_reservation/${booking.id}`} className="btn bg-blue-500 text-white px-4 py-2 rounded">
                                  Update
                                </Link>
                                <button
                                  onClick={() => deleteBooking(booking.id)}
                                  className="btn bg-red-500 text-white px-4 py-2 rounded"
                                >
                                  Delete
                                </button>
                              </>
                            ) : (
                              <p className="text-gray-500">No actions available</p>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </>
          ) : (
            <p>You have no bookings yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default RDashboard;
