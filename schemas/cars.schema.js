const Joi = require('joi');

const id = Joi.number().integer();
const model = Joi.string().min(8);
const plate = Joi.string().min(5);
const spend = Joi.number().integer();
const server = Joi.string().min(4);
const mileage = Joi.string().min(5)


const createCarSchema = Joi.object({
  model: model.required(),
  plate: plate.required(),
  spend: spend.required(),
  server: server.required(),
  mileage: mileage.required()
});

const updateUserSchema = Joi.object({
  model: model,
  plate: plate,
  spend: spend,
  server: server,
  mileage: mileage
});

const getUserSchema = Joi.object({
  id: id.required(),
});

module.exports = { createCarSchema, updateUserSchema, getUserSchema }
