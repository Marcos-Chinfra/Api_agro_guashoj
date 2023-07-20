const { Model, DataTypes, Sequelize } = require('sequelize');
const { STAFF_TABLE } = require('./staff.model');
const { ROUTES_TABLE } = require('./routes.model');

const SALES_TABLE = 'Sales';

const SalesSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  staffId: {
    field: 'StaffId',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: STAFF_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  routeId: {
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
  total:{
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  observations:{
    type: DataTypes.TEXT,
    allowNull: false,
    defaultValue: 'Ninguna'
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  }
}

class Sales extends Model{
  static associate(models){
    this.belongsTo(models.Staff, {
      as: 'staff'
    });
    this.belongsTo(models.Routes, {
      as: 'route'
    });
    this.hasMany(models.ReturnedProducts,{
      as: 'ReturnedProducts',
      foreignKey: 'saleId'
    });
    this.hasMany(models.SoldProducts, {
      as: 'SoldProducts',
      foreignKey: "saleId"
    });
    this.hasMany(models.UnsoldProducts, {
      as: 'UnsoldProducts',
      foreignKey: "saleId"
    });
    this.hasMany(models.GoodsInTransit, {
      as: 'GoodsInTransit',
      foreignKey: "saleId"
    });
  }

  static config(sequelize){
    return {
      sequelize,
      tableName: SALES_TABLE,
      modelName: 'Sales',
      timestamps: false
    }
  }
};

module.exports = { SALES_TABLE, Sales, SalesSchema }
