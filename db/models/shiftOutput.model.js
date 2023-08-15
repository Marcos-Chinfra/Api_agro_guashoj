const { Model, DataTypes, Sequelize } = require('sequelize');

const { PRODUCT_TABLE } = require('./products.model');

const SHIFT_OUTPUT_TABLE = 'Shift_output';

const ShiftOutputSchema = {
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
  amount:{
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  workingDay: {
    field: 'working_day',
    type: DataTypes.ENUM('mañana', 'tarde'),
    allowNull: false
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW,
    timezone: 'America/Guatemala',
  }
}

class ShiftOutput extends Model{
  static associate(models){
    this.belongsTo(models.Product, {as: 'product'});
  }

  static config(sequelize){
    return {
      sequelize,
      tableName: SHIFT_OUTPUT_TABLE,
      modelName: 'ShiftOutput',
      timestamps: false
    }
  }
};

module.exports = { SHIFT_OUTPUT_TABLE, ShiftOutput, ShiftOutputSchema }
