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
