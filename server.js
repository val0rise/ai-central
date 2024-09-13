const express = require('express');
const app = express();
const path = require('path');

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Serve the index.html file on any route request
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

// Set the port to 3000 or use the environment variable if provided
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const express = require('express');
const app = express();
const path = require('path');
const { MongoClient } = require('mongodb');

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// MongoDB connection setup
const uri = process.env.MONGODB_URI; // Ensure this matches what's in your .env or docker-compose.yml
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Connect to MongoDB
client.connect(err => {
  if (err) {
    console.error('Failed to connect to MongoDB:', err);
    process.exit(1); // Exit process with failure
  }
  console.log('Connected successfully to MongoDB');

  // If you need to use the database connection in your routes, you can do something like:
  const database = client.db('ai-central-db'); // Replace 'ai-central-db' with your database name

  // Serve the index.html file on any route request
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });

  // Start the server after MongoDB connection is established
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Serve


const express = require('express');
const app = express();
const path = require('path');

// Load environment variables from .env file
require('dotenv').config();

// Access your API key like this:
const apiKey = process.env.API_KEY;

// Example: Using the API key in a middleware or route
app.use((req, res, next) => {
    // Here you might check or set headers with your API key for outgoing requests
    // For example, if you're making an API call from your server:
    req.headers['Authorization'] = `Bearer ${apiKey}`;
    next();
});

// Your existing code for serving the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
