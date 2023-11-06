const { models } = require('../config/database');
const { Gastos } = require('../models/gastosmodel');
const { Tarjeta } = require('../models/tarjetamodel');


class GastosService { 
  
    constructor() {}

    async find() {
      const res = await models.Gastos.findAll();
      return res;
    }

    async findOne(id) {
      const res = await models.Gastos.findByPk(id);
      return res;
    }

    async create(data) {
      const res = await models.Gastos.create(data);
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
  
  module.exports = GastosService;