const express = require('express');
const router = express.Router();

const RoutesService = require('../services/route.service');
const service = new RoutesService();

const validatorHandler = require('../middlewares/validator.handler');
const { createRouteSchema, updateRouteSchema, getRouteSchema } = require('../schemas/routes.schema');
const { checkRoles } = require('../middlewares/auth.handler');

router.get('/',
  checkRoles(['owner', 'admin', 'worker']) ,
  async (req, res, next) => {
    try {
      const routes = await service.find();
      res.json(routes);
    } catch (error) {
      next(error);
    }
});

router.get('/:id',
  checkRoles(['owner', 'admin', 'worker']) ,
  validatorHandler(getRouteSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const route = await service.findOne(id);
      res.json(route);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
checkRoles(['owner']) ,
  validatorHandler(createRouteSchema, 'body'),
  async (req, res, next) => {
    try{
      const body = req.body;
      const newRoute = await service.create(body);
      res.status(201).json(newRoute)
    }catch(err){
      next(err);
    }
  }
);


router.patch('/:id',
checkRoles(['owner']) ,
  validatorHandler(getRouteSchema, 'params'),
  validatorHandler(updateRouteSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const route = await service.update(id, body);
      res.json(route);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id',
checkRoles(['owner']) ,
  validatorHandler(getRouteSchema, 'params'),
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
