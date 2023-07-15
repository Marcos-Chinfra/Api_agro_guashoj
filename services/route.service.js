const { models } = require('../libs/sequelize');
const boom = require('@hapi/boom');

class RoutesService {

  constructor(){}

  async create(data) {
    const newRoute = await  models.Routes.create(data)
    return newRoute;
  }

  async find() {
    const routes = await  models.Routes.findAll();
    return routes;
  }

  async findOne(id) {
    const route = await  models.Routes.findByPk(id);
    if (!route) {
      throw boom.notFound('route not found');
    }
    return route;
  }

  async update(id, changes) {
    const route = await this.findOne(id);
    const rta = await route.update(changes);
    return rta;
  }

  async delete(id) {
    const model = await this.findOne(id);
    await model.destroy();
    return { rta: true };
  }

}

module.exports = RoutesService;
