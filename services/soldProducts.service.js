const { models } = require('../libs/sequelize');
const boom = require('@hapi/boom');

class SoldProductsService {

  constructor(){}

  async create(data) {
    const newSoldProduct = await  models.SoldProducts.create(data)
    return newSoldProduct;
  }

  async find() {
    const records = await  models.SoldProducts.findAll();
    return records;
  }

  async findOne(id) {
    const record = await  models.SoldProducts.findByPk(id, {
      include: [
        'sale',
        'product',
      ]
    });
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

module.exports = SoldProductsService;
