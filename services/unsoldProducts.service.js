const { models } = require('../libs/sequelize');
const boom = require('@hapi/boom');

class UnsoldProductsService {

  constructor(){}

  async create(data) {

    // const moved = await models.GoodsInTransit.findOne({
    //   where: {
    //     productId: data.productId,
    //     saleId: data.saleId
    //   }
    // })
    // const sales =  moved.amount - data.amount

    const sold = await models.SoldProducts.findOne({
      where: {
        productId: data.productId,
        saleId: data.saleId
      }
    });

    sold.amount -= data.amount
    await sold.save();

    const newUnsoldProduct = await  models.UnsoldProducts.create(data);
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
