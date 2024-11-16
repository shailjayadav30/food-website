const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// Place a new order
router.post('/place', async (req, res) => {
  const { user, items, totalAmount } = req.body;

  try {
    const order = new Order({ user, items, totalAmount });
    await order.save();
    res.status(201).json({ message: 'Order placed successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
