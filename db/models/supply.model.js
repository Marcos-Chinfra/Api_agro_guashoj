const { Model, DataTypes, Sequelize } = require('sequelize');

const { PROVIDER_TABLE } = require('./providers.model');

const SUPPLIES_TABLE = 'Supplies';

const SuppliesSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  product: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'Leche'
  },
  providerId: {
    field: 'provider_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: PROVIDER_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  amount:{
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  unit_of_measurement:{
    type: DataTypes.STRING,
    allowNull: false
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
    defaultValue: Sequelize.NOW
  }
}

class Supplies extends Model{
  static associate(models){
    this.belongsTo(models.Provider, {as: 'provider'});
  }

  static config(sequelize){
    return {
      sequelize,
      tableName: SUPPLIES_TABLE,
      modelName: 'Supply',
      timestamps: false
    }
  }
};

module.exports = { SUPPLIES_TABLE, Supplies, SuppliesSchema }
