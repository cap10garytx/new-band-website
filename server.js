const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'server/public')));

// Serve HTML files
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'server/index.html'));
});

app.get('/music', (req, res) => {
  res.sendFile(path.join(__dirname, 'server/music/index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'server/about/index.html'));
});

app.get('/shows', (req, res) => {
  res.sendFile(path.join(__dirname, 'server/shows/index.html'));
});

app.get('/links', (req, res) => {
  res.sendFile(path.join(__dirname, 'server/links/index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
