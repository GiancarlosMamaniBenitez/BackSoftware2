const { Model, DataTypes } = require('sequelize');

const USUARIO_TABLE = 'usuario';

class Usuario extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: USUARIO_TABLE,
            modelName: 'Usuario',
            timestamps: false
        }
    }
} 

const UsuarioSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    nombres: {
        allowNull: false,
        type: DataTypes.TEXT,
        field:'nombres'
    },
    apellidos:{ 
        allowNull:false,
        type: DataTypes.TEXT,
        field: 'apellidos'
    },
    email:{
        allowNull: false,
        type: DataTypes.TEXT,
        field: 'email'
    },
    contrasenia:{
        allowNull: false,
        type: DataTypes.TEXT,
        field: 'contrasenia'
    },
    username:{
        allowNull: false,
        type: DataTypes.TEXT,
        field: 'username'
    }, 
    categories:{
        allowNull: true,
        type: DataTypes.TEXT,
        field: 'categories'
    } 
}
  
module.exports = { Usuario, UsuarioSchema };

