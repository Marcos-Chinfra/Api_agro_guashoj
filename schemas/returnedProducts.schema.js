const Joi = require('joi');

const id = Joi.number().integer();
const SaleId = Joi.number().integer();
const productId = Joi.number().integer();
const amount = Joi.number().integer();


const createReturnedProductsSchema = Joi.object({
  amount: amount.required(),
  SaleId: SaleId.required(),
  productId: productId.required()
});

const updateReturnedProductsSchema = Joi.object({
  amount: amount,
  SaleId: SaleId,
  productId: productId
});

const getReturnedProductsSchema = Joi.object({
  id: id.required(),
});

module.exports = { createReturnedProductsSchema, updateReturnedProductsSchema, getReturnedProductsSchema }
