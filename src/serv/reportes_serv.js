const { models } = require('../config/database');
const { Reportes } = require('../models/reportesmodel');
const { Tarjeta } = require('../models/tarjetamodel');


class ReportesService { 
  
    constructor() {}

    async find() {
      const res = await models.Reportes.findAll();
      return res;
    }

    async findOne(id) {
      const res = await models.Reportes.findByPk(id);
      return res;
    }

    async create(data) {
      const res = await models.Reportes.create(data);
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
  
  module.exports = ReportesService;