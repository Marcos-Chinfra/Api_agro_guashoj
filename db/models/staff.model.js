const { Model, DataTypes, Sequelize } = require('sequelize');

const STAFF_TABLE = 'Staff';

const StaffSchema = {
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
  createAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  }
}

class Staff extends Model{
  static associate(models){

  }

  static config(sequelize){
    return {
      sequelize,
      tableName: STAFF_TABLE,
      modelName: 'Customer',
      timestamps: false
    }
  }
};

module.exports = { STAFF_TABLE, Staff, StaffSchema }
