const express = require('express');
const router = express.Router();

const InventoryService = require('../services/inventory.service');
const service = new InventoryService();

const validatorHandler = require('../middlewares/validator.handler');
const { createInventorySchema, updateInventorySchema, getInventorySchema } = require('../schemas/inventory.schema');

router.get('/', async (req, res, next) => {
  try {
    const records = await service.find();
    res.json(records);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  validatorHandler(getInventorySchema, 'params'),
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
  validatorHandler(createInventorySchema, 'body'),
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
  validatorHandler(getInventorySchema, 'params'),
  validatorHandler(updateInventorySchema, 'body'),
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

// router.patch('/product-update/:id',
//   validatorHandler(getInventorySchema, 'params'),
//   validatorHandler(updateInventorySchema, 'body'),
//   async (req, res, next) => {
//     try {
//       const { id } = req.params;
//       const body = req.body;
//       const record = await service.updateIncomings(id, body);
//       res.json(record);
//     } catch (error) {
//       next(error);
//     }
//   }
// );

router.delete('/:id',
  validatorHandler(getInventorySchema, 'params'),
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
