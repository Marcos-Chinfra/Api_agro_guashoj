const express = require('express');
const router = express.Router();

const StaffService = require('../services/staff.service');
const service = new StaffService();

const validatorHandler = require('../middlewares/validator.handler.js');
const { createStaffSchema, updateStaffSchema, getStaffSchema} = require('../schemas/staff.schema');
const passport = require('passport');


router.get('/',
  passport.authenticate('jwt', {session: false}),
  async (req, res, next) => {
    try{
      const staff = await service.find();
      res.json(staff)
    }catch(err){
      next(err);
    }
  }
);

router.get('/:id',
  validatorHandler(getStaffSchema, 'params'),
  async (req, res, next) => {
    try{
      const { id } = req.params;
      const staff = await service.findOne(id);
      res.json(staff);
    }catch(err){
      next(err);
    }
  }
);

router.post('/',
  passport.authenticate('jwt', {session: false}),
  validatorHandler(createStaffSchema, 'body'),
  async (req, res, next) => {
    try{
      const body = req.body;
      const newStaff = await service.create(body);
      res.status(201).json(newStaff)
    }catch(err){
      next(err);
    }
  }
);

router.patch('/:id',
  validatorHandler(getStaffSchema, 'params'),
  validatorHandler(updateStaffSchema, 'body'),
  async (req, res, next) => {
    try{
      const { id } = req.params;
      const body = req.body;
      const staffChanged = await service.update(id, body);
      res.status(201).json(staffChanged);
    }catch(err){
      next(err);
    }
  }
);

router.delete('/:id',
  validatorHandler(getStaffSchema, 'params'),
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
