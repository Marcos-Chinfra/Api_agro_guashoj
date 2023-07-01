const express = require('express');

const CustomerService = require('../services/customer.service');
const validatorHandler = require('../middlewares/validator.handler.js');
const { createCustomerSchema, getCustomerSchema, updateCustomerSchema } = require('../schemas/customer.schema');

const service = new CustomerService();
const router = express.Router();


router.get('/',
  async (req, res, next) => {
    try{
      const customers = await service.find();
      res.json(customers)
    }catch(err){
      next(err);
    }
  }
);

router.get('/:id',
  validatorHandler(getCustomerSchema, 'params'),
  async (req, res, next) => {
    try{
      const { id } = req.params;
      const customer = await service.findOne(id);
      res.json(customer);
    }catch(err){
      next(err);
    }
  }
);

router.post('/',
  validatorHandler(createCustomerSchema, 'body'),
  async (req, res, next) => {
    try{
      const body = req.body;
      const newCustomer = await service.create(body);
      res.status(201).json(newCustomer)
    }catch(err){next(err);}
  }
);

router.patch('/:id',
  validatorHandler(getCustomerSchema, 'params'),
  validatorHandler(updateCustomerSchema, 'body'),
  async (req, res, next) => {
    try{
      const { id } = req.params;
      const body = req.body;
      const customerChanged = await service.update(id, body);
      res.status(201).json(customerChanged);
    }catch(err){next(err);}
  }
);

router.delete('/:id',
  validatorHandler(getCustomerSchema, 'params'),
  async (req, res, next) => {
    try{
      const { id } = req.params;
      await service.delete(id);
      res.status(201).json({id});
    }catch(err){next(err);}
  }
);

module.exports = router;
