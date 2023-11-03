const { Sequelize } = require('sequelize');

const  { config } = require('./config');
const setupModels = require('../models');

// cambiar "Romulo2003" por la contraseña de cada máquina
const CADENA_CONEXION = 
    "postgresql://postgres:Romulo2003@localhost:5432/wisewallet"
    //"postgresql://postgres:contraseña@localhost:Puerto/nombre de base de dtos"

const sequelize = new Sequelize(CADENA_CONEXION)

sequelize.sync();
setupModels(sequelize);

module.exports = sequelize;
