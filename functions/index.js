const functions = require("firebase-functions");
const admin = require("firebase-admin");
const {getFirestore} = require("firebase-admin/firestore");

const serviceAccount = require("./permisos.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const express = require("express");
const app = express();
const db = admin.firestore();
const cors = require("cors");
app.use(cors({origin: true}));

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });


app.get('/hello-world', (req, res) => {
    return res.status(200).send('Hello world')
});

//Post
app.post('/api/create', async (req,res) => {
    await db.collection('Usuario').add({
        "username": "pedritossssssssssss",
        "contrasenia": "22221",
        "email": "pedro@gmail.com",
    })
    
    return res.status(200).send('new usuario creado')
});


app.post('/usuarios/:id/crear-tarjeta', async (req, res) => {
    const {
        number,
            mm,
            yyyy,
            cvv,
            cardsname,
            selectedCard,
            incomes,
            expenses,
            categories,
            spendingLimit,
            savingsGoal
    } = req.body
    const dataSend = {
        number: number,
            mm: mm,
            yyyy: yyyy,
            cvv: cvv,
            cardsname: cardsname,
            selectedCard: selectedCard,
            incomes: incomes,
            expenses: expenses,
            categories: categories,
            spendingLimit: spendingLimit, // Nuevo atributo
            savingsGoal: savingsGoal,
    }
    const {id} = req.params
    const doc = db.collection("Usuario")
    await doc.doc(id).collection("Tarjeta").add(dataSend)

    return res.status(200).send('new usuario creado')
})

app.get('/usuarios', async (req, res) => {
    
    const doc = await db.collection("Usuario").get()
    const Usuarios = doc.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }))

    res.send(Usuarios)

})

//get usuario
app.get("/api/get/:id", async (req,res)=>{
    try {
        const docRef = db.collection("Usuario").doc(req.params.id);
        const doc = await docRef.get();

        if (!doc.exists) {
            // Document not found
            return res.status(404).send("Document not found");
        }

        console.log(doc.data());
        return res.status(200).send(doc.data());
    } catch (error) {                                                                                                                                                                           
        console.error("Error fetching document:", error);                               
        return res.status(500).send("Internal Server Error");
    }
});

app.get('/usuarios/:id/tarjetas', async (req, res) => {
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

app.get('/usuarios/:id/tarjetas/:tarjetaId', async (req, res) => {
    const {id} = req.params
    const doc = await db.collection("Usuario")
    const docRef = await doc.doc(id)
    const subCol = await docRef.collection("Tarjeta")
    const docSubCol = await subCol.doc(req.params.tarjetaId).get()
    
    res.send({
        id: docSubCol.id,
        ...docSubCol.data(),
    })

})

app.get('/delete-usuario/:id', async (req,res)=>{
    await db.collection('Usuario').doc(req.params.id).delete()
    res.send("usuario eliminado")

})

app.post('/update-contact/:id', async (req,res)=>{
    await db.collection('Usuario').doc(req.params.id).update({
        "username": "josefino",
        "contrasenia": "12345",
        "email": "jose@gmail.com",
    })
    
    res.send("usuario updated")
})


exports.app = functions.https.onRequest(app);