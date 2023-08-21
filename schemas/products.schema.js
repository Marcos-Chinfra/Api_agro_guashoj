const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(50);
const price = Joi.number();
const description = Joi.string().min(10);
const categoryId = Joi.number().integer();
const weight = Joi.number();
const type = Joi.string().min(3).max(20);
const unit_of_measurement = Joi.string().min(3).max(20);
const category = Joi.number().integer();

const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  description: description.required(),
  weight: weight.required(),
  type: type.required(),
  unit_of_measurement: unit_of_measurement.required(),
  categoryId: categoryId.required(),
});

const updateProductSchema = Joi.object({
  name: name,
  price: price,
  description: description,
  weight: weight,
  type: type,
  unit_of_measurement: unit_of_measurement,
  categoryId
});

const getProductSchema = Joi.object({
  id: id.required(),
});

const queryParamsSchema = Joi.object({
  category
});


module.exports = { createProductSchema, updateProductSchema, getProductSchema, queryParamsSchema }
