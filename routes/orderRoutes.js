// routes/orderRoutes.js
const express = require('express');
const Order = require('../models/Order');
const router = express.Router();

// Route pour créer une commande
router.post('/', async (req, res) => {
  const { user, products, totalAmount } = req.body;
  const order = new Order({ user, products, totalAmount });

  try {
    await order.save();
    res.status(201).json({ message: 'Commande créée avec succès' });
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

module.exports = router;
