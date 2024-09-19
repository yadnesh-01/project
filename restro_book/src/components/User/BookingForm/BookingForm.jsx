// src/components/BookingForm.js
import React, { useState } from 'react';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    rname: '',
    date: '',
    time: '',
    tab_no: 0,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
  };

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
            <option value="0">Select table number</option>
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

      <h4 className="mt-8 mb-4 text-lg text-left">Refer to the table below for seating capacity:</h4>
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
