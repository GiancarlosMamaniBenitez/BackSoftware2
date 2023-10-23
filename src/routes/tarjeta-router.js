const express = require('express');
const router = express.Router(); 
const tarjetasController = require('../controllers/tarjeta_controller');

router
    .get('/', tarjetasController.get )
    .get('/:id', tarjetasController.getById )
    .post('/', tarjetasController.create )
    .put('/:id', tarjetasController.update )
    .delete('/:id', tarjetasController._delete );

module.exports = router;