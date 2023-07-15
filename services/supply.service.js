const { models } = require('../libs/sequelize');
const boom = require('@hapi/boom');

class SupplyService {

  constructor(){}

  // async create(data) {
  //   const newSupply = await  models.Supply.create(data)

  //   const product = await models.Product.findByPk(data.productId, {
  //     include: ['inventory']
  //   })
  //   const inventario = product.inventory;

  //   inventario.incomings += data.amount;
  //   await inventario.save()

  //   return newSupply;
  // }

  async create(data) {
    const newSupply = await  models.Supply.create(data)
    return newSupply;
  }

  async find() {
    const supplies = await  models.Supply.findAll();
    return supplies;
  }

  async findOne(id) {
    const supply = await  models.Supply.findByPk(id);
    if (!supply) {
      throw boom.notFound('Supply not found');
    }
    return supply;
  }

  async update(id, changes) {
    const supply = await this.findOne(id);
    const rta = await supply.update(changes);
    return rta;
  }

  async delete(id) {
    const model = await this.findOne(id);
    await model.destroy();
    return { rta: true };
  }

}

module.exports = SupplyService;
