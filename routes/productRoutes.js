// routes/productRoutes.js
const express = require('express');
const Product = require('../models/Product');
const router = express.Router();  // Assure-toi d'utiliser "express.Router()"


// Route POST pour ajouter un produit// Route POST pour ajouter un produit
router.post('/', async (req, res) => {
    try {
        const { name, price, description, image } = req.body;
        const newProduct = new Product({ name, price, description, image });
        await newProduct.save();
        res.status(201).json({ message: 'Produit ajouté avec succès', product: newProduct });
    } catch (error) {
        res.status(500).json({ message: 'Erreur serveur', error: error.message });
    }
});


// Autres routes pour obtenir, mettre à jour et supprimer les produits
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Produit non trouvé' });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedProduct) return res.status(404).json({ message: 'Produit non trouvé' });
    res.json(updatedProduct);
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({ message: 'Produit non trouvé' });
    res.json({ message: 'Produit supprimé avec succès' });
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

module.exports = router;  // Assure-toi que tu exportes bien le router
