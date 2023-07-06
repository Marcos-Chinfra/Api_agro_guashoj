const { models } = require('../libs/sequelize');
const boom = require('@hapi/boom');

class CategoryService {

  constructor(){}

  async create(data) {
    const newCategory = await  models.Category.create(data)
    return newCategory;
  }

  async find() {
    const categories = await  models.Category.findAll();
    return categories;
  }

  async findOne(id) {
    const category = await  models.Category.findByPk(id,  {
      include: ['Products']
    });
    if (!category) {
      throw boom.notFound('category not found');
    }
    return category;
  }

  async update(id, changes) {
    const category = await this.findOne(id);
    const rta = await category.update(changes);
    return rta;
  }

  async delete(id) {
    const model = await this.findOne(id);
    await model.destroy();
    return { rta: true };
  }

}

module.exports = CategoryService;
