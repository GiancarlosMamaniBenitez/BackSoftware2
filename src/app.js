const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');


dotenv.config();
const app = express(); 

const port = 8080;
app.use(cors());
app.use(express.json());

const routerApi = require('./routes');
const { Usuario } = require('./models/usuariomodel');


app.get("/ingresos",async (req,resp)=>{
    const listadoUsuarios= await Usuario.findAll()
    resp.send(listadoUsuarios)
})

app.get('/', (req,res) => {
    res.send('Backend con NodeJS - Express + CRUD API REST + POSTGRESQL');
}); 

routerApi(app);

app.listen(port,()=>{
    console.log("Port ==> ", port);
});

