const express = require('express');
const router = express.Router(); 
const reportesController = require('../controllers/reportescontroller');

router
    .get('/', reportesController.get )
    .get('/:id', reportesController.getById )
    .post('/', reportesController.create )
    .put('/:id', reportesController.update )
    .delete('/:id', reportesController._delete );

module.exports = router;