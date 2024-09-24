// src/components/User/Logout/Logout.jsx

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear session data from localStorage
    localStorage.removeItem('isAuthenticated');
    
    // Clear cookies if necessary
    document.cookie = 'connect.sid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'; // adjust for session cookies

    // Update authentication state
    setIsAuthenticated(false);

    // Redirect to the login page after logout
    navigate('/LogIn');
  }, [navigate, setIsAuthenticated]);

  return (
    <div>
      <h1>Logging you out...</h1>
    </div>
  );
};

export default Logout;
