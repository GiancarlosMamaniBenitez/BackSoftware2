const express = require('express');
const router = express.Router(); 
const gastosController = require('../controllers/gastoscontroller');

router
    .get('/', gastosController.get )
    .get('/:id', gastosController.getById )
    .post('/', gastosController.create )
    .put('/:id', gastosController.update )
    .delete('/:id', gastosController._delete );

module.exports = router;