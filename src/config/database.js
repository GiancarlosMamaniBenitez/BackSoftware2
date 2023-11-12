const { Sequelize } = require('sequelize');

const  { config } = require('./config');
const setupModels = require('../models');
  
const CADENA_CONEXION = 
    "postgresql://postgres:1234@localhost:5432/wisewallet"
    //"postgresql://postgres:contraseña@localhost:Puerto/nombre de base de dtos"
// Clave romulo: Romulo2003
const sequelize = new Sequelize(CADENA_CONEXION)

sequelize.sync();
setupModels(sequelize);

module.exports = sequelize;
