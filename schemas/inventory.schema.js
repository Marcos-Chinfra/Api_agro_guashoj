const Joi = require('joi');

const id = Joi.number().integer();
const amount = Joi.number().integer();
const productID = Joi.number().integer();

const createInventorySchema = Joi.object({
  productID: productID.required(),
  amount: amount.required(),
});

const updateInventorySchema = Joi.object({
  amount: amount,
});

const getInventorySchema = Joi.object({
  id: id.required(),
});

module.exports = { createInventorySchema, updateInventorySchema, getInventorySchema }
