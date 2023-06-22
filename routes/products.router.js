const express = require('express');
const sequelize = require('../libs/sequelize');
const router = express.Router();

const ProductsServices = require('../services/products.service');
const service = new ProductsServices();


router.get('/',
  (req, res) => {
    const products = service.find();
    res.json(products);
})




module.exports = router;
