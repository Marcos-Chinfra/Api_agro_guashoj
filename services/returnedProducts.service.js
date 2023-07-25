const { models } = require('../libs/sequelize');
const boom = require('@hapi/boom');

class ReturnedProductsService {

  constructor(){}

  async create(data) {

    const sold = await models.SoldProducts.findOne({
      where: {
        productId: data.productId,
        saleId: data.saleId
      }
    })
    sold.amount -= data.amount;
    await sold.save();

    const newReturnedProduct = await  models.ReturnedProducts.create(data);
    return newReturnedProduct;
  }

  async find() {
    const records = await  models.ReturnedProducts.findAll();
    return records;
  }

  async findOne(id) {
    const record = await  models.ReturnedProducts.findByPk(id);
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

module.exports = ReturnedProductsService;
