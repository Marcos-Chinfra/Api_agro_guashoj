const { models } = require('../libs/sequelize');
const boom = require('@hapi/boom');

class InventoryService {

  constructor(){}

  async create(data) {
    const newRecord = await  models.Inventory.create(data)
    return newRecord;
  }

  async find() {
    const records = await  models.Inventory.findAll();
    return records;
  }

  async findOne(id) {
    const record = await  models.Inventory.findByPk(id);
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

module.exports = InventoryService;
