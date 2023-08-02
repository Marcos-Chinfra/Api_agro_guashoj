const { models } = require('../libs/sequelize');
const boom = require('@hapi/boom');

class ShiftOutputService {

  constructor(){}

  async create(data) {
    const now = new Date();
    console.log(now)
    const horaActual = now.getHours();

    let turno;
    if (horaActual < 12) {
      turno = 'mañana';
    } else {
      turno = 'tarde';
    }

    const newRecord = await  models.ShiftOutput.create({
      ...data,
      workingDay: turno
    })

    return newRecord;
  }

  async find() {
    const records = await  models.ShiftOutput.findAll({
      include: ['product']
    });
    return records;
  }

  async findOne(id) {
    const record = await  models.ShiftOutput.findByPk(id, {
      include: ['product']
    });
    if (!record) {
      throw boom.notFound('Supply not found');
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

module.exports = ShiftOutputService;
