// backend/server.js
const express = require('express');
const session = require('express-session');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configure CORS
app.use(cors({
  origin: 'http://localhost:5173', // Your React app's URL
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
}));

app.use(session({
  secret: 'your-secret-key', // Use a secure secret
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false } // Set to true for HTTPS
}));

app.use('/api/auth', authRoutes);

// Other middleware and routes...

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
