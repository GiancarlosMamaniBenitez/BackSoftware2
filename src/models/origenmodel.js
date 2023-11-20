const { Model, DataTypes } = require('sequelize');
const { Tarjeta } = require('./tarjetamodel');

const Origen_TABLE = 'origen';

class Origen extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: Origen_TABLE,
            modelName: 'Origen',
            timestamps: false
        }
    }
}

const OrigenSchema = {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    nombre:{
        allowNull: true,
        type: DataTypes.TEXT,
        
    } ,
    id_usuario: {
        type: DataTypes.INTEGER,
        allowNull: true,
    }
    
}

module.exports = {Origen,OrigenSchema};