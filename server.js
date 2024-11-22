const express = require('express');
const path = require('path');
const app = express();

// Log all requests to help with debugging
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Serve static files from the server/public directory
app.use(express.static(path.join(__dirname, 'server/public')));

// HTML routes
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
