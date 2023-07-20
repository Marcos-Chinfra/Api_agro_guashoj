const Joi = require('joi');

const id = Joi.number().integer();
const staffId = Joi.number().integer();
const productId = Joi.number().integer();
const saleId = Joi.number().integer();
const amount = Joi.number().integer();


const createGoodsInTransitSchema = Joi.object({
  amount: amount.required(),
  staffId: staffId.required(),
  productId: productId.required(),
  saleId: saleId.required()
});

const updateGoodsInTransitSchema = Joi.object({
  amount: amount,
  staffId: staffId,
  productId: productId,
  saleId: saleId
});

const getGoodsInTransitSchema = Joi.object({
  id: id.required(),
});

module.exports = { createGoodsInTransitSchema, updateGoodsInTransitSchema, getGoodsInTransitSchema }
