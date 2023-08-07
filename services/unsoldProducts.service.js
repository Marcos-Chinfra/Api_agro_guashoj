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

  async find(query) {
    const options = {
      include:[
        'product',
        {
          association: 'sale',
          include: ['staff', 'route']
        },
      ],
      where:{}
    };
    const {product} = query;
    if( product ){
      options.where.productId = product
    }

    const records = await  models.UnsoldProducts.findAll(options);
    return records;
  }

  async findOne(id) {
    const record = await  models.UnsoldProducts.findByPk(id, {
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

    const sold = await models.SoldProducts.findOne({
      where: {
        productId: record.productId,
        saleId: record.saleId
      }
    });

    if(record.amount > changes.amount){
      const x = record.amount - changes.amount;
      sold.amount += x
      await sold.save();
    } else {
      const y = changes.amount - record.amount ;
      sold.amount -= y
      await sold.save();
    }

    const rta = await record.update(changes);
    return rta;
  }

  async delete(id) {
    const model = await this.findOne(id);

    const sold = await models.SoldProducts.findOne({
      where: {
        productId: model.productId,
        saleId: model.saleId
      }
    });

    sold.amount += model.amount ;
    await sold.save();


    await model.destroy();
    return { rta: true };
  }

}

module.exports = UnsoldProductsService;
