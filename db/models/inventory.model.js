const { Model, DataTypes, Sequelize } = require('sequelize');

const { PRODUCT_TABLE } = require('./products.model');

const INVENTORY_TABLE = 'Inventory';

const InventorySchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  productId:{
    field: 'Product_id',
    allowNull:false,
    type: DataTypes.INTEGER,
    references: {
      model: PRODUCT_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  amount: {
    field: 'stock',
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

class Inventory extends Model{
  static associate(models){
    this.belongsTo(models.Product, {as: 'Product'})
  }


  static config(sequelize){
    return {
      sequelize,
      tableName: INVENTORY_TABLE,
      modelName: 'Inventory',
      timestamps: false
    }
  }
};

module.exports = { INVENTORY_TABLE, Inventory, InventorySchema }
