const { models } = require('../config/database');
const { Usuario } = require('../models/usuariomodel');
const { Tarjeta } = require('../models/tarjetamodel');


class TarjetasService { 
  
    constructor() {}

    async find() {
      const res = await models.Tarjeta.findAll();
      return res;
    }

    async findOne(id) {
      const res = await models.Tarjeta.findByPk(id);
      return res;
    }

    async create(data) {
      const res = await models.Tarjeta.create(data);
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
  
  module.exports = TarjetasService;