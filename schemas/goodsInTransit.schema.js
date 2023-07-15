const Joi = require('joi');

const id = Joi.number().integer();
const StaffId = Joi.number().integer();
const productId = Joi.number().integer();
const RouteId = Joi.number().integer();
const amount = Joi.number().integer();


const createGoodsInTransitSchema = Joi.object({
  amount: amount.required(),
  StaffId: StaffId.required(),
  productId: productId.required(),
  RouteId: RouteId.required()
});

const updateGoodsInTransitSchema = Joi.object({
  amount: amount,
  StaffId: StaffId,
  productId: productId,
  RouteId: RouteId
});

const getGoodsInTransitSchema = Joi.object({
  id: id.required(),
});

module.exports = { createGoodsInTransitSchema, updateGoodsInTransitSchema, getGoodsInTransitSchema }
