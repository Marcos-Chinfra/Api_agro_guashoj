const Joi = require('joi');

const id = Joi.number().integer();
const productId = Joi.number().integer();
const stock = Joi.number().integer();
const incomings = Joi.number().integer();
const withdrawals = Joi.number().integer();

const createInventorySchema = Joi.object({
  productId: productId.required(),
  stock: stock.required(),
  withdrawals: withdrawals.required(),
  incomings: incomings.required()
});

const updateInventorySchema = Joi.object({
  id: id,
  incomings: incomings,
  withdrawals: withdrawals
});

const getInventorySchema = Joi.object({
  id: id.required(),
});

module.exports = { createInventorySchema, updateInventorySchema, getInventorySchema }
