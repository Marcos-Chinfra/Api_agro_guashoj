const Joi = require('joi');

const id = Joi.number().integer();
const SaleId = Joi.number().integer();
const productId = Joi.number().integer();
const incomings = Joi.number().integer();


const updateSoldProductsSchema = Joi.object({
  incomings: incomings,
  SaleId: SaleId,
  productId: productId
});

const getSoldProductsSchema = Joi.object({
  id: id.required(),
});

module.exports = { updateSoldProductsSchema, getSoldProductsSchema }
