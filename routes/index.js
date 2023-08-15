const express = require('express');

const categoriesRouter = require('./categories.router');
<<<<<<< HEAD:routes/index.js
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
const shiftOutputRouter = require('./shiftOutput.router');
const userRouter = require('./user.router');
const carsRouter = require('./cars.router');
const authRouter = require('./auth.router');
const { checkApiKey, checkRoles } = require('../middlewares/auth.handler');
const passport = require('passport');
=======
const ProviderRouter = require('./provider.router');
const SalesRouter = require('./sales.router');
const StaffRouter = require('./staff.router');
const InventoryRouter = require('./inventory.router');
const SoldProductsRouter = require('./soldProducts.router');
const SupplyRouter = require('./supply.router');
>>>>>>> 0f4a8c54c79871b49a81e29503514f3763ce5ff9:api/routes/index.js


function routerApi(app) {
  const router = express.Router();
<<<<<<< HEAD:routes/index.js
  app.use('/api/v1', checkApiKey ,router);
  router.use('/categories', passport.authenticate('jwt', {session: false}),  categoriesRouter);
  router.use('/inventory', passport.authenticate('jwt', {session: false}), checkRoles(['owner', 'admin']) , inventoryRouter);
  router.use('/products', passport.authenticate('jwt', {session: false}), productsRouter);
  router.use('/providers', passport.authenticate('jwt', {session: false}),  providerRouter);
  router.use('/sales', passport.authenticate('jwt', {session: false}), checkRoles(['owner']) , salesRouter);
  router.use('/sold-products', passport.authenticate('jwt', {session: false}), checkRoles(['owner', 'admin']) , soldProductsRouter);
  router.use('/staff', passport.authenticate('jwt', {session: false}), checkRoles(['owner']) , staffRouter);
  router.use('/supplies', passport.authenticate('jwt', {session: false}), supplyRouter);
  router.use('/unsold-products', passport.authenticate('jwt', {session: false}), checkRoles(['owner', 'admin']) , unsoldProductsRouter);
  router.use('/returned-products', passport.authenticate('jwt', {session: false}), checkRoles(['owner', 'admin']) , returnedProductsRouter);
  router.use('/goods-in-transit', passport.authenticate('jwt', {session: false}), checkRoles(['owner', 'admin']) , goodsInTransitRouter);
  router.use('/routes', passport.authenticate('jwt', {session: false}), checkRoles(['owner', 'admin']) , routesRouter);
  router.use('/shift-output', passport.authenticate('jwt', {session: false}),  shiftOutputRouter);
  router.use('/cars', passport.authenticate('jwt', {session: false}), checkRoles(['owner', 'admin']) , carsRouter);
  router.use('/users',  userRouter);
  router.use('/auth', authRouter);
=======
  app.use('/api/v1', router);
  router.use('/products', productsRouter);
  router.use('/categories', categoriesRouter);
  router.use('/provider', ProviderRouter);
  router.use('/sales', SalesRouter);
  router.use('/staff', StaffRouter);
  router.use('/inventory', InventoryRouter);
  router.use('/sold_products', SoldProductsRouter);
  router.use('/supplies', SupplyRouter)
>>>>>>> 0f4a8c54c79871b49a81e29503514f3763ce5ff9:api/routes/index.js
}

module.exports = routerApi;
