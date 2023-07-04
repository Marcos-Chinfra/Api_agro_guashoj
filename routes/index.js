const express = require('express');

const productsRouter = require('./products.router');
const categoriesRouter = require('./categories.router');
const CustomerRouter = require('./customer.router');
const ProviderRouter = require('./provider.router');
const SalesRouter = require('./sales.router');
const StaffRouter = require('./staff.router');
const InventoryRouter = require('./inventory.router');
const SoldProductsRouter = require('./soldProducts.router');
const SupplyRouter = require('./supply.router');

function routerAPI(app){
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/products', productsRouter);
  router.use('/categories', categoriesRouter);
  router.use('/customer', CustomerRouter);
  router.use('/provider', ProviderRouter);
  router.use('/sales', SalesRouter);
  router.use('/staff', StaffRouter);
  router.use('/inventory', InventoryRouter);
  router.use('/sold_products', SoldProductsRouter);
  router.use('/supplies', SupplyRouter)
}

module.exports = routerAPI;
