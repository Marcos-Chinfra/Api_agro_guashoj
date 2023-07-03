'use strict';

const { INVENTORY_TABLE, InventorySchema} = require('../models/inventory.model');
const { SOLD_PRODUCTS_TABLE, SoldProductsSchema } = require('../models/soldProducts.mode');
const { SUPPLIES_TABLE, SuppliesSchema } = require('../models/supply.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(INVENTORY_TABLE, InventorySchema);
    await queryInterface.createTable(SOLD_PRODUCTS_TABLE, SoldProductsSchema);
    await queryInterface.createTable(SUPPLIES_TABLE, SuppliesSchema);
  },

  async down (queryInterface) {
    await queryInterface.dropTable(INVENTORY_TABLE);
    await queryInterface.dropTable(SOLD_PRODUCTS_TABLE);
    await queryInterface.dropTable(SUPPLIES_TABLE);
  }
};
