const express = require('express');
const router = express.Router(); 
const origenController = require('../controllers/origencontroller');

router
    .get('/', origenController.get )
    .get('/:id', origenController.getById )
    .post('/', origenController.create )
    .put('/:id', origenController.update )
    .delete('/:id', origenController._delete );

module.exports = router;