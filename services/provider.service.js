const { boom } = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class ProviderService{

  constructor(){}

  async create(data){
    const newProvider = await models.Provider.create(data);
    return newProvider;
  };

  async find(){
    const providers = await models.Provider.findAll();
    return providers
  };

  async findOne(id){
    const provider = await models.Provider.findByPk(id);
    if(!provider){
      throw boom.notFound('Provider not found');
    }
    return provider;
  };

  async update(id, changes){
    const provider = await this.findOne(id);
    const rta = await provider.update(changes)
    return rta
  };

  async delete(id){
    const provider = await this.findOne(id);
    await provider.destroy();
    return { rta: true }
  };

};

module.exports = ProviderService;

