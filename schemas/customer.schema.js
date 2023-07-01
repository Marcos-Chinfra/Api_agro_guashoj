const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(25);

const createCustomerSchema = Joi.object({
  name: name.required(),
});

const updateCustomerSchema = Joi.object({
  name: name,
});

const getCustomerSchema = Joi.object({
  id: id.required(),
});

module.exports = { createCustomerSchema, updateCustomerSchema, getCustomerSchema }
