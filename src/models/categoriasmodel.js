const { Model, DataTypes } = require('sequelize');
const { Tarjeta } = require('./tarjetamodel');

const Categorias_TABLE = 'categorias';

class Categorias extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: Categorias_TABLE,
            modelName: 'Categorias',
            timestamps: false
        }
    }
}

const CategoriasSchema = {
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

module.exports = {Categorias,CategoriasSchema};
