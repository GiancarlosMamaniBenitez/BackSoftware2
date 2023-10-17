const {Router} = require('express');
const {db} = require('../firebase')

const router = Router();

router.get('/usuarios', async (req, res) => {

    const querySnapshot = await db.collection('Usuario').get()
    const Usuarios = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }))
    console.log(Usuarios)
    res.send(Usuarios)
});


router.get('/usuarios/:id/tarjetas', async (req, res) => {
    const {id} = req.params
    const doc = await db.collection("Usuario")
    const docRef = await doc.doc(id)
    const subCol = await docRef.collection("Tarjeta").get()

    const Tarjetas = subCol.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }))

    res.send(Tarjetas)

})

router.get('/usuarios/:id/cuenta', async (req, res) => {
    const {id} = req.params
    const doc = await db.collection("Usuario")
    const docRef = await doc.doc(id)
    const subCol = await docRef.collection("Cuenta").get()

    const Cuenta = subCol.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }))
    console.log(Cuenta[0].saldo)
    res.send(Cuenta)

})


router.get('/gastos', async (req, res) => {

    const querySnapshot = await db.collection('Gastos').get()
    const Gastos = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }))
    console.log(Gastos)
    res.send(Gastos)
});


router.post('/new-usuario', async (req, res) => {
    //const data = req.body
    
    await db.collection('Usuario').add({
        "username": "pedrito",
        "contrasenia": "2222",
        "email": "pedro@gmail.com",
    })
    
    res.send('new usuario creado')

})

router.get("/usuario/get/:id", async (req,res)=>{
    const doc = await db.collection("Usuario").doc(req.params.id).get()
    console.log({
        id: doc.id,
        ...doc.data(),
    })
    res.send({
        id: doc.id,
        ...doc.data(),
    })
})

router.get('/delete-usuario/:id', async (req,res)=>{
    await db.collection('Usuario').doc(req.params.id).delete()
    res.send("usuario eliminado")

})

router.post('/update-contact/:id', async (req,res)=>{
    console.log(req.params.id)
    console.log(req.body)
    await db.collection('Usuario').doc(id).update({
        "username": "josefino",
        "contrasenia": "12345",
        "email": "jose@gmail.com",
    })
    
    res.send("usuario updated")
})


module.exports = router;