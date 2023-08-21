const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(8);
const password = Joi.string().min(8);
const phone = Joi.string().min(3).max(10);
const role = Joi.string().min(4);

const createUserSchema = Joi.object({
  name: name.required(),
  password: password.required(),
  phone: phone.required(),
  role: role
});

const updateUserSchema = Joi.object({
  name: name,
  password: password,
  phone: phone,
  image: image,
  role: role
});

const getUserSchema = Joi.object({
  id: id.required(),
});

module.exports = { createUserSchema, updateUserSchema, getUserSchema }
