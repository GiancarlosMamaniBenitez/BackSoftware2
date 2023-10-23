const express = require('express');
const router = express.Router(); 
const usuariosController = require('../controllers/usuario_controller');

router
    .get('/', usuariosController.get )
    .get('/:id', usuariosController.getById )
    .post('/', usuariosController.create )
    .put('/:id', usuariosController.update )
    .delete('/:id', usuariosController._delete );

module.exports = router;