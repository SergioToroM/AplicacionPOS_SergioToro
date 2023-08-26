const express = require('express')
const controller = require('../controllers/controller')
const router = express.Router()
const enviarcorreo = require('../controllers/correo')

router.get('/clientes', controller.clientes)
router.get('/listarclientes', controller.dbclientes)
router.post('/modificarCliente', controller.editarCliente)
router.post('/agregar', controller.createClientes)

router.get('/vendedores', controller.vendedores)
router.get('/listarvendedores', controller.dbvendedores)
router.post('/editarVendedor', controller.modificarVend)
router.post('/eliminarVendedor/:id', controller.eliminarVendedor)
router.post('/agregarv', controller.createVendedores)

router.get('/productos', controller.ventaproductos)
router.get('/listarproductos', controller.dbproductos)
router.get('/registrarproductos', controller.regproductos)
router.post('/modifProducto', controller.editarProducto)
router.post('/eliminarProducto/:id', controller.eliminarProducto)
router.post('/registrarproductos', controller.createProducto)

router.post('/agregarUser', controller.createUsuario)

// router.post('/loginform', controller.usuarios)

// router.get('/excel', descargarExcel.descargarExcel);

router.get('/correo', enviarcorreo.nodemailer)

module.exports = router
