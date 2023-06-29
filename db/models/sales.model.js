const { Model, DataTypes, Sequelize } = require('sequelize');

const SALES_TABLE = 'Sales';

const SalesSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  StaffId: {
    field: 'staff_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: SALES_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  description:{
    type: DataTypes.TEXT,
    allowNull: false
  },
  createAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  },
  total:{
    allowNull: false,
    type: DataTypes.FLOAT
  }
}

class Sales extends Model{
  static associate(models){
    this.hasMany(models.SoldProducts, {
      as: 'soldProducts',
      foreignKey:'SaleId'
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
