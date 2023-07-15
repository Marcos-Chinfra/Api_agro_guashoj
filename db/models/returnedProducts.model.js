const { Model, DataTypes, Sequelize } = require('sequelize');

const { PRODUCT_TABLE } = require('./products.model');
const { SALES_TABLE } = require('./sales.model');

const RETURNED_PRODUCTS_TABLE = 'returned_products';

const ReturnedProductsSchema = {
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
  amount:{
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  }
}

class ReturnedProducts extends Model{
  static associate(models){
    this.belongsTo(models.Sales, {as: 'sales'});
    this.belongsTo(models.Product, {as: 'Product'});
  }

  static config(sequelize){
    return {
      sequelize,
      tableName: RETURNED_PRODUCTS_TABLE,
      modelName: 'ReturnedProducts',
      timestamps: false
    }
  }
};

module.exports = { RETURNED_PRODUCTS_TABLE, ReturnedProductsSchema, ReturnedProducts }
