const { Model, DataTypes, Sequelize } = require('sequelize');

const { CATEGORY_TABLE } = require('./category.model');

const PRODUCT_TABLE = 'Products';

const ProductSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  weight: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  unit_of_measurement:{
    type: DataTypes.STRING,
    allowNull: false
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
  categoryId: {
    field: 'categoryId',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: CATEGORY_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
}

class Product extends Model {
  static associate(models){
    this.belongsTo(models.Category, {as: 'category'})
    this.hasMany(models.Inventory, {
      as: 'inventory',
      foreignKey:'productId'
    })
    this.hasMany(models.ReturnedProducts,{
      as: 'ReturnedProducts',
      foreignKey: 'productId'
    });
    this.hasMany(models.SoldProducts, {
      as: 'SoldProducts',
      foreignKey: "productId"
    });
    this.hasMany(models.UnsoldProducts, {
      as: 'UnsoldProducts',
      foreignKey: "productId"
    });
    this.hasMany(models.GoodsInTransit, {
      as: 'GoodsInTransit',
      foreignKey: "productId"
    });
    this.hasMany(models.ShiftOutput, {
      as: 'ShiftOutput',
      foreignKey:'productId'
    })

  }

  static config(sequelize){
    return {
      sequelize,
      tableName: PRODUCT_TABLE,
      modelName: 'Product',
      timestamps: false
    }
  }
};

module.exports = { Product, ProductSchema, PRODUCT_TABLE }
