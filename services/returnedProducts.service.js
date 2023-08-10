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
    let sale = sold.amount -= data.amount;
    console.log(sale)
    await sold.save();

    const newReturnedProduct = await  models.ReturnedProducts.create(data);
    return newReturnedProduct;
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

    const records = await  models.ReturnedProducts.findAll(options);
    return records;
  }

  async findOne(id) {
    const record = await  models.ReturnedProducts.findByPk(id, {
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

module.exports = ReturnedProductsService;
