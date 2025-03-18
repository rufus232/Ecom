// routes/userRoutes.js
const express = require('express');
const User = require('../models/User');  // Assure-toi que ton modèle est bien configuré
const router = express.Router();

// Route pour ajouter un utilisateur
router.post('/', async (req, res) => {
  const { name, email, password } = req.body;
  const user = new User({ name, email, password });

  try {
    await user.save();
    res.status(201).json({ message: 'Utilisateur ajouté avec succès' });
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

module.exports = router;
