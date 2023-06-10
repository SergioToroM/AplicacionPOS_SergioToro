const express = require('express');
const dbclientes = require('../controllers/clientes.controller');
const dbvendedores = require('../controllers/clientes.controller');
const dbproductos = require('../controllers/clientes.controller');
const router = express.Router();


router.get('/clientes', dbclientes.clientes);
router.get('/listarclientes', dbclientes.dbclientes);
router.post('/agregar',dbclientes.createClientes);

router.get('/vendedores', dbvendedores.vendedores);
router.get('/listarvendedores', dbvendedores.dbvendedores);
router.post('/agregarv', dbvendedores.createVendedores);

router.get('/productos', dbproductos.dbproductos);


module.exports = router;