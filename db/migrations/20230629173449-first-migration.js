'use strict';

const { CATEGORY_TABLE, CategorySchema } = require('../models/category.model');
const { PRODUCT_TABLE, ProductSchema } = require('../models/products.model');
const { PROVIDER_TABLE, ProviderSchema } = require('../models/providers.model');
const { SALES_TABLE, SalesSchema } = require('../models/sales.model');
const { STAFF_TABLE, StaffSchema } = require('../models/staff.model');
const { INVENTORY_TABLE, InventorySchema} = require('../models/inventory.model');
const { SOLD_PRODUCTS_TABLE, SoldProductsSchema } = require('../models/soldProducts.mode');
const { SUPPLIES_TABLE, SuppliesSchema } = require('../models/supply.model');
const { GOODS_IN_TRANSIT_TABLE, GoodsInTransitSchema } = require('../models/goodsInTransit.model');
const { RETURNED_PRODUCTS_TABLE, ReturnedProductsSchema } = require('../models/returnedProducts.model');
const { ROUTES_TABLE, RoutesSchema } = require('../models/routes.model');
const { UNSOLD_PRODUCTS_TABLE, UnsoldProductsSchema } = require('../models/unsoldProducts.model');
const { SHIFT_OUTPUT_TABLE, ShiftOutputSchema } = require('../models/shiftOutput.model');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(CATEGORY_TABLE, CategorySchema);
    await queryInterface.createTable(PRODUCT_TABLE, ProductSchema);
    await queryInterface.createTable(PROVIDER_TABLE, ProviderSchema);
    await queryInterface.createTable(STAFF_TABLE, StaffSchema);
    await queryInterface.createTable(INVENTORY_TABLE, InventorySchema);
    await queryInterface.createTable(ROUTES_TABLE, RoutesSchema);
    await queryInterface.createTable(SALES_TABLE, SalesSchema);
    await queryInterface.createTable(SOLD_PRODUCTS_TABLE, SoldProductsSchema);
    await queryInterface.createTable(SUPPLIES_TABLE, SuppliesSchema);
    await queryInterface.createTable(GOODS_IN_TRANSIT_TABLE, GoodsInTransitSchema);
    await queryInterface.createTable(RETURNED_PRODUCTS_TABLE, ReturnedProductsSchema);
    await queryInterface.createTable(UNSOLD_PRODUCTS_TABLE, UnsoldProductsSchema);
    await queryInterface.createTable(SHIFT_OUTPUT_TABLE, ShiftOutputSchema);
  },

  async down (queryInterface) {
    await queryInterface.dropTable(CATEGORY_TABLE);
    await queryInterface.dropTable(PRODUCT_TABLE);
    await queryInterface.dropTable(PROVIDER_TABLE);
    await queryInterface.dropTable(STAFF_TABLE);
    await queryInterface.dropTable(INVENTORY_TABLE);
    await queryInterface.dropTable(ROUTES_TABLE);
    await queryInterface.dropTable(SALES_TABLE);
    await queryInterface.dropTable(SOLD_PRODUCTS_TABLE);
    await queryInterface.dropTable(SUPPLIES_TABLE);
    await queryInterface.dropTable(GOODS_IN_TRANSIT_TABLE);
    await queryInterface.dropTable(RETURNED_PRODUCTS_TABLE);
    await queryInterface.dropTable(UNSOLD_PRODUCTS_TABLE);
    await queryInterface.dropTable(SHIFT_OUTPUT_TABLE);
  }
};
