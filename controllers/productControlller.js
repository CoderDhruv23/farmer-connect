const Product = require('../models/productModel');

const getProducts = async (req, res) => {
  const products = await Product.find({});
  res.json(products);
};

const createProduct = async (req, res) => {
  const { name, description, price, quantity, user } = req.body;
  // Product creation logic here
};

module.exports = { getProducts, createProduct };
