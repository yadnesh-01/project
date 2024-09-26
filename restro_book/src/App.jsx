import React, { useState, useEffect } from 'react';
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
import RPrevious from './components/Restaurant/RDashboard/RPrevious';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is authenticated by checking localStorage
    const authStatus = localStorage.getItem('isAuthenticated');
    setIsAuthenticated(authStatus === 'true');
  }, []);

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
    // Optionally remove user data if stored
    localStorage.removeItem('user');
    Navigate('/Login');
  };

  return (
    <Router>
      <Hnavbar isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<UlogIn setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/Signin" element={<UsignIn />} />
        <Route path="/Restaurant/Sigin" element={<Rsignin />} />
        <Route path="/Restaurant/Login" element={<Rlogin setIsAuthenticated={setIsAuthenticated} />} />

        {/* Protected Routes */}
        <Route path="/Dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="/PreviousBookings" element={isAuthenticated ? <PreviousBookings /> : <Navigate to="/login" />} />
        <Route path="/BookingForm" element={isAuthenticated ? <BookingForm /> : <Navigate to="/login" />} />
        <Route path="/Restaurant/RDashboard" element={isAuthenticated ? <RDashboard /> : <Navigate to="/Restaurant/Login" />} />
        <Route path="/RPrevious" element={isAuthenticated ? <RPrevious /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
