'use strict';

const { CATEGORY_TABLE, CategorySchema } = require('../models/category.model');
const { CUSTOMER_TABLE, CustomerSchema } = require('../models/customer.model');
const { INVENTORY_TABLE, InventorySchema } = require('../models/inventory.model');
const { PRODUCT_TABLE, ProductSchema } = require('../models/products.model');
const { PROVIDER_TABLE, ProviderSchema } = require('../models/providers.model');
const { SALES_TABLE, SalesSchema } = require('../models/sales.model');
const { SOLD_PRODUCTS_TABLE, SoldProductsSchema } = require('../models/soldProducts.mode');
const { STAFF_TABLE, StaffSchema } = require('../models/staff.model');
const { SUPPLIES_TABLE, SuppliesSchema } = require('../models/supply.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(CATEGORY_TABLE, CategorySchema);
    await queryInterface.createTable(CUSTOMER_TABLE, CustomerSchema);
    await queryInterface.createTable(INVENTORY_TABLE, InventorySchema);
    await queryInterface.createTable(PRODUCT_TABLE, ProductSchema);
    await queryInterface.createTable(PROVIDER_TABLE, ProviderSchema);
    await queryInterface.createTable(SALES_TABLE, SalesSchema);
    await queryInterface.createTable(SOLD_PRODUCTS_TABLE, SoldProductsSchema);
    await queryInterface.createTable(STAFF_TABLE, StaffSchema);
    await queryInterface.createTable(SUPPLIES_TABLE, SuppliesSchema);
  },

  async down (queryInterface) {
    await queryInterface.dropTable(CATEGORY_TABLE);
    await queryInterface.dropTable(CUSTOMER_TABLE);
    await queryInterface.dropTable(INVENTORY_TABLE);
    await queryInterface.dropTable(PRODUCT_TABLE);
    await queryInterface.dropTable(PROVIDER_TABLE);
    await queryInterface.dropTable(SALES_TABLE);
    await queryInterface.dropTable(SOLD_PRODUCTS_TABLE);
    await queryInterface.dropTable(STAFF_TABLE);
    await queryInterface.dropTable(SUPPLIES_TABLE);
  }
};
