const { Model, DataTypes, Sequelize } = require('sequelize');

const ROUTES_TABLE = 'Routes';

const RoutesSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW,
    timezone: 'America/Guatemala',
  }
}

class Routes extends Model{
  static associate(models){
    this.hasMany(models.Sales, {
      as: 'Sales',
      foreignKey: 'routeId'
    });
  }

  static config(sequelize){
    return {
      sequelize,
      tableName: ROUTES_TABLE,
      modelName: 'Routes',
      timestamps: false
    }
  }
};

module.exports = { ROUTES_TABLE, Routes, RoutesSchema }
