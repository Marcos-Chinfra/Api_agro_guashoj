const { Model, DataTypes, Sequelize } = require('sequelize');
const { PRODUCT_TABLE } = require('./products.model')
const INVENTORY_TABLE = 'products';

const InventorySchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  product:{
    field: 'Product_name',
    allowNull:false,
    type: DataTypes.STRING,
    references: {
      model: PRODUCT_TABLE,
      key: 'name'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  entries:{
    field: 'entry',
    type: DataTypes.INTEGER,
    references:{
      model: PRODUCT_TABLE,
      key: 'amount'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  stock: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  }
}
