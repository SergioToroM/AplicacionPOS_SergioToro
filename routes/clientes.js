const express = require('express');
const router = express.Router();
const Clientes = require('./controllers/clientes.controller');
const losclientes = require('./controllers/clientes.controller');

router.get('/', losclientes.getClientes);
router.post('/', losclientes.createClientes);
router.put('/:id', losclientes.modificarClientes);
router.delete('/:id', losclientes.eliminarlosClientes);


module.express = router;