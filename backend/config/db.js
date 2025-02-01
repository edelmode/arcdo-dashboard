const mysql = require("mysql2");
require("dotenv").config(); // Load .env file

// Ensure environment variables are loaded
if (!process.env.DB_HOST || !process.env.DB_USER || !process.env.DB_PASS || !process.env.DB_NAME) {
  console.error("Missing required database environment variables.");
  process.exit(1); // Exit the app if credentials are missing
}

// Fix: Wrap `process.env.DB_HOST` in a string
const connection = mysql.createConnection({
  host: process.env.DB_HOST,       // Host from .env
  user: process.env.DB_USER,       // Username from .env
  password: process.env.DB_PASS, // Password from .env
  database: process.env.DB_NAME,   // Database name from .env
  ssl: {
    rejectUnauthorized: true,      // Ensure secure transport
  },
});

// Test database connection
connection.connect((err) => {
  if (err) {
    console.error("Failed to connect to database:", err.message);
  } else {
    console.log("✅ Connected to Azure MySQL database!");
  }
});

module.exports = connection; // Export connection for use in server.js
