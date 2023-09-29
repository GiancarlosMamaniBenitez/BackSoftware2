const { Sequelize, DataTypes } = require("sequelize");

// postgres://<USUARIO>:<PASSWORD>@<URL_HOST>:<PUERTO_BD>/<NOMBRE_BD>
const CADENA_CONEXION = 
    "postgresql://postgres:f30102002@localhost:5433/wisewallet"

const sequelize = new Sequelize(CADENA_CONEXION)

const Tarjeta = sequelize.define("tarjeta",{
    numero :{
        primaryKey : true,
        type : DataTypes.UUID,
        defaultValue : Sequelize.UUIDV4
    },
    tipo_tarjeta :{
        type : DataTypes.TEXT,
        allowNull: false
    }
},{
    timestamps :false,
    freezeTableName: true
})

const Ingreso = sequelize.define("ingresos",{
    id :{
        primaryKey : true,
        type : DataTypes.UUID,
        defaultValue : Sequelize.UUIDV4
    },
    fecha :{
        type : DataTypes.DATE,
        allowNull: false
    },
    monto: {
        type : DataTypes.BIGINT,
        allowNull : false
    },
    tarjeta_id:{
        type : DataTypes.BIGINT,
        allowNull : true
    } ,
    tipo_ingreso:{
        type: DataTypes.TEXT,
        allowNull : false
    }
},{
    timestamps :false,
    freezeTableName: true
})
const Gasto = sequelize.define("gastos",{
    id :{
        primaryKey : true,
        type : DataTypes.UUID,
        defaultValue : Sequelize.UUIDV4
    },
    fecha :{
        type : DataTypes.DATE,
        allowNull: false
    },
    monto: {
        type : DataTypes.BIGINT,
        allowNull : false
    },
    tarjeta_id:{
        type : DataTypes.BIGINT,
        allowNull : true
    } ,
    tipo_gasto:{
        type: DataTypes.TEXT,
        allowNull : false
    }
},{
    timestamps :false,
    freezeTableName: true
})


//relaciones de tablas
Ingreso.belongsTo(Tarjeta,{
    foreignKey:"tarjeta_id"
})

Gasto.belongsTo(Tarjeta,{
    foreignKey:"tarjeta_id"
})
/*
Tarjeta.hasMany(Ingreso,{
    foreignKey : "numero"
})*/

module.exports={
    Tarjeta, Ingreso, Gasto
}