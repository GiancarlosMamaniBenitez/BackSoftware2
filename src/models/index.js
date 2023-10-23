const { Tarjeta, TarjetaSchema } = require('./tarjetamodel.js');
const { Usuario, UsuarioSchema } = require('./usuariomodel.js');

function setupModels(sequelize) {
    Usuario.init(UsuarioSchema, Usuario.config(sequelize));
    Tarjeta.init(TarjetaSchema, Tarjeta.config(sequelize));
}

module.exports = setupModels;