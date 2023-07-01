'use strict';

const { CATEGORY_TABLE, CategorySchema } = require('../models/category.model');
const { CUSTOMER_TABLE, CustomerSchema } = require('../models/customer.model');
const { PRODUCT_TABLE, ProductSchema } = require('../models/products.model');
const { PROVIDER_TABLE, ProviderSchema } = require('../models/providers.model');
const { SALES_TABLE, SalesSchema } = require('../models/sales.model');
const { STAFF_TABLE, StaffSchema } = require('../models/staff.model');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(CATEGORY_TABLE, CategorySchema);
    await queryInterface.createTable(CUSTOMER_TABLE, CustomerSchema);
    await queryInterface.createTable(PRODUCT_TABLE, ProductSchema);
    await queryInterface.createTable(PROVIDER_TABLE, ProviderSchema);
    await queryInterface.createTable(SALES_TABLE, SalesSchema);
    await queryInterface.createTable(STAFF_TABLE, StaffSchema);
  },

  async down (queryInterface) {
    await queryInterface.dropTable(CATEGORY_TABLE);
    await queryInterface.dropTable(CUSTOMER_TABLE);
    await queryInterface.dropTable(PRODUCT_TABLE);
    await queryInterface.dropTable(PROVIDER_TABLE);
    await queryInterface.dropTable(SALES_TABLE);
    await queryInterface.dropTable(STAFF_TABLE);
  }
};

// const { INVENTORY_TABLE, InventorySchema} = require('../models/inventory.model');
// const { SOLD_PRODUCTS_TABLE, SoldProductsSchema } = require('../models/soldProducts.mode');
// const { SUPPLIES_TABLE, SuppliesSchema } = require('../models/supply.model');

// await queryInterface.createTable(INVENTORY_TABLE, InventorySchema);
// await queryInterface.createTable(SOLD_PRODUCTS_TABLE, SoldProductsSchema);
// await queryInterface.createTable(SUPPLIES_TABLE, SuppliesSchema);

