const express = require('express');
const router = express.Router(); 
const metacontroller = require('../controllers/metacontroller');

router
    .get('/', metacontroller.get )
    .get('/:id', metacontroller.getById )
    .post('/', metacontroller.create )
    .put('/:id', metacontroller.update )
    .delete('/:id', metacontroller._delete );

module.exports = router;