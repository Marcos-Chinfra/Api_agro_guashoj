const { models } = require('../libs/sequelize');
const boom = require('@hapi/boom');

class GoodsInTransitService {

  constructor(){}

  async create(data) {
    const newGoodInTransit = await  models.GoodsInTransit.create(data);

    await models.SoldProducts.create({
      productId: data.productId,
      saleId: data.saleId,
      amount: data.amount
    });

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
