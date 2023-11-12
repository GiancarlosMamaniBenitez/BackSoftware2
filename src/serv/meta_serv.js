const { models } = require('../config/database');
const { Meta } = require('../models/metamodel');
const { Tarjeta } = require('../models/tarjetamodel');


class MetaService { 
  
    constructor() {}

    async find() {
      const res = await models.Meta.findAll();
      return res;
    }

    async findOne(id) {
      const res = await models.Meta.findByPk(id);
      return res;
    }

    async create(data) {
      const res = await models.Meta.create(data);
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
  
  module.exports = MetaService;