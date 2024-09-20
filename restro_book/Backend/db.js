// backend/db.js

const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',  // Replace with your MySQL username
  password: '', // Replace with your MySQL password
  database: 'rest_book'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

module.exports = connection;
