const express = require("express");
const connection = require("./db"); // Import the database connection
require("dotenv").config(); // Load .env file

const app = express();
const PORT = process.env.PORT || 3001;

// Sample API Route
app.get("/", (req, res) => {
  res.send("Server is running!");
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
