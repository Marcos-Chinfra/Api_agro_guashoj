const express = require('express');
const router = express.Router();

const ShiftOutputService = require('../services/shiftOutput.service');
const service = new ShiftOutputService();

const validatorHandler = require('../middlewares/validator.handler');
const { createShiftOutputSchema, getShiftOutputSchema, updateShiftOutputSchema, queryParamsSchema } = require('../schemas/shiftOutput.schema');
const { checkRoles } = require('../middlewares/auth.handler');

router.get('/',
  validatorHandler(queryParamsSchema, 'query'),
  async (req, res, next) => {
    try {
      const records = await service.find(req.query);
      res.json(records);
    } catch (error) {
      next(error);
    }
  });

router.get('/:id',
  validatorHandler(getShiftOutputSchema, 'params'),
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
  validatorHandler(createShiftOutputSchema, 'body'),
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
  validatorHandler(getShiftOutputSchema, 'params'),
  validatorHandler(updateShiftOutputSchema, 'body'),
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
  checkRoles(['owner', 'admin']) ,
  validatorHandler(getShiftOutputSchema, 'params'),
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
