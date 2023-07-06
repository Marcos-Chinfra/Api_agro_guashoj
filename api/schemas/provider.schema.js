const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(20);
const company = Joi.string().min(7);


const createProviderSchema = Joi.object({
  name: name.required(),
  company: company.required(),
});

const updateProviderSchema = Joi.object({
  name: name,
  company: company
});

const getProviderSchema = Joi.object({
  id: id.required(),
});

module.exports = { createProviderSchema, updateProviderSchema, getProviderSchema }
