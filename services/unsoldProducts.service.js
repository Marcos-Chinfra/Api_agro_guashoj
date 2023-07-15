const { models } = require('../libs/sequelize');
const boom = require('@hapi/boom');

class UnsoldProductsService {

  constructor(){}

  async create(data) {
    const newUnsoldProduct = await  models.UnsoldProducts.create(data);

    // const product = await models.Product.findByPk(data.productId, {
    //   include: ['inventory']
    // });
    // const inventario = product.inventory;

    // inventario.withdrawals += data.amount;
    // await inventario.save();

    return newUnsoldProduct;
  }

  async find() {
    const records = await  models.UnsoldProducts.findAll();
    return records;
  }

  async findOne(id) {
    const record = await  models.UnsoldProducts.findByPk(id);
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
    const model = await this.findOne(id);
    await model.destroy();
    return { rta: true };
  }

}

module.exports = UnsoldProductsService;
