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
import RPrevious from './components/Restaurant/RDashboard/RPrevious';
import Logout from './components/User/Logout/Logout';




function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
   // Check if user is authenticated by checking localStorage
   const authStatus = localStorage.getItem('isAuthenticated');
   if (authStatus === 'true') {
     setIsAuthenticated(true);
   }
 }, []);
  return (
    <Router >  
      
      <Hnavbar />
      <Routes>
      <Route path="/" element={<Home />} />

        <Route path="/login" element={<UlogIn setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/Dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="/PreviousBookings" element={isAuthenticated ? <PreviousBookings /> : <Navigate to="/login" />} />
        <Route path="/Signin" element={<UsignIn />} />
        <Route path="/Restaurant/Sigin" element={<Rsignin/>} />
        <Route path="/BookingForm" element={<BookingForm />} />
        
        {/* <Route path="/Restaurant/RDashboard" element={<RDashboard />} /> */}
        {/* <Route path="/Restaurant/Login" element={<Rlogin />} /> */}

        <Route path="/Restaurant/Login" element={<Rlogin setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/Restaurant/RDashboard" element={isAuthenticated ? <RDashboard /> : <Navigate to="/Restaurant/Login" />} />
        <Route path="/RPrevious" element={isAuthenticated ? <RPrevious /> : <Navigate to="/login" />} />


        <Route path="/logout" element={<Logout setIsAuthenticated={setIsAuthenticated} />} />
      </Routes> 
    </Router>
  );
};

export default App;
