const mongoose = require('mongoose');
const {Schema} = mongoose;

const VentasShema = new Schema({
    productosVenta: {type: String},
    subtotalVenta: {type: Number},
    fechaVenta: {type: Date},
    impuesto: {type: Number},
    totalVenta: {type: Number},
    clienteCompra: {type: String},
    vendedorCompra: {type: String}
});

module.exports = mongoose.model('Ventas', VentasShema);