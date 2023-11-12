const express = require('express'); 

const usuariosRouter = require('./usuario-router');
const tarjetasRouter = require('./tarjeta-router');
const ingresosRouter = require('./ingresosRoutes');
const gastosRouter = require('./gastosRoutes');
const categoriasRouter = require('./categoriasRoutes');
const reportesRouter = require('./reportesRoutes');

function routerApi(app) {
  const router = express.Router();
  app.use('', router); 
  router.use('/usuarios', usuariosRouter);
  router.use('/tarjetas', tarjetasRouter);
  router.use('/ingresos', ingresosRouter);
  router.use('/gastos', gastosRouter);
  router.use('/categorias', categoriasRouter)
  router.use('/reportes',reportesRouter)
}

module.exports = routerApi;