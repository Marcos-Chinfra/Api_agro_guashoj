const { models } = require('../libs/sequelize');
const boom = require('@hapi/boom');

class SalesService {

  constructor(){}

  async create(data) {
    const newSale = await  models.Sales.create(data)
    return newSale;
  }


  async find() {
    const sales = await  models.Sales.findAll({
      include: [
        'staff',
        'route',
        'SoldProducts',
        'ReturnedProducts',
        'UnsoldProducts',
        {
          association: 'GoodsInTransit',
          include: ['product']
        },
      ]
    });
    return sales;
  }

  async findOne(id) {
    const sale = await  models.Sales.findByPk(id, {
      include: [
        'staff',
        'route',
        'cars',
        {
          association: 'SoldProducts',
          include: ['product']
        },
        {
          association: 'ReturnedProducts',
          include: ['product']
        },
        {
          association: 'UnsoldProducts',
          include: ['product']
        },
        {
          association: 'GoodsInTransit',
          include: ['product']
        }
      ]
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
