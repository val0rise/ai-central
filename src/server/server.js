const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors()); // Enable CORS for development
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to AI-Central API!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
