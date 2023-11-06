const express = require('express');
const router = express.Router(); 
const ingresosController = require('../controllers/ingresoscontroller');

router
    .get('/', ingresosController.get )
    .get('/:id', ingresosController.getById )
    .post('/', ingresosController.create )
    .put('/:id', ingresosController.update )
    .delete('/:id', ingresosController._delete );

module.exports = router;