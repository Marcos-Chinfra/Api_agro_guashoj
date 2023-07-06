const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(20);
const lastName = Joi.string().min(3).max(20);
const phone = Joi.string().min(3).max(10);
const password = Joi.string().min(8);
const role = Joi.string().min(10);

const createStaffSchema = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  phone: phone.required(),
  password: password.required(),
  role: role.required()
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
