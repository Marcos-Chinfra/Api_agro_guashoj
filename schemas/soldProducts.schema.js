const Joi = require('joi');

const id = Joi.number().integer();
const SaleId = Joi.number().integer();
const productId = Joi.number().integer();
const amount = Joi.number().integer();


const createSoldProductsSchema = Joi.object({
  amount: amount.required(),
  SaleId: SaleId.required(),
  productId: productId.required(),
});


const updateSoldProductsSchema = Joi.object({
  amount: amount,
  SaleId: SaleId,
  productId: productId
});

const getSoldProductsSchema = Joi.object({
  id: id.required(),
});

module.exports = { createSoldProductsSchema, updateSoldProductsSchema, getSoldProductsSchema }
