// backend/server.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/auth');

const app = express();
const PORT = 8081;

app.use(cors());
app.use(bodyParser.json());

// Use routes
app.use('/api', authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
