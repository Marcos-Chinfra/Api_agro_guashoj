'use strict';

const { INVENTORY_TABLE, InventorySchema} = require('../models/inventory.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.addColumn(INVENTORY_TABLE, 'amount', InventorySchema.amount);
  },

  async down (queryInterface) {
    await queryInterface.removeColumn(INVENTORY_TABLE, 'amount');
  }
};
