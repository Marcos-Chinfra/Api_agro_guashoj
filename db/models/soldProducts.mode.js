const { Model, DataTypes, Sequelize } = require('sequelize');

const { PRODUCT_TABLE } = require('./products.model');
const { SALES_TABLE } = require('./sales.model');

const SOLD_PRODUCTS_TABLE = 'Sold_products';

const SoldProductsSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
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
  saleId: {
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
  amount:{
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW,
    timezone: 'America/Guatemala',
  }
}

class SoldProducts extends Model{
  static associate(models){
    this.belongsTo(models.Sales, {as: 'sale'});
    this.belongsTo(models.Product, {as: 'product'});
  }

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
