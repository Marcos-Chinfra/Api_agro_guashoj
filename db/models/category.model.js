const { Model, DataTypes, Sequelize } = require('sequelize');

const CATEGORY_TABLE = 'Categories';

const CategorySchema = {
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

class Category extends Model{
  // static associate(models){
  //   this.hasMany(models.Product, {
  //     as: 'Products',
  //     foreignKey:'categoryId'
  //   });
  // }

  static config(sequelize){
    return {
      sequelize,
      tableName: CATEGORY_TABLE,
      modelName: 'Category',
      timestamps: false
    }
  }
};

module.exports = { CATEGORY_TABLE, Category, CategorySchema }
