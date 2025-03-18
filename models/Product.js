const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  stock: { type: Number, required: false }, // Rendre stock optionnel si besoin
  category: { type: String, required: false }, // Optionnel
  image: { type: String, required: false } // Optionnel
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;


// const {__v, ...rest} = user
// log(rest)