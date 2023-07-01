const express = require('express');

const productsRouter = require('./products.router');
const categoriesRouter = require('./categories.router');
const CustomerRouter = require('./customer.router');
const ProviderRouter = require('./provider.router');
const SalesRouter = require('./sales.router');
const StaffRouter = require('./staff.router');

function routerAPI(app){
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/products', productsRouter);
  router.use('/categories', categoriesRouter);
  router.use('/customer', CustomerRouter);
  router.use('/provider', ProviderRouter);
  router.use('/sales', SalesRouter);
  router.use('/staff', StaffRouter);
}

module.exports = routerAPI;
