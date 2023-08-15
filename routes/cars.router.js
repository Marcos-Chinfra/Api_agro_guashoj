const express = require('express');
const router = express.Router();

const validatorHandler = require('../api/middlewares/validator.handler');
const { createCarSchema, updateUserSchema, getUserSchema } = require('../schemas/cars.schema');

const CarsService = require('../services/cars.service');
const service = new CarsService();



router.get('/',
  async (req, res, next) => {
    try {
      const cars = await service.find();
      res.json(cars);
    } catch (error) {
      next(error);
    }
});

router.get('/:id',
  validatorHandler(getUserSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const car = await service.findOne(id);
      res.json(car);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  validatorHandler(createCarSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newCar = await service.create(body);
      res.status(201).json(newCar);
    } catch (error) {
      next(error);
    }
  }
);


router.patch('/:id',
  validatorHandler(getUserSchema, 'params'),
  validatorHandler(updateUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const car = await service.update(id, body);
      res.json(car);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id',
  validatorHandler(getUserSchema, 'params'),
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
