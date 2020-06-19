const express = require('express');
const productRouter = express.Router();
const Product = require("../controllers/Product");

productRouter.post('/', async (req, res) => await Product.addProduct(req, res));

productRouter.get('/', async (req, res) => await Product.getAllProducts(req, res));

productRouter.put('/:id', async (req, res) => await Product.updateProduct(req, res));

productRouter.delete('/:id', async (req, res) => await Product.removeProduct(req, res));

module.exports = productRouter;
