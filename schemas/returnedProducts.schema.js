const Joi = require('joi');

const id = Joi.number().integer();
const saleId = Joi.number().integer();
const productId = Joi.number().integer();
const amount = Joi.number().integer();
const product = Joi.number().integer();

const createReturnedProductsSchema = Joi.object({
  amount: amount.required(),
  saleId: saleId.required(),
  productId: productId.required()
});

const updateReturnedProductsSchema = Joi.object({
  amount: amount,
  saleId: saleId,
  productId: productId
});

const getReturnedProductsSchema = Joi.object({
  id: id.required(),
});

const queryParamsSchema = Joi.object({
  product
});

module.exports = { createReturnedProductsSchema, updateReturnedProductsSchema, getReturnedProductsSchema, queryParamsSchema }
