import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated'); // Clear the auth status
    setIsAuthenticated(false); // Update state
    navigate('/login'); // Redirect to login
  };

  return (
    <div>
      <h2>You have been logged out.</h2>
      <button onClick={handleLogout}>Login Again</button>
    </div>
  );
};

export default Logout;
