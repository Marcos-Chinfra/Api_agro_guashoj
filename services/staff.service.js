const { models } = require('../libs/sequelize');
const boom = require('@hapi/boom');

class StaffService {

  constructor(){}

  async create(data) {
    const newStaff = await  models.Staff.create(data)
    return newStaff;
  }

  async find() {
    const staffs = await  models.Staff.findAll();
    return staffs;
  }

  async findOne(id) {
    const staff = await  models.Staff.findByPk(id, {
      include: ['Sales']
    });
    if (!staff) {
      throw boom.notFound('staff not found');
    }
    return staff;
  }

  async update(id, changes) {
    const staff = await this.findOne(id);
    const rta = await staff.update(changes);
    return rta;
  }

  async delete(id) {
    const model = await this.findOne(id);
    await model.destroy();
    return { rta: true };
  }

}

module.exports = StaffService;
