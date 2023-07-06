const { Model, DataTypes, Sequelize } = require('sequelize');

const { PRODUCT_TABLE } = require('./products.model');
const { SALES_TABLE } = require('./sales.model');

const SOLD_PRODUCTS_TABLE = 'sold_products';

const SoldProductsSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  SaleId: {
    field: 'sale_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: SALES_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  productId: {
    field: 'product_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: PRODUCT_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  },
  amount:{
    allowNull: false,
    type: DataTypes.INTEGER,
  }
}

class SoldProducts extends Model{
  // static associate(){
  // }

  static config(sequelize){
    return {
      sequelize,
      tableName: SOLD_PRODUCTS_TABLE,
      modelName: 'SoldProducts',
      timestamps: false
    }
  }
};

module.exports = { SOLD_PRODUCTS_TABLE, SoldProducts, SoldProductsSchema }
