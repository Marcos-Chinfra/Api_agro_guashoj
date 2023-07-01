const { models } = require('../libs/sequelize');

class CustomerService {
  constructor(){};

  async create(data){
    const newCustomer = await models.Customer.create(data);
    return newCustomer;
  };

  async find(){
    const rta = await models.Customer.findAll()
    return rta;
  };

  async findOne(id){
    const customer = await models.Customer.findByPk(id)
    return customer
  };

  async update(id, changes){
    const model = await this.findOne(id);
    const rta = await model.update(changes)
    return rta
  }

  async delete(id){
    const customer = await this.findOne(id);
    await customer.destroy();
    return { rta: true}
  }
};

module.exports = CustomerService;
