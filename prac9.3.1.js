// backend/server.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// simple API
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', time: Date.now() });
});

app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from backend', instance: process.env.INSTANCE_ID || 'unknown' });
});

// example POST
app.post('/api/echo', (req, res) => {
  res.json({ youSent: req.body });
});

app.listen(port, () => {
  console.log(`Backend listening on port ${port}`);
});
