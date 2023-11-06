const { Model, DataTypes } = require('sequelize');
const { Usuario } = require('./usuariomodel');

const TARJETA_TABLE = 'tarjeta';

class Tarjeta extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: TARJETA_TABLE,
            modelName: 'Tarjeta',
            timestamps: false
        }
    }
    
    
} 

const TarjetaSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    cardType: {
        allowNull: false,
        type: DataTypes.TEXT,
        field:'cardType'
    },
    cvv:{ 
        allowNull:false,
        type: DataTypes.INTEGER,
        field: 'cvv'
    },
    number:{
        allowNull: false,
        type: DataTypes.TEXT,
        field: 'number'
    },

    mm:{
        allowNull: false,
        type: DataTypes.TEXT,
        field: 'mm'
    },
    yyyy:{
        allowNull: true,
        type: DataTypes.TEXT,
        field: 'yyyy'
    },
    savingGoal:{
        allowNull: true,
        type: DataTypes.INTEGER,
        field: 'savingGoal'
    },
    spendingLimit:{
        allowNull: true,
        type: DataTypes.INTEGER,
        field: 'spendingLimit'
    },
    id_usuario:{
        allowNull: false,
        type: DataTypes.TEXT,
        field: 'id_usuario'
    } 
    
    
}





module.exports = { Tarjeta, TarjetaSchema };
