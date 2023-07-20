const Joi = require('joi');

const id = Joi.number().integer();
const staffId = Joi.number().integer();
const routeId = Joi.number().integer();
const observations = Joi.string().min(10);
const total = Joi.number()


const createSalesSchema = Joi.object({
  observations: observations.required(),
  staffId: staffId.required(),
  routeId: routeId.required(),
  total: total
});

const updateSalesSchema = Joi.object({
  observations: observations,
  staffId: staffId,
  staffId: staffId,
  total: total
});

const getSalesSchema = Joi.object({
  id: id.required()
});

module.exports = { createSalesSchema, updateSalesSchema, getSalesSchema }
