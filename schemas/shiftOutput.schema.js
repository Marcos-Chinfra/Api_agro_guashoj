const Joi = require('joi');

const id = Joi.number().integer();
const amount = Joi.number().integer();
const productId = Joi.number().integer();
const workingDay = Joi.string().min(3).max(20);
const limit = Joi.number().integer();
const offset = Joi.number().integer();
const category = Joi.number().integer();

const createShiftOutputSchema = Joi.object({
  productId: productId.required(),
  amount: amount.required(),
  workingDay: workingDay
});

const updateShiftOutputSchema = Joi.object({
  amount: amount,
  workingDay: workingDay
});

const getShiftOutputSchema = Joi.object({
  id: id.required(),
});

const queryParamsSchema = Joi.object({
  limit,
  offset,
  category
});

module.exports = { createShiftOutputSchema, updateShiftOutputSchema, getShiftOutputSchema, queryParamsSchema }

