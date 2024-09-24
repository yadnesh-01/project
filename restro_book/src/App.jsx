// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/User/Home1'; 
import UlogIn from './components/User/Login/UlogIn'; 
import UsignIn from './components/User/Signin/UsignIn'; 
import Rsignin from './components/Restaurant/Signin/Rsignin'; 
import Rlogin from './components/Restaurant/Login/Rlogin';
import Hnavbar from './components/Hnavbar';
import BookingForm from './components/User/BookingForm/BookingForm';
import Dashboard from './components/User/Dashboard/Dashboard';
import PreviousBookings from './components/User/Dashboard/PreviousBookings';
import RDashboard from './components/Restaurant/RDashboard/RDashboard';


const App = () => {
  return (
    <Router >  
      {/* basename="/project/dist" */}
      <Hnavbar />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/Login" element={<UlogIn />} />
        <Route path="/Signin" element={<UsignIn />} />
        <Route path="/Restaurant/Login" element={<Rlogin />} />
        <Route path="/Restaurant/Sigin" element={<Rsignin/>} />
        <Route path="/BookingForm" element={<BookingForm />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/PreviousBookings" element={<PreviousBookings />} />
        <Route path="/Restaurant/RDashboard" element={<RDashboard />} />
      </Routes> 
    </Router>
  );
};

export default App;
