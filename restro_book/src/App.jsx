// src/App.js
import React, {useState, useEffect} from 'react';
import { Navigate, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
// import ProtectedRoute from './components/ProtectedRoute';
// import { useState } from 'react';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const response = await fetch('http://localhost:8081/api/auth/user', {
        credentials: 'include',
      });
      if (response.ok) {
        setIsAuthenticated(true);
      }
    };
    checkAuth();
  }, []);

  return (
    <Router >  
      {/* basename="/project/dist" */}
      <Hnavbar />
      <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route
          path="/dashboard"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Dashboard />
            </ProtectedRoute>
          }
        /> */}
        {/* <Route path="/Login" element={<UlogIn />} /> */}

        <Route path="/login" element={<UlogIn setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/Dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="/PreviousBookings" element={isAuthenticated ? <PreviousBookings /> : <Navigate to="/login" />} />
        <Route path="/Signin" element={<UsignIn />} />
        <Route path="/Restaurant/Login" element={<Rlogin />} />
        <Route path="/Restaurant/Sigin" element={<Rsignin/>} />
        <Route path="/BookingForm" element={<BookingForm />} />
        {/* <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/PreviousBookings" element={<PreviousBookings />} /> */}
        <Route path="/Restaurant/RDashboard" element={<RDashboard />} />
      </Routes> 
    </Router>
  );
};

export default App;
