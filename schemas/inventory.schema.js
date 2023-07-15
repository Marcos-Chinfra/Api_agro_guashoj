const Joi = require('joi');

const id = Joi.number().integer();
const productID = Joi.number().integer();
const stock = Joi.number().integer();
const incomings = Joi.number().integer();
const withdrawals = Joi.number().integer();

const createInventorySchema = Joi.object({
  productID: productID.required(),
  stock: stock.required(),
});

const updateInventorySchema = Joi.object({
  id: id,
  incomings: incomings,
});

const getInventorySchema = Joi.object({
  id: id.required(),
});

module.exports = { createInventorySchema, updateInventorySchema, getInventorySchema }
