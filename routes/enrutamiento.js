const express = require('express');
const dbclientes = require('../controllers/controller');
const dbvendedores = require('../controllers/controller');
const dbproductos = require('../controllers/controller');
const ventaproductos = require('../controllers/controller');
const dbgrafico = require('../controllers/controller');
const router = express.Router();
const enviarcorreo = require('../controllers/correo');


router.get('/clientes', dbclientes.clientes);
router.get('/listarclientes', dbclientes.dbclientes);
router.post('/agregar',dbclientes.createClientes);

router.get('/vendedores', dbvendedores.vendedores);
router.get('/listarvendedores', dbvendedores.dbvendedores);
router.post('/agregarv', dbvendedores.createVendedores);

// router.get('/productos', ventaproductos.productos);
router.get('/todosproductos', ventaproductos.productos);
router.get('/listarproductos', dbproductos.dbproductos);
router.post('/agregarprod', dbproductos.createProducto);


// router.get('/excel', descargarExcel.descargarExcel);

router.get('/correo', enviarcorreo.nodemailer);


module.exports = router;