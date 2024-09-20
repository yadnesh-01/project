const express = require('express');
const mysql = require('mysql2');
const session = require('express-session');
const bcrypt = require('bcryptjs');
const app = express();
const port = 8081;

// Create a MySQL connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'rest_book'
});

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Session configuration
app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: true
}));

// Logging function
function writeLog(filename, message, level) {
  // Implement your logging logic here, e.g., writing to a file or console
  console.log(`[${level}] ${filename}: ${message}`);
}

// Login route
app.post('/login', (req, res) => {
  const { uname, upass } = req.body;

  // Log the attempt
  writeLog('logintab.js', 'login', 'INFO', 'Login attempt');

  // Check credentials
  const sql = 'SELECT * FROM userinfo WHERE uname = ?';
  pool.execute(sql, [uname], (err, results) => {
    if (err) {
      writeLog('logintab.js', err.message, 'ERROR');
      return res.status(500).send('An error occurred: ' + err.message);
    }

    if (results.length > 0) {
      const user = results[0];

      // Verify password
      bcrypt.compare(upass, user.upass, (err, isMatch) => {
        if (err) {
          writeLog('logintab.js', err.message, 'ERROR');
          return res.status(500).send('An error occurred: ' + err.message);
        }

        if (isMatch) {
          // Set session variables
          req.session.authenticated = true;
          req.session.uname = user.uname;
          req.session.username = user.username;
          req.session.cont = user.cont;

          writeLog('logintab.js', `User ${uname} logged in successfully`, 'SUCCESS');
          res.redirect('/dashboard');
        } else {
          writeLog('logintab.js', 'Incorrect username or password', 'WARNING');
          res.send('<script>alert("Wrong username or password"); window.location.href="/login";</script>');
        }
      });
    } else {
      writeLog('logintab.js', 'Incorrect username or password', 'WARNING');
      res.send('<script>alert("Wrong username or password"); window.location.href="/login";</script>');
    }
  });
});

// Route for the dashboard
app.get('/dashboard', (req, res) => {
  if (req.session.authenticated) {
    res.send('Welcome to your dashboard!');
  } else {
    res.redirect('/login');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
