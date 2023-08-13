const express = require('express');
const controller = require('../controllers/controller');
const router = express.Router();
const enviarcorreo = require('../controllers/correo');


router.get('/clientes', controller.clientes);
router.get('/listarclientes', controller.dbclientes);
router.post('/agregar',controller.createClientes);

router.get('/vendedores', controller.vendedores);
router.get('/listarvendedores', controller.dbvendedores);
router.post('/agregarv', controller.createVendedores);

router.get('/productos', controller.ventaproductos);
router.get('/listarproductos', controller.dbproductos);
// router.post('/registrarproductos', registrarProducto.createProducto);
router.get('/registrarproductos', controller.regproductos);



// router.get('/excel', descargarExcel.descargarExcel);

router.get('/correo', enviarcorreo.nodemailer);


module.exports = router;