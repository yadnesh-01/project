// src/components/user/Dashboard/Dashboard.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState('');
  const [contact, setContact] = useState('');
  const Navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Define isAuthenticated here

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userResponse = await axios.get('http://localhost:8081/api/auth/user', { withCredentials: true });
        setUsername(userResponse.data.username);
        setContact(userResponse.data.cont);
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

  const deleteBooking = async (id) => {
    if (window.confirm('Are you sure you want to delete this reservation?')) {
      try {
        const response = await axios.delete(`http://localhost:8081/api/auth/deleteRes/${id}`, { withCredentials: true });
        
        if (response.status === 200) {
          // Filter out the deleted booking from the bookings state
          setBookings(bookings.filter((booking) => booking.id !== id));
          alert(`Reservation with ID ${id} deleted successfully.`);
        } else {
          alert(`Failed to delete the reservation. Please try again.`);
        }
        
      } catch (error) {
        console.error('Error deleting reservation', error);
        alert('Error deleting the reservation. Please check the console for more details.');
      }
    }
  };
  

  const currentDate = new Date();

  if (!isAuthenticated) {
    return<> <Navigate to="/Login" /></>; // Redirect to login if not authenticated
  }

  return (
    <div className="py-5">
      <div className="container mx-auto">
        <div className="bg-[url('https://image.slidesdocs.com/responsive-images/background/purple-dragon-fruit-fruit-abstract-white-food-powerpoint-background_e369d31300__960_540.jpg')] bg-cover bg-center rounded-lg p-5">
          <h3 className="text-2xl font-bold">Welcome, {username}!</h3>
          <p className="text-lg text-gray-600">Contact: {contact}</p>

          {loading ? (
            <p>Loading your bookings...</p>
          ) : bookings.length > 0 ? (
            <>
              <h4 className="text-xl mt-4">Your Upcoming Bookings:</h4>
              <br/>
              <Link
                to="/PreviousBookings"
                className="btn bg-blue-500 text-white px-4 py-2 rounded mb-4"
              >
                View Previous Bookings
              </Link>

              <div className="overflow-x-auto mt-4">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr>
                      <th className="px-4 py-2 border text-center">Booking Id</th>
                      <th className="px-4 py-2 border">Restaurant Name</th>
                      <th className="px-4 py-2 border">Contact</th>
                      <th className="px-4 py-2 border">Address</th>
                      <th className="px-4 py-2 border">Date</th>
                      <th className="px-4 py-2 border">Time</th>
                      <th className="px-4 py-2 border">Table No.</th>
                      <th className="px-4 py-2 border">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookings
                      .filter((booking) => new Date(booking.res_date) >= currentDate) 
                      .map((booking) => (
                        <tr key={booking.id}>
                          <td className="px-4 py-2 border text-center">{booking.id}</td>
                          <td className="px-4 py-2 border text-justify">{booking.rname}</td>
                          <td className="px-4 py-2 border">{booking.rcontact}</td>
                          <td className="px-4 py-2 border text-justify">{booking.radd}</td>
                          <td className="px-4 py-2 border">{new Date(booking.res_date).toLocaleDateString('en-us',{
                            year:'numeric',
                            month:'long',
                            day:'numeric',
                          })}</td>
                          <td className="px-4 py-2 border">{booking.res_time}</td>
                          <td className="px-4 py-2 border text-center">{booking.tab_no}</td>
                          <td className="px-4 py-2 border flex space-x-2">
                            <Link
                              to={`/update_reservation/${booking.id}`}
                              className="btn bg-blue-500 text-white px-4 py-2 rounded"
                            >
                              Update
                            </Link>
                            <button
                              onClick={() => {deleteBooking(booking.id)
                              console.log((booking.id))
                              }}
                              className="btn bg-red-500 text-white px-4 py-2 rounded"
                              
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </>
           ) : ( 
            <p>You have no upcoming bookings.</p>
           )} 
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
