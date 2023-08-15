const { Model, DataTypes, Sequelize } = require('sequelize');

const CARS_TABLE = 'Cars';

const CarsSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  model: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  plate: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  spend: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  server: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  mileage: {
    type: DataTypes.INTEGER,
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

class Cars extends Model{
  static associate(models){
    this.hasMany(models.Sales, {
      as: 'Sales',
      foreignKey: 'car_id'
    });
  }

  static config(sequelize){
    return {
      sequelize,
      tableName: CARS_TABLE,
      modelName: 'Cars',
      timestamps: false
    }
  }
};

module.exports = { CARS_TABLE, Cars, CarsSchema }
