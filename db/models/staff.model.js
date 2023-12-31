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
    allowNull: false,
  },
  lastName: {
    field: 'last_name',
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  role: {
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: 'staff'
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW,
    timezone: 'America/Guatemala',
  }
}

class Staff extends Model{
  static associate(models){
    this.hasMany(models.Sales, {
      as: 'Sales',
      foreignKey: 'staffId'
    });
    this.hasMany(models.GoodsInTransit, {
      as: 'GoodsInTransit',
      foreignKey: "staffId"
    });
  }

  static config(sequelize){
    return {
      sequelize,
      tableName: STAFF_TABLE,
      modelName: 'Staff',
      timestamps: false
    }
  }
};

module.exports = { STAFF_TABLE, Staff, StaffSchema }
