const Joi = require('joi');

const id = Joi.number().integer();
const amount = Joi.number().integer();
const productId = Joi.number().integer();
const providerId = Joi.number().integer();

const createSupplySchema = Joi.object({
  providerId: providerId.required(),
  productId: productId.required(),
  amount: amount.required(),
});

const updateSupplySchema = Joi.object({
  amount: amount,
});

const getSupplySchema = Joi.object({
  id: id.required(),
});

module.exports = { createSupplySchema, updateSupplySchema, getSupplySchema }

