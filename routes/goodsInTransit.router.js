const express = require('express');
const router = express.Router();

const GoodsInTransitService = require('../services/goodsInTransit.service');
const service = new GoodsInTransitService();

const validatorHandler = require('../middlewares/validator.handler');
const { createGoodsInTransitSchema, updateGoodsInTransitSchema, getGoodsInTransitSchema } = require('../schemas/goodsInTransit.schema');

router.get('/',
  async (req, res, next) => {
    try {
      const records = await service.find();
      res.json(records);
    } catch (error) {
      next(error);
    }
  });

router.get('/:id',
  validatorHandler(getGoodsInTransitSchema, 'params'),
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
  validatorHandler(createGoodsInTransitSchema, 'body'),
  async (req, res, next) => {
    try{
      const body = req.body;
      const newRecord = await service.create(body);
      res.status(201).json(newRecord)
    }catch(err){
      next(err);
    }
  }
);


router.patch('/:id',
  validatorHandler(getGoodsInTransitSchema, 'params'),
  validatorHandler(updateGoodsInTransitSchema, 'body'),
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
  validatorHandler(getGoodsInTransitSchema, 'params'),
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
