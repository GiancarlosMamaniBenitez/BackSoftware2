const { Model, DataTypes } = require('sequelize');
const { Tarjeta } = require('./tarjetamodel');

const Reportes_TABLE = 'reportes';

class Reportes extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: Reportes_TABLE,
            modelName: 'Reportes',
            timestamps: false
        }
    }
    
    
} 

const ReportesSchema = {
    id_reportes: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    tipo:{
        allowNull: true,
        type: DataTypes.TEXT,
        
    },
    id_categoria:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    fecha_reportes: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    totalIngresos: {
        type: DataTypes.NUMERIC,
        allowNull: false,
    },
    totalGastos: {
        type: DataTypes.NUMERIC,
        allowNull: false,
    },
    ahorro: {
        type: DataTypes.NUMERIC,
        allowNull: false,
    },
    id_tarjeta: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}

module.exports = { Reportes , ReportesSchema };