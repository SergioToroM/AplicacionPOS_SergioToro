const express = require('express');
const dbclientes = require('../controllers/clientes.controller');
const router = express.Router();


router.get('/listarclientes', dbclientes.dbclientes);
// router.post('/listarclientes', dbclientes.dbclientes);
// router.put('/:id', dbclientes.modificarClientes);
// router.delete('/:id', dbclientes.eliminarlosClientes);

module.exports = router;