const { models } = require('../libs/sequelize');
const boom = require('@hapi/boom');

class CarsService {

  constructor(){}

  async create(data) {
    const newCar = await  models.Cars.create(data)
    return newCar;
  }

  async find() {
    const cars = await  models.Cars.findAll();
    return cars;
  }

  async findOne(id) {
    const car = await  models.Cars.findByPk(id, {
      include: ['Sales']
    });
    if (!car) {
      throw boom.notFound('category not found');
    }
    return car;
  }

  async update(id, changes) {
    const car = await this.findOne(id);
    const rta = await car.update(changes);
    return rta;
  }

  async delete(id) {
    const model = await this.findOne(id);
    await model.destroy();
    return { rta: true };
  }

}

module.exports = CarsService;
