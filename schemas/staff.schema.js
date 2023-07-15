const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(20);
const lastName = Joi.string().min(2).max(20);
const phone = Joi.string().min(3).max(10);
const role = Joi.string().min(5);

const createStaffSchema = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  phone: phone.required(),
  role: role
});

const updateStaffSchema = Joi.object({
  name: name,
  phone: phone,
  lastName: lastName,
  role: role
});

const getStaffSchema = Joi.object({
  id: id.required(),
});

module.exports = { createStaffSchema, updateStaffSchema, getStaffSchema }
