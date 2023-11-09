const { Sequelize } = require('sequelize');

const  { config } = require('./config');
const setupModels = require('../models');
  
const CADENA_CONEXION = 
    "postgresql://postgres:f30102002@localhost:5433/wisewallet4"
    //"postgresql://postgres:contraseña@localhost:Puerto/nombre de base de dtos"

const sequelize = new Sequelize(CADENA_CONEXION)

sequelize.sync();
setupModels(sequelize);

module.exports = sequelize;
