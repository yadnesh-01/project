import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    rname: '',
    date: '',
    time: '',
    tab_no: 0,
  });
  const [isAuthenticated, setIsAuthenticated] = useState(false); // For authentication check
  const [loading, setLoading] = useState(true); // Loading state
  const [uname, setUsername] = useState(''); // For session username
  const [cont, setContact] = useState(''); // For session contact
  const navigate = useNavigate(); // For navigation

  // Fetch session data (username and contact) on mount
  useEffect(() => {
    const fetchSessionData = async () => {
      try {
        const response = await axios.get('http://localhost:8081/api/auth/user', { withCredentials: true });
        if (response.status === 200) {
          setUsername(response.data.uname);
          setContact(response.data.cont);
          setIsAuthenticated(true); // User is authenticated
        } else {
          setIsAuthenticated(false); // User is not authenticated
          navigate('/login'); // Redirect to login page if not authenticated
        }
      } catch (error) {
        console.error('Error fetching session data', error);
        setIsAuthenticated(false);
        navigate('/login');
      } finally {
        setLoading(false); // Stop loading after fetching session data
      }
    };

    fetchSessionData();
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isAuthenticated) {
      alert('Please log in to make a reservation');
      navigate('/login');
      return;
    }
  
    try {
      const res = await axios.post('http://localhost:8081/api/auth/bookrest',
        {
          ...formData,
          uname,
          cont,
        },
        { withCredentials: true }
      );
  
      console.log('Raw response:', res.data); // Log the raw response
  
      if (res.status === 201) {
        alert('Booking Successful'); // Show success message
        console.log('Booking details:', res.data.booking); // Log the booking details for debugging
        setTimeout(() => {
          navigate('/Dashboard'); // Redirect to dashboard after successful booking
        }, 1000); // Wait for 1 second before navigating
      } else {
        console.error('Booking failed:', res.data.message);
        alert('Failed to create booking. Please try again.'); // Show failure message
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred while making the booking.'); // Show error message
    }
  };
  

  if (loading) return <div>Loading...</div>;

  return (
    <div className="container mx-auto py-10">
    <form
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-10 max-w-md mx-auto"
      onSubmit={handleSubmit}
    >
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rname">
          Restaurant
        </label>
        <select
          id="rname"
          name="rname"
          value={formData.rname}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
          required
        >
          <option value="">Select a restaurant</option>
          <option value="Am - Pm Chinese Couisine">Am - Pm Chinese Couisine</option>
          <option value="Gavhane's Mutton">Gavhane's Mutton</option>
          <option value="Sarangi: Pure Veg">Sarangi Pure Veg</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
          Date
        </label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="time">
          Time
        </label>
        <input
          type="time"
          id="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          min="19:00"
          max="22:30"
          step="1800"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tab_no">
          Table Number
        </label>
        <select
          id="tab_no"
          name="tab_no"
          value={formData.tab_no}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
          required
        >
          <option value="">Select table number</option>
          {[...Array(10).keys()].map((num) => (
            <option key={num + 1} value={num + 1}>{num + 1}</option>
          ))}
        </select>
      </div>

      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          type="submit"
        >
          Book Now
        </button>
      </div>
    </form>

    <h4 className="mt-8 mb-4 ml-1 text-lg text-left">Refer to the table below for seating capacity:</h4>
    <table className="table-auto border-collapse border border-gray-400  ">
      <thead>
        <tr>
          <th className="border border-gray-300 px-4 py-2">Table No.</th>
          <th className="border border-gray-300 px-4 py-2">Occupancy</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 px-4 py-2">1, 2</td>
          <td className="border border-gray-300 px-4 py-2">2 People</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">3, 4, 5, 6</td>
          <td className="border border-gray-300 px-4 py-2">4 People</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">7, 8</td>
          <td className="border border-gray-300 px-4 py-2">8 People</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">9, 10</td>
          <td className="border border-gray-300 px-4 py-2">12 People</td>
        </tr>
      </tbody>
    </table>
  </div>
);
};

export default BookingForm;
