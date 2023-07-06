const { Model, DataTypes, Sequelize } = require('sequelize');
const { STAFF_TABLE } = require('./staff.model');

const SALES_TABLE = 'Sales';

const SalesSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  StaffId: {
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
  description:{
    type: DataTypes.TEXT,
    allowNull: false
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
      as: 'Staff'
    });
    this.belongsToMany(models.Product, {
      as:'salesMade',
      through: models.SoldProducts,
      foreignKey: 'SaleId',
      otherKey: 'productId'
    })
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
