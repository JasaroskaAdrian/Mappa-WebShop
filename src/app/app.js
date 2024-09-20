const path = require('path');
const express = require('express');
const webpack = require('webpack');

const app = express();

app.use(express.static(path.join(__dirname, '../src/public')));

// Serve the public HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'homepage.html'));
});

app.get('/cart', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'cart.html'))
})

// Listen on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
