const { Model, DataTypes, Sequelize } = require('sequelize');

const CUSTOMER_TABLE = 'Customer';

const CustomerSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    type: DataTypes.STRING,
    unique: true,
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

class Customer extends Model{
  static associate(){
  }

  static config(sequelize){
    return {
      sequelize,
      tableName: CUSTOMER_TABLE,
      modelName: 'Customer',
      timestamps: false
    }
  }
};

module.exports = { CUSTOMER_TABLE, Customer, CustomerSchema }
