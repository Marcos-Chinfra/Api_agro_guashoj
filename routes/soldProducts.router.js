const express = require('express');
const router = express.Router();

const SoldProductsService = require('../services/soldProducts.service');
const service = new SoldProductsService();

const validatorHandler = require('../middlewares/validator.handler');
const { createSoldProductsSchema, updateSoldProductsSchema, getSoldProductsSchema } = require('../schemas/soldProducts.schema');

router.get('/', async (req, res, next) => {
  try {
    const records = await service.find();
    res.json(records);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  validatorHandler(getSoldProductsSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const record = await service.findOne(id);
      res.json(record);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  validatorHandler(createSoldProductsSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newRecord = await service.create(body);
      res.status(201).json(newRecord);
    } catch (error) {
      next(error);
    }
  }
);


router.patch('/:id',
  validatorHandler(getSoldProductsSchema, 'params'),
  validatorHandler(updateSoldProductsSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const record = await service.update(id, body);
      res.json(record);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id',
  validatorHandler(getSoldProductsSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await service.delete(id);
      res.status(201).json({id});
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
