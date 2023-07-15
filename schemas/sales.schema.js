const Joi = require('joi');

const id = Joi.number().integer();
const StaffId = Joi.number().integer();
const RouteId = Joi.number().integer();
const observations = Joi.string().min(10);
const total = Joi.number()


const createSalesSchema = Joi.object({
  observations: observations.required(),
  StaffId: StaffId.required(),
  RouteId: RouteId.required(),
  total: total
});

const updateSalesSchema = Joi.object({
  observations: observations,
  StaffId: StaffId,
  RouteId: RouteId,
  total: total
});

const getSalesSchema = Joi.object({
  id: id.required()
});

module.exports = { createSalesSchema, updateSalesSchema, getSalesSchema }
