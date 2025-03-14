// models/Product.js
const mongoose = require('mongoose');

// Definindo o esquema do produto (como se fosse um 'template' para os dados)
const productSchema = new mongoose.Schema({
  name: {
    type: String, // O nome será uma string
    required: true // Esse campo é obrigatório
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  }
});

const Product = mongoose.models.Product || mongoose.model('Product', productSchema); 

module.exports = Product;