// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/User/Home'; // Adjust paths as needed
import UlogIn from './components/User/Login/UlogIn'; // Adjust paths as needed
import UsignIn from './components/User/Signin/UsignIn'; // Adjust paths as needed
import Rsignin from './components/Restaurant/Signin/Rsignin'; // Adjust paths as needed
import Rlogin from './components/Restaurant/Login/Rlogin';
import Hnavbar from './components/Hnavbar'; // Adjust paths as needed
import BookingForm from './components/User/BookingForm/BookingForm';
import Dashboard from './components/User/Dashboard/Dashboard';
import PreviousBookings from './components/User/Dashboard/PreviousBookings';

const App = () => {
  return (
    <Router>
      <Hnavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<UlogIn />} />
        <Route path="/Sigin" element={<UsignIn />} />
        <Route path="/Restaurant/Login" element={<Rlogin />} />
        <Route path="/Restaurant/Sigin" element={<Rsignin/>} />
        <Route path="/BookingForm" element={<BookingForm />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/PreviousBookings" element={<PreviousBookings />} />
      </Routes> 
    </Router>
  );
};

export default App;
