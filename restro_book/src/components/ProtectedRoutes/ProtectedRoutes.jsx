import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoutes = ({ isAuthenticated, children }) => {
  return isAuthenticated ? children : <Navigate to="/Restaurant/Login" />; // Change "/login" to your login route
};

export default ProtectedRoutes;
