const Joi = require('joi');

const id = Joi.number().integer();
const saleId = Joi.number().integer();
const productId = Joi.number().integer();
const amount = Joi.number().integer();


const createUnsoldProductsSchema = Joi.object({
  amount: amount.required(),
  saleId: saleId.required(),
  productId: productId.required()
});

const updateUnsoldProductsSchema = Joi.object({
  amount: amount,
  saleId: saleId,
  productId: productId
});

const getUnsoldProductsSchema = Joi.object({
  id: id.required()
});

module.exports = { createUnsoldProductsSchema, updateUnsoldProductsSchema, getUnsoldProductsSchema }

