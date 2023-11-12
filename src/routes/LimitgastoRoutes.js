const express = require('express');
const router = express.Router(); 
const LimitgastoController = require('../controllers/Limitgastocontroller');

router
    .get('/', LimitgastoController.get )
    .get('/:id', LimitgastoController.getById )
    .post('/', LimitgastoController.create )
    .put('/:id', LimitgastoController.update )
    .delete('/:id', LimitgastoController._delete );

module.exports = router;