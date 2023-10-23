const { Sequelize } = require('sequelize');

const  { config } = require('./config');
const setupModels = require('../models');
  
const CADENA_CONEXION = 
    "postgresql://postgres:f30102002@localhost:5433/wisewallet"

const sequelize = new Sequelize(CADENA_CONEXION)

sequelize.sync();
setupModels(sequelize);

module.exports = sequelize;
