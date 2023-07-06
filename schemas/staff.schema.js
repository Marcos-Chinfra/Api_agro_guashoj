const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(20);
const lastName = Joi.string().min(3).max(20);

const createStaffSchema = Joi.object({
  name: name.required(),
  lastName: lastName.required()
});

const updateStaffSchema = Joi.object({
  name: name,
});

const getStaffSchema = Joi.object({
  id: id.required(),
});

module.exports = { createStaffSchema, updateStaffSchema, getStaffSchema }
