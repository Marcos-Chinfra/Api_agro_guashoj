const Joi = require('joi');

const id = Joi.number().integer();
const StaffId = Joi.number().integer();
const description = Joi.string().min(10);

const createSalesSchema = Joi.object({
  description: description.required(),
  StaffId: StaffId.required()
});

const updateSalesSchema = Joi.object({
  description: description,
});

const getSalesSchema = Joi.object({
  id: id.required(),
});

module.exports = { createSalesSchema, updateSalesSchema, getSalesSchema }
