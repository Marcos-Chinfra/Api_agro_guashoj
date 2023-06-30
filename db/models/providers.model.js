const { Model, DataTypes, Sequelize } = require('sequelize');

const PROVIDER_TABLE = 'Providers';

const ProviderSchema = {
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
  company:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  createAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  }
}

class Provider extends Model{
  static associate(models){
    this.hasMany(models.Supply, {
      as: 'supply',
      foreignKey:'providerId'
    });
  }

  static config(sequelize){
    return {
      sequelize,
      tableName: PROVIDER_TABLE,
      modelName: 'Provider',
      timestamps: false
    }
  }
};

module.exports = { PROVIDER_TABLE, Provider, ProviderSchema }