// await queryInterface.dropTable(INVENTORY_TABLE);
// await queryInterface.dropTable(SOLD_PRODUCTS_TABLE);
// await queryInterface.dropTable(SUPPLIES_TABLE);

     // await queryInterface.createTable(CATEGORY_TABLE, {
    //   id: {
    //     allowNull: false,
    //     autoIncrement: true,
    //     primaryKey: true,
    //     type: DataTypes.INTEGER
    //   },
    //   name: {
    //     type: DataTypes.STRING,
    //     unique: true,
    //     allowNull: false,
    //   },
    //   createAt: {
    //     allowNull: false,
    //     type: DataTypes.DATE,
    //     field: 'create_at',
    //     defaultValue: Sequelize.NOW
    //   }
    // });
    // await queryInterface.createTable(CUSTOMER_TABLE, {
    //   id: {
    //     allowNull: false,
    //     autoIncrement: true,
    //     primaryKey: true,
    //     type: DataTypes.INTEGER
    //   },
    //   name: {
    //     type: DataTypes.STRING,
    //     unique: true,
    //     allowNull: false,
    //   },
    //   createAt: {
    //     allowNull: false,
    //     type: DataTypes.DATE,
    //     field: 'create_at',
    //     defaultValue: Sequelize.NOW
    //   }
    // });
    // await queryInterface.createTable(INVENTORY_TABLE, {
    //   id: {
    //     allowNull: false,
    //     autoIncrement: true,
    //     primaryKey: true,
    //     type: DataTypes.INTEGER
    //   },
    //   productId:{
    //     field: 'Product_id',
    //     allowNull:false,
    //     type: DataTypes.INTEGER,
    //     references: {
    //       model: PRODUCT_TABLE,
    //       key: 'id'
    //     },
    //     onUpdate: 'CASCADE',
    //     onDelete: 'SET NULL'
    //   },
    //   amount: {
    //     field: 'stock',
    //     type: DataTypes.STRING,
    //     allowNull: false,
    //   },
    //   createdAt: {
    //     allowNull: false,
    //     type: DataTypes.DATE,
    //     field: 'created_at',
    //     defaultValue: Sequelize.NOW,
    //   }
    // });
    // await queryInterface.createTable(PRODUCT_TABLE, {
    //   id: {
    //     allowNull: false,
    //     autoIncrement: true,
    //     primaryKey: true,
    //     type: DataTypes.INTEGER
    //   },
    //   name: {
    //     type: DataTypes.STRING,
    //     allowNull: false,
    //     unique: true
    //   },
    //   description: {
    //     type: DataTypes.TEXT,
    //     allowNull: false,
    //   },
    //   price: {
    //     type: DataTypes.FLOAT,
    //     allowNull: false,
    //   },
    //   createdAt: {
    //     allowNull: false,
    //     type: DataTypes.DATE,
    //     field: 'created_at',
    //     defaultValue: Sequelize.NOW,
    //   },
    //   categoryId: {
    //     field: 'category_id',
    //     allowNull: false,
    //     type: DataTypes.INTEGER,
    //     references: {
    //       model: CATEGORY_TABLE,
    //       key: 'id'
    //     },
    //     onUpdate: 'CASCADE',
    //     onDelete: 'SET NULL'
    //   }
    // });
    // await queryInterface.createTable(PROVIDER_TABLE, {
    //   id: {
    //     allowNull: false,
    //     autoIncrement: true,
    //     primaryKey: true,
    //     type: DataTypes.INTEGER
    //   },
    //   name: {
    //     type: DataTypes.STRING,
    //     unique: true,
    //     allowNull: false,
    //   },
    //   company:{
    //     type: DataTypes.STRING,
    //     allowNull: false,
    //   },
    //   createAt: {
    //     allowNull: false,
    //     type: DataTypes.DATE,
    //     field: 'create_at',
    //     defaultValue: Sequelize.NOW
    //   }
    // });
    // await queryInterface.createTable(SALES_TABLE, {
    //   id: {
    //     allowNull: false,
    //     autoIncrement: true,
    //     primaryKey: true,
    //     type: DataTypes.INTEGER
    //   },
    //   StaffId: {
    //     field: 'staff_id',
    //     allowNull: false,
    //     type: DataTypes.INTEGER,
    //     references: {
    //       model: STAFF_TABLE,
    //       key: 'id'
    //     },
    //     onUpdate: 'CASCADE',
    //     onDelete: 'SET NULL'
    //   },
    //   description:{
    //     type: DataTypes.TEXT,
    //     allowNull: false
    //   },
    //   createAt: {
    //     allowNull: false,
    //     type: DataTypes.DATE,
    //     field: 'create_at',
    //     defaultValue: Sequelize.NOW
    //   },
    //   total:{
    //     type: DataTypes.VIRTUAL,
    //     get(){
    //       if(this.items.length > 0){
    //         return this.items.reduce((total, item) => {
    //           return total + (item.price + item.OrderProduct.amount)
    //         }, 0);
    //       };
    //       return 0;
    //     }
    //   }
    // });
    // await queryInterface.createTable(SOLD_PRODUCTS_TABLE, {
    //   id: {
    //     allowNull: false,
    //     autoIncrement: true,
    //     primaryKey: true,
    //     type: DataTypes.INTEGER
    //   },
    //   SaleId: {
    //     field: 'sale_id',
    //     allowNull: false,
    //     type: DataTypes.INTEGER,
    //     references: {
    //       model: SALES_TABLE,
    //       key: 'id'
    //     },
    //     onUpdate: 'CASCADE',
    //     onDelete: 'SET NULL'
    //   },
    //   productId: {
    //     field: 'product_id',
    //     allowNull: false,
    //     type: DataTypes.INTEGER,
    //     references: {
    //       model: PRODUCT_TABLE,
    //       key: 'id'
    //     },
    //     onUpdate: 'CASCADE',
    //     onDelete: 'SET NULL'
    //   },
    //   createAt: {
    //     allowNull: false,
    //     type: DataTypes.DATE,
    //     field: 'create_at',
    //     defaultValue: Sequelize.NOW
    //   },
    //   amount:{
    //     allowNull: false,
    //     type: DataTypes.INTEGER,
    //   }
    // });
    // await queryInterface.createTable(STAFF_TABLE,  {
    //   id: {
    //     allowNull: false,
    //     autoIncrement: true,
    //     primaryKey: true,
    //     type: DataTypes.INTEGER
    //   },
    //   name: {
    //     type: DataTypes.STRING,
    //     unique: true,
    //     allowNull: false,
    //   },
    //   createAt: {
    //     allowNull: false,
    //     type: DataTypes.DATE,
    //     field: 'create_at',
    //     defaultValue: Sequelize.NOW
    //   }
    // });
    // await queryInterface.createTable(SUPPLIES_TABLE, {
    //   id: {
    //     allowNull: false,
    //     autoIncrement: true,
    //     primaryKey: true,
    //     type: DataTypes.INTEGER
    //   },
    //   productId: {
    //     field: 'product_id',
    //     allowNull: false,
    //     type: DataTypes.INTEGER,
    //     references: {
    //       model: PRODUCT_TABLE,
    //       key: 'id'
    //     },
    //     onUpdate: 'CASCADE',
    //     onDelete: 'SET NULL'
    //   },
    //   providerId: {
    //     field: 'provider_id',
    //     allowNull: false,
    //     type: DataTypes.INTEGER,
    //     references: {
    //       model: PROVIDER_TABLE,
    //       key: 'id'
    //     },
    //     onUpdate: 'CASCADE',
    //     onDelete: 'SET NULL'
    //   },
    //   amount:{
    //     allowNull: false,
    //     type: DataTypes.INTEGER,
    //   },
    //   createAt: {
    //     allowNull: false,
    //     type: DataTypes.DATE,
    //     field: 'create_at',
    //     defaultValue: Sequelize.NOW
    //   }
    // });
