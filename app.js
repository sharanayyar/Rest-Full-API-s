const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes');

const app = express();
const PORT = 3000;

// Middleware to parse JSON request body
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/productDB')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Product routes
app.use('/api/products', productRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
