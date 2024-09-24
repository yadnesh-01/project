// backend/routes/auth.js

const express = require('express');
const router = express.Router();
const db = require('../db');
const bcrypt = require('bcryptjs');

// User Login endpoint
router.post('/login', async (req, res) => {
  try {
    const { uname, password } = req.body;

    if (!uname || !password) {
      return res.status(400).json({ error: 'Username and password are required' });
    }

    // Query to fetch user
    const sql = 'SELECT * FROM userinfo WHERE uname = ?';
    db.query(sql, [uname], async (err, result) => {
      if (err) {
        return res.status(500).json({ error: 'Database error' });
      }

      if (result.length === 0) {
        return res.status(400).json({ error: 'Invalid username or password' });
      }

      const user = result[0];

      // Compare hashed password
      const isMatch = await bcrypt.compare(password, user.upass);
      if (!isMatch) {
        return res.status(400).json({ error: 'Invalid username or password' });
      }

      // Set session authenticated
      req.session.authenticated = true;
      req.session.user = {
        uname: user.uname,
        username: user.username,
        cont: user.cont,
      };

      res.json({ message: 'Logged in successfully', user: req.session.user });
    });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred during login' });
  }
});

// Fetch user info and bookings
router.get('/user', (req, res) => {
  if (!req.session.authenticated) {
    return res.status(401).json({ error: 'User not authenticated' });
  }

  const { username, cont } = req.session.user;

  // Query to fetch bookings for the authenticated user
  const bookingsSql = 'SELECT * FROM reservations WHERE uname = ?'; // Assuming 'uname' is the user identifier
  db.query(bookingsSql, [req.session.user.uname], (err, bookings) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }

    res.json({ username, cont, bookings });
  });
});

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


//Restaurant Registration endpoint
router.post('/restRegister', async (req, res) => {
  const { rname, radd, email, ruid,rcontact, rpass, confirm_password } = req.body;

  // Basic validation
  if (!rname || !radd || !rcontact || !ruid || !email || !rpass || !confirm_password) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  if (rpass !== confirm_password) {
    return res.status(400).json({ error: 'Passwords do not match.' });
  }

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(rpass, 10);

    const query = 'INSERT INTO restinfo (rname, radd, ruid, rpass, rcontact, email) VALUES (?, ?, ?, ?, ?,?)';
    
    db.query(query, [rname, radd, ruid, hashedPassword, rcontact, email], (err, results) => {
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


// Restaurant Login endpoint
router.post('/rlogin', async (req, res) => {
  try {
    const { ruid, password } = req.body;

    if (!ruid || !password) {
      return res.status(400).json({ error: 'Username and password are required' });
    }

    // Query to fetch user
    const sql = 'SELECT * FROM restinfo WHERE ruid = ?';
    db.query(sql, [ruid], async (err, result) => {
      if (err) {
        return res.status(500).json({ error: 'Database error' });
      }

      if (result.length === 0) {
        return res.status(400).json({ error: 'Invalid username or password' });
      }

      const user = result[0];

      // Compare hashed password
      const isMatch = await bcrypt.compare(password, user.rpass);
      if (!isMatch) {
        return res.status(400).json({ error: 'Invalid username or password' });
      }

      // // Set session authenticated
      // req.session.authenticated = true;
      // req.session.user = {`
      //   uname: user.uname,
      //   username: user.username,
      //   cont: user.cont,
      // };

      res.json({ message: 'Logged in successfully', user: req.session.user });
    });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred during login' });
  }
});


module.exports = router;