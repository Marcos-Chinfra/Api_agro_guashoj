const express = require('express');
const router = express.Router();

const ProviderService = require('../services/provider.service');
const service = new ProviderService();

const validatorHandler = require('../api/middlewares/validator.handler');
const { getProviderSchema, updateProviderSchema, createProviderSchema } = require('../schemas/provider.schema');


router.get('/',
  async (req, res, next) => {
    try{
      const providers = await service.find();
      res.json(providers);
    }catch(err){
      next(err);
    }
  }
);

router.get('/:id',
  validatorHandler(getProviderSchema, 'params'),
  async (req, res, next) => {
    try{
      const  { id } = req.params;
      const provider = await service.findOne(id);
      res.json(provider);
    }catch(err){
      next(err);
    }
  }
);

router.post('/',
  validatorHandler(createProviderSchema, 'body'),
  async (req, res, next) => {
    try{
      const body = req.body;
      const newProvider = await service.create(body);
      res.status(201).json(newProvider);
    }catch(err){
      next(err);
    }
  }
);

router.patch('/:id',
  validatorHandler(getProviderSchema, 'params'),
  validatorHandler(updateProviderSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const provider = await service.update(id, body);
      res.status(201).json(provider)
    } catch (error) {
      next(error)
    }
  }
);

router.delete('/:id',
  validatorHandler(getProviderSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await service.delete(id);
      res.status(201).json({id});
    } catch (error) {
      next(error)
    }
  }

);

module.exports = router
