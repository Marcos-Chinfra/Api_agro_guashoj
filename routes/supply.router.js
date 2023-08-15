const express = require('express');
const router = express.Router();

const SupplyService = require('../services/supply.service');
const service = new SupplyService();

const validatorHandler = require('../api/middlewares/validator.handler');
const { createSupplySchema, updateSupplySchema, getSupplySchema } = require('../schemas/supply.schema');

router.get('/', async (req, res, next) => {
  try {
    const records = await service.find();
    res.json(records);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  validatorHandler(getSupplySchema, 'params'),
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
  validatorHandler(createSupplySchema, 'body'),
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
  validatorHandler(getSupplySchema, 'params'),
  validatorHandler(updateSupplySchema, 'body'),
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
  validatorHandler(getSupplySchema, 'params'),
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
