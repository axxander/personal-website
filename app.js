const express = require('express');
const app = express();

// middleware
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ status: 'hello Kitt!' });
});

// 404 for all other routes
app.use((req, res) => {
  res.status(404).json({ error: 'page does not exist' });
});

// export express app for testing
module.exports = app;
