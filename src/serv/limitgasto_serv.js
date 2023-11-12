const { models } = require('../config/database');
const { Limitgasto } = require('../models/Limitgastomodel');
const { Tarjeta } = require('../models/tarjetamodel');


class LimitgastoService { 
  
    constructor() {}

    async find() {
      const res = await models.Limitgasto.findAll();
      return res;
    }

    async findOne(id) {
      const res = await models.Limitgasto.findByPk(id);
      return res;
    }

    async create(data) {
      const res = await models.Limitgasto.create(data);
      return res;
    }

    async update(id, data) {
      const model = await this.findOne(id);
      const res = await model.update(data);
      return res;
    }

    async delete(id) {
      const model = await this.findOne(id);
      await model.destroy();
      return { deleted: true };
    }
  
  }
  
  module.exports = LimitgastoService;