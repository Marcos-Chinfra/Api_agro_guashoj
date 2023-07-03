const { models } = require('../libs/sequelize');
const boom = require('@hapi/boom');

class SupplyService {

  constructor(){}

  async create(data) {
    const newSupply = await  models.Supplies.create(data)
    return newSupply;
  }

  async find() {
    const supplies = await  models.Supplies.findAll();
    return supplies;
  }

  async findOne(id) {
    const supply = await  models.Supplies.findByPk(id);
    if (!supply) {
      throw boom.notFound('Supply not found');
    }
    return supply;
  }

  async update(id, changes) {
    const supply = await this.findOne(id);
    const rta = await supply.update(changes);
    return rta;
  }

  async delete(id) {
    const model = await this.findOne(id);
    await model.destroy();
    return { rta: true };
  }

}

module.exports = SupplyService;
