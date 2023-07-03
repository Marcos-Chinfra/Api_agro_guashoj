'use strict';


const { PRODUCT_TABLE, ProductSchema } = require('../models/products.model');
const { SALES_TABLE, SalesSchema } = require('../models/sales.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.addColumn(PRODUCT_TABLE, 'categoryId', ProductSchema.categoryId);
    await queryInterface.addColumn(SALES_TABLE, 'StaffId', SalesSchema.StaffId);
  },

  async down (queryInterface) {
    await queryInterface.removeColumn(PRODUCT_TABLE, 'categoryId');
    await queryInterface.removeColumn(SALES_TABLE, 'StaffId');
  }
};
