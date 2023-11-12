const { Model, DataTypes } = require('sequelize');
const { Tarjeta } = require('./tarjetamodel');

const Meta_TABLE = 'meta';

class Meta extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: Meta_TABLE,
            modelName: 'Meta',
            timestamps: false
        }
    }
}

const MetaSchema = {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    monto: {
        type: DataTypes.NUMERIC,
        allowNull: false,
    },
   
    id_tarjeta: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    
}

module.exports = { Meta , MetaSchema };
