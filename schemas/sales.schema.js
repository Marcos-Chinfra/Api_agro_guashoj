const Joi = require('joi');

const id = Joi.number().integer();
const StaffId = Joi.number().integer();
const description = Joi.string().min(10);
const SaleId = Joi.number().integer();
const productId = Joi.number().integer();
const amount = Joi.number().integer();

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

const addSale = Joi.object({
  SaleId: SaleId.required(),
  productId: productId.required(),
  amount: amount.required()
})

module.exports = { createSalesSchema, updateSalesSchema, getSalesSchema, addSale }
