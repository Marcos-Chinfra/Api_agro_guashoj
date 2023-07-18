const { models } = require('../libs/sequelize');
const boom = require('@hapi/boom');

class SupplyService {

  constructor(){}

  async create(data) {
    const newSupply = await  models.Supply.create(data)

    const product = await models.Product.findByPk(data.productId, {
      include: ['inventory']
    })
    const inventario = product.inventory;

    inventario.incomings += data.amount;
    await inventario.save()

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

    const product = await models.Product.findByPk(record.productId, {
      include: ['inventory']
    });
    const inventario = product.inventory;

    if(supply.amount > changes.amount){
      const x = supply.amount - changes.amount;
      inventario.incomings -= x
      await inventario.save();
    } else {
      const y = changes.amount - supply.amount ;
      inventario.incomings += y
      await inventario.save();
    }

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
