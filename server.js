const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the root directory
app.use(express.static(path.join(__dirname, '../../../')));

// Serve static files from the server/public directory
app.use('/public', express.static(path.join(__dirname, '../')));

// HTML routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../../index.html'));
});

app.get('/music', (req, res) => {
  res.sendFile(path.join(__dirname, '../../../server/music/index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, '../../../server/about/index.html'));
});

app.get('/shows', (req, res) => {
  res.sendFile(path.join(__dirname, '../../../server/shows/index.html'));
});

app.get('/links', (req, res) => {
  res.sendFile(path.join(__dirname, '../../../server/links/index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
