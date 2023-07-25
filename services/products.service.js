const { models } = require('../libs/sequelize');
const boom = require('@hapi/boom');

class productsService {
  constructor(){}

  async create(data){
    const newProduct = await models.Product.create(data);
    return newProduct;
  };

  async find(){
    const rta = await models.Product.findAll()
    return rta;
  };

  async findOne(id){
    const product = await models.Product.findByPk(id, {
      include: ['inventory']
    })
    if(!product){
      throw boom.notFound('Producto out of stock ')
    }
    return product;
  };

  async update(id, changes){
    const product = await this.findOne(id);
    const rta = await product.update(changes)
    return rta;
  };

  async delete(id){
    const product = await this.findOne(id);
    const rta = await product.destroy();
    return rta;
  };

}

module.exports = productsService;
