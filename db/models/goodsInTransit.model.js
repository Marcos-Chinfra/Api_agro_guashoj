const { Model, DataTypes, Sequelize } = require('sequelize');

const { PRODUCT_TABLE } = require('./products.model');
const { STAFF_TABLE } = require('./staff.model');
const { SALES_TABLE } = require('./sales.model');

const GOODS_IN_TRANSIT_TABLE = 'Goods_in_transit';

const GoodsInTransitSchema = {
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
  staffId: {
    field: 'staff_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: STAFF_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  saleId: {
    field: 'saleI_d',
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

class GoodsInTransit extends Model{
  static associate(models){
    this.belongsTo(models.Product , {as: 'product'});
    this.belongsTo(models.Staff , {as: 'staff'});
    this.belongsTo(models.Sales , {as: 'sale'});
  }

  static config(sequelize){
    return {
      sequelize,
      tableName: GOODS_IN_TRANSIT_TABLE,
      modelName: 'GoodsInTransit',
      timestamps: false
    }
  }
};

module.exports = { GOODS_IN_TRANSIT_TABLE, GoodsInTransitSchema, GoodsInTransit }
