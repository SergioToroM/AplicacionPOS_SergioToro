const mongoose = require('mongoose');
const {Schema} = mongoose;

const VentasShema = new Schema({
    productosVenta: {type: String},
    subtotalVenta: {type: number},
    fechaVenta: {type: Date},
    impuesto: {type: number},
    totalVenta: {type: number},
    clienteCompra: {type: String},
    vendedorCompra: {type: String}
});

module.exports = mongoose.model('Ventas', VentasShema);