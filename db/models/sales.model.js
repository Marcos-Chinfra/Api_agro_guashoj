const { Model, DataTypes, Sequelize } = require('sequelize');
//const { STAFF_TABLE } = require('./staff.model');

const SALES_TABLE = 'Sales';

const SalesSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  // StaffId: {
  //   field: 'staff_id',
  //   allowNull: false,
  //   type: DataTypes.INTEGER,
  //   references: {
  //     model: STAFF_TABLE,
  //     key: 'id'
  //   },
  //   onUpdate: 'CASCADE',
  //   onDelete: 'SET NULL'
  // },
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
  // total:{
  //   type: DataTypes.VIRTUAL,
  //   get(){
  //     if(this.items.length > 0){
  //       return this.items.reduce((total, item) => {
  //         return total + (item.price + item.OrderProduct.amount)
  //       }, 0);
  //     };
  //     return 0;
  //   }
  // }
}

class Sales extends Model{
  // static associate(models){
  //   this.belongsTo(models.Staff, {
  //     as: 'staff'
  //   });
  //   this.belongsToMany(models.Product, {
  //     as:'sold.products',
  //     through: models.SoldProducts,
  //     foreignKey: 'SaleId',
  //     otherKey: 'productId'
  //   })
  // }

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
