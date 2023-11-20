const { Model, DataTypes } = require('sequelize');
const { Tarjeta } = require('./tarjetamodel');

const Ingresos_TABLE = 'ingresos';

class Ingresos extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: Ingresos_TABLE,
            modelName: 'Ingresos',
            timestamps: false
        }
    }
    
    
} 

const IngresosSchema = {
    id_ingresos: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    monto: {
        type: DataTypes.NUMERIC,
        allowNull: false,
    },
    fecha_ingresos: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    id_tarjeta: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    id_origen:{
        type: DataTypes.INTEGER,
        allowNull: false,
    } 
}

module.exports = { Ingresos , IngresosSchema };