const express = require('express');
const bodyParser=require("body-parser");
const { Pool } = require('pg');
const app = express();
const port = 5000;
const cors = require("cors");
const { Tarjeta, Ingreso, Gasto } = require("./datos/datos.js");


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended : true
}))
app.use(cors())
app.use(express.static("assets"))
// Create a new Pool instance with your PostgreSQL connection details

app.get("/tarjetas", async (req,resp)=>{
    const ListadoTarjeta= await Tarjeta.findAll()
    resp.send(ListadoTarjeta)
})

app.get("/ingresos",async (req,resp)=>{
    const ListadoIngreso= await Ingreso.findAll()
    resp.send(ListadoIngreso)
})

app.get("/gastos",async (req,resp)=>{
    const ListadoGasto= await Gasto.findAll()
    resp.send(ListadoGasto)
})


// Define a basic route

/*const getIngresos = async () => {
    const res = await pool.query('SELECT * FROM tarjeta');
    console.log(res.rows);
    pool.end();
}*/



//getIngresos();
// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
