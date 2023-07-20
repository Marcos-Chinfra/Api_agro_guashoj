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

    const product = await models.Product.findByPk(data.productId, {
      include: ['inventory']
    })
    const inventario = product.inventory;

    inventario.incomings += data.amount;
    await inventario.save()

    return newRecord;
  }

  async find() {
    const records = await  models.ShiftOutput.findAll({
      include: ['product']
    });
    return records;
  }

  async findOne(id) {
    const record = await  models.ShiftOutput.findByPk(id);
    if (!record) {
      throw boom.notFound('Supply not found');
    }
    return record;
  }

  async update(id, changes) {
    const record = await this.findOne(id);

    const product = await models.Product.findByPk(record.productId, {
      include: ['inventory']
    });
    const inventario = product.inventory;

    if(record.amount > changes.amount){
      const x = record.amount - changes.amount;
      inventario.incomings -= x
      await inventario.save();
    } else {
      const y = changes.amount - record.amount ;
      inventario.incomings += y
      await inventario.save();
    }

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
