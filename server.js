const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

// Charger les variables d'environnement
dotenv.config();

// Initialisation de l'application Express
const app = express();

// Middleware
app.use(bodyParser.json());

// Importer les routes après avoir défini `app`
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const orderRoutes = require('./routes/orderRoutes');

// Connexion à MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connecté avec succès'))
  .catch((err) => console.log('Erreur de connexion MongoDB :', err));

// Définition des routes
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);

// Lancer le serveur
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Serveur en marche sur le port ${PORT}`));
