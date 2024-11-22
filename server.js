const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the public directory
app.use(express.static('public'));

// Serve the main page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Serve the music page
app.get('/music', (req, res) => {
  res.sendFile(path.join(__dirname, 'music/index.html'));
});

// Add routes for other pages
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'about/index.html'));
});

app.get('/shows', (req, res) => {
  res.sendFile(path.join(__dirname, 'shows/index.html'));
});

app.get('/links', (req, res) => {
  res.sendFile(path.join(__dirname, 'links/index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});