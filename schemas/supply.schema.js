const Joi = require('joi');

const id = Joi.number().integer();
const amount = Joi.number().integer();
const productID = Joi.number().integer();
const providerID = Joi.number().integer();

const createSupplySchema = Joi.object({
  saleID: providerID.required(),
  productID: productID.required(),
  amount: amount.required(),
});

const updateSupplySchema = Joi.object({
  amount: amount,
});

const getSupplySchema = Joi.object({
  id: id.required(),
});

module.exports = { createSupplySchema, updateSupplySchema, getSupplySchema }

