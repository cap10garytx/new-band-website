const express = require('express');
const path = require('path');
const app = express();

// Log all requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Go up one level from 'js' to reach 'public'
app.use(express.static(path.join(__dirname, '..')));

// Routes - also go up one level to reach index.html in public
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});