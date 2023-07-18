const { Model, DataTypes, Sequelize } = require('sequelize');

const { PRODUCT_TABLE } = require('./products.model');
const { STAFF_TABLE } = require('./staff.model');
const { ROUTES_TABLE } = require('./routes.model');

const GOODS_IN_TRANSIT_TABLE = 'Goods_in_transit_products';

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
  StaffId: {
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
  RouteId: {
    field: 'RouteId',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: ROUTES_TABLE,
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

class GoodsInTransit extends Model{
  static associate(models){
    this.belongsTo(models.Product , {as: 'product'});
    this.belongsTo(models.Staff , {as: 'Staff'});
    this.belongsTo(models.Routes , {as: 'Route'});
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
