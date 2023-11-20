const { models } = require('../config/database');
const { Ingresos } = require('../models/ingresosmodel');
const { Tarjeta } = require('../models/tarjetamodel');


class OrigenService { 
  
    constructor() {}

    async find() {
      const res = await models.Origen.findAll();
      return res;
    }

    async findOne(id) {
      const res = await models.Origen.findByPk(id);
      return res;
    }

    async create(data) {
      const res = await models.Origen.create(data);
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
  
  module.exports = OrigenService;