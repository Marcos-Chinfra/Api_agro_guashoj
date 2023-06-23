const { Model, DataTypes, Sequelize } = require('sequelize');

const { PRODUCT_TABLE } = require('./products.model');
const { PROVIDER_TABLE } = require('./providers.model');

const SUPPLIES_TABLE = 'Supplies';

const SuppliesSchema = {
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
  providerId: {
    field: 'provider_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: PROVIDER_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  amount:{
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  createAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  }
}

class Supplies extends Model{
  static associate(models){
    this.belongsTo(models.Product, {as: 'product'});
    this.belongsTo(models.Provider, {as: 'provider'});
  }

  static config(sequelize){
    return {
      sequelize,
      tableName: SUPPLY_TABLE,
      modelName: 'Supply',
      timestamps: false
    }
  }
};

module.exports = { SUPPLIES_TABLE, Supplies, SuppliesSchema }
