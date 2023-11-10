const { Model, DataTypes } = require('sequelize');
const { Tarjeta } = require('./tarjetamodel');

const Gastos_TABLE = 'gastos';

class Gastos extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: Gastos_TABLE,
            modelName: 'Gastos',
            timestamps: false
        }
    }
}

const GastosSchema = {
    id_gastos: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    monto: {
        type: DataTypes.NUMERIC,
        allowNull: false,
    },
    fecha_gastos: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    id_tarjeta: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    id_categoria:{
        type: DataTypes.INTEGER,
        allowNull: false,
    } 
}

module.exports = {Gastos,GastosSchema};
