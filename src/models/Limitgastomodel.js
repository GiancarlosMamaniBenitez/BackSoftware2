const { Model, DataTypes } = require('sequelize');
const { Tarjeta } = require('./tarjetamodel');

const Limitgasto_TABLE = 'limitgasto';

class Limitgasto extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: Limitgasto_TABLE,
            modelName: 'Limitgasto',
            timestamps: false
        }
    }
}

const LimitgastoSchema = {
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

module.exports = { Limitgasto , LimitgastoSchema };
