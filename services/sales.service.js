const { models } = require('../libs/sequelize');
const boom = require('@hapi/boom');

class SalesService {

  constructor(){}

  async create(data) {
    const newSale = await  models.Sales.create(data)
    return newSale;
  }

  // async addSoldProducts(data) {
  //   const newCollection = await  models.SoldProducts.create(data);

  //   const product = await models.Product.findByPk(data.productId, {
  //     include: ['inventory']
  //   })
  //   const inventory = product.inventory;

  //   inventory.withdrawals += data.amount;
  //   await inventory.save()


  //   return newCollection;
  // }

  async find() {
    const sales = await  models.Sales.findAll({
      include: ['staff', 'route', 'SoldProducts', 'ReturnedProducts', 'UnsoldProducts', 'GoodsInTransit']
    });
    return sales;
  }

  async findOne(id) {
    const sale = await  models.Sales.findByPk(id, {
      include: ['staff', 'route', 'SoldProducts', 'ReturnedProducts', 'UnsoldProducts', 'GoodsInTransit']
    });
    if (!sale) {
      throw boom.notFound('sale not found');
    }
    return sale;
  }

  async update(id, changes) {
    const sale = await this.findOne(id);
    const rta = await sale.update(changes);
    return rta;
  }

  async delete(id) {
    const model = await this.findOne(id);
    await model.destroy();
    return { rta: true };
  }

}

module.exports = SalesService;
