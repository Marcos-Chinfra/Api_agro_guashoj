const { models } = require('../libs/sequelize');
const boom = require('@hapi/boom');

class GoodsInTransitService {

  constructor(){}

  async create(data) {
    const newGoodInTransit= await  models.GoodsInTransit.create(data);

    const product = await models.Product.findByPk(data.productId, {
      include: ['inventory']
    });
    const inventario = product.inventory;

    inventario.withdrawals += data.amount;
    await inventario.save();

    return newGoodInTransit;
  }

  async find() {
    const records = await  models.GoodsInTransit.findAll();
    return records;
  }

  async findOne(id) {
    const record = await  models.GoodsInTransit.findByPk(id);
    if (!record) {
      throw boom.notFound('record not found');
    }
    return record;
  }

  async update(id, changes) {
    const record = await this.findOne(id);

    const product = await models.Product.findByPk(record.productId, {
      include: ['inventory']
    });
    const inventario = product.inventory;

    if(record.amount > changes.amount){
      const y = record.amount - changes.amount;
      inventario.withdrawals -= y
      await inventario.save();
    } else {
      const y = changes.amount - record.amount ;
      inventario.withdrawals += y
      await inventario.save();
    }

    const rta = await record.update(changes);
    return rta;
  }

  async delete(id) {
    const record = await this.findOne(id);

    const product = await models.Product.findByPk(record.productId, {
      include: ['inventory']
    });
    const inventario = product.inventory;

    inventario.withdrawals -= record.amount;
    await inventario.save();

    await record.destroy();
    return { rta: true };
  }

}

module.exports = GoodsInTransitService;
