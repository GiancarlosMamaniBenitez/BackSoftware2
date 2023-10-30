const express = require('express'); 

const usuariosRouter = require('./usuario-router');
const tarjetasRouter = require('./tarjeta-router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router); 
  router.use('/usuarios', usuariosRouter);
  router.use('/tarjetas', tarjetasRouter);
}

module.exports = routerApi;