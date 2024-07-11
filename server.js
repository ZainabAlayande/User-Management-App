// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Create an instance of Express
const app = express();

// Middleware setup
app.use(bodyParser.json());
app.use(cors());

// Server port
const port = process.env.PORT || 3000;

// Import the users routes
const usersRoutes = require('./routes/users');

// Use the users routes
app.use('/api', usersRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});