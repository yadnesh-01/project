// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/User/Home'; // Adjust paths as needed
import UlogIn from './components/User/Login/UlogIn'; // Adjust paths as needed
import UsignIn from './components/User/Signin/UsignIn'; // Adjust paths as needed
import Hnavbar from './components/Hnavbar'; // Adjust paths as needed

const App = () => {
  return (
    <Router>
      <Hnavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<UlogIn />} />
        <Route path="/Sigin" element={<UsignIn />} />
      </Routes>
    </Router>
  );
};

export default App;
