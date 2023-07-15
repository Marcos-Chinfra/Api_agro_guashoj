const express = require('express');

const categoriesRouter = require('./categories.router');
const inventoryRouter = require('./inventory.router');
const productsRouter = require('./products.router');
const providerRouter = require('./provider.router');
const salesRouter = require('./sales.router');
const soldProductsRouter = require('./soldProducts.router');
const staffRouter = require('./staff.router');
const supplyRouter = require('./supply.router');
const returnedProductsRouter = require('./returnedProducts.router');
const unsoldProductsRouter = require('./unsoldProducts.router');
const routesRouter = require('./routes.router');
const goodsInTransitRouter = require('./goodsInTransit.router');


function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/categories', categoriesRouter);
  router.use('/inventory', inventoryRouter);
  router.use('/products', productsRouter);
  router.use('/providers', providerRouter);
  router.use('/sales', salesRouter);
  router.use('/sold-products', soldProductsRouter);
  router.use('/staff', staffRouter);
  router.use('/supplies', supplyRouter);
  router.use('/unsold-products', unsoldProductsRouter);
  router.use('/returned-products', returnedProductsRouter);
  router.use('/goods-in-transit', goodsInTransitRouter);
  router.use('/routes', routesRouter);
}

module.exports = routerApi;
