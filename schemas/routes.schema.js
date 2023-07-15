const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(20);


const createRouteSchema = Joi.object({
  name: name.required(),
});

const updateRouteSchema = Joi.object({
  name: name,
});

const getRouteSchema = Joi.object({
  id: id.required(),
});

module.exports = { createRouteSchema, updateRouteSchema, getRouteSchema }
