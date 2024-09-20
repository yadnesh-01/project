// backend/routes/auth.js

const express = require('express');
const router = express.Router();
const db = require('../db');
const bcrypt = require('bcryptjs');

// Registration endpoint
router.post('/register', async (req, res) => {
  const { username, cont, uname, email, upass, confirm_password } = req.body;

  // Basic validation
  if (!username || !cont || !uname || !email || !upass || !confirm_password) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  if (upass !== confirm_password) {
    return res.status(400).json({ error: 'Passwords do not match.' });
  }

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(upass, 10);

    const query = 'INSERT INTO userinfo (username, cont, uname, email, upass) VALUES (?, ?, ?, ?, ?)';
    
    db.query(query, [username, cont, uname, email, hashedPassword], (err, results) => {
      if (err) {
        console.error('Error inserting data:', err);
        return res.status(500).json({ error: 'An error occurred while registering.' });
      }

      return res.status(201).json({ message: 'Registration successful!' });
    });
  } catch (error) {
    console.error('Error hashing password:', error);
    return res.status(500).json({ error: 'An error occurred while registering.' });
  }
});

module.exports = router;
