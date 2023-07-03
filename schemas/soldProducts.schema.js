const Joi = require('joi');

const id = Joi.number().integer();
const amount = Joi.number().integer();
const productID = Joi.number().integer();
const saleID = Joi.number().integer();

const createSoldProductsSchema = Joi.object({
  saleID: saleID.required(),
  productID: productID.required(),
  amount: amount.required(),
});

const updateSoldProductsSchema = Joi.object({
  amount: amount,
});

const getSoldProductsSchema = Joi.object({
  id: id.required(),
});

module.exports = { createSoldProductsSchema, updateSoldProductsSchema, getSoldProductsSchema }
