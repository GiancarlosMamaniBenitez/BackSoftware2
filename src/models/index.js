const { Tarjeta, TarjetaSchema } = require('./tarjetamodel.js');
const { Usuario, UsuarioSchema } = require('./usuariomodel.js');
const { Ingresos , IngresosSchema } = require('./ingresosmodel.js');
const { Gastos, GastosSchema } = require('./gastosmodel.js');
const { Categorias, CategoriasSchema } = require('./categoriasmodel.js')




function setupModels(sequelize) {
    Usuario.init(UsuarioSchema, Usuario.config(sequelize));
    Tarjeta.init(TarjetaSchema, Tarjeta.config(sequelize));
    Ingresos.init(IngresosSchema, Ingresos.config(sequelize));
    Gastos.init(GastosSchema, Gastos.config(sequelize));
    Categorias.init(CategoriasSchema, Categorias.config(sequelize));
}

module.exports = setupModels;