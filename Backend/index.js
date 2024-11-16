const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json()); // for parsing JSON requests

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error));

// Routes
app.use('/auth', require('./routes/auth'));
app.use('/orders', require('./routes/order'));

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
