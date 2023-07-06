const express = require('express');
const router = express.Router();

const SalesService = require('../services/sales.service');
const service = new SalesService();

const validatorHandler = require('../middlewares/validator.handler.js');
const { createSalesSchema, updateSalesSchema, getSalesSchema, addSale } = require('../schemas/sales.schema');


router.get('/',
  async (req, res, next) => {
    try{
      const sales = await service.find();
      res.json(sales)
    }catch(err){
      next(err);
    }
  }
);

router.get('/:id',
  validatorHandler(getSalesSchema, 'params'),
  async (req, res, next) => {
    try{
      const { id } = req.params;
      const sale = await service.findOne(id);
      res.json(sale);
    }catch(err){
      next(err);
    }
  }
);

router.post('/',
  validatorHandler(createSalesSchema, 'body'),
  async (req, res, next) => {
    try{
      const body = req.body;
      const newSale = await service.create(body);
      res.status(201).json(newSale)
    }catch(err){
      next(err);
    }
  }
);

router.post(
  '/add-sold-products',
  validatorHandler(addSale, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newSale = await service.addSoldProducts(body);
      res.status(201).json(newSale);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id',
  validatorHandler(getSalesSchema, 'params'),
  validatorHandler(updateSalesSchema, 'body'),
  async (req, res, next) => {
    try{
      const { id } = req.params;
      const body = req.body;
      const saleChanged = await service.update(id, body);
      res.status(201).json(saleChanged);
    }catch(err){
      next(err);
    }
  }
);

router.delete('/:id',
  validatorHandler(getSalesSchema, 'params'),
  async (req, res, next) => {
    try{
      const { id } = req.params;
      await service.delete(id);
      res.status(201).json({id});
    }catch(err){
      next(err);
    }
  }
);

module.exports = router;
