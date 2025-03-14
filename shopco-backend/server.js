const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');
const Product = require('./models/product');
const app = express();
const port = 3000;
app.use(express.json());
const mongoURI = 'mongodb://localhost:27017/shopco';



mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado ao MongoDB'))
  .catch(err => console.log('Erro ao conectar ao MongoDB: ', err));

// Modelo do Produto
const ProductSchema = new mongoose.Schema({
    nome: String,
    descricao: String,
    preco: Number,
    imagem: String
});


// Rota para buscar todos os produtos
app.get('/api/produtos', async (req, res) => {
    const produtos = await Product.find();
    res.json(produtos);
});

// Rota para buscar um produto pelo ID
app.get('/api/produtos/:id', async (req, res) => {
    const produto = await Product.findById(req.params.id);
    res.json(produto);
});

// Rota para adicionar um novo produto
app.post('/api/produtos', async (req, res) => {
  try {
      console.log("Recebendo requisição:", req.body); // LOG PARA DEBUG
      const novoProduto = new Produto(req.body);
      await novoProduto.save();
      res.status(201).json({ message: "Produto adicionado!" });
  } catch (error) {
      console.error("Erro ao adicionar produto:", error);
      res.status(500).json({ error: "Erro no servidor" });
  }
});


app.use(express.json()); // Permite JSON no body das requisições

// Simulando um banco de dados (ou use MongoDB/MySQL)
const produtos = [];

app.use(cors());
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
