const Joi = require('joi');

const id = Joi.number().integer();
const SaleId = Joi.number().integer();
const productId = Joi.number().integer();
const amount = Joi.number().integer();


const createUnsoldProductsSchema = Joi.object({
  amount: amount.required(),
  SaleId: SaleId.required(),
  productId: productId.required()
});

const updateUnsoldProductsSchema = Joi.object({
  amount: amount,
  SaleId: SaleId,
  productId: productId
});

const getUnsoldProductsSchema = Joi.object({
  id: id.required()
});

module.exports = { createUnsoldProductsSchema, updateUnsoldProductsSchema, getUnsoldProductsSchema }

