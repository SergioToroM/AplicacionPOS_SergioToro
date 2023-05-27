const mongoose = require('mongoose');
const {Schema} = mongoose;

const ClientesShema = new Schema({
    nombre: {type: String, require: true},
    telefono: {type: number},
    ubicación: {type: String},
    TotalCompras: {type: number},
    HistoricoCompras: {type: number}
});

module.exports = mongoose.model('Clientes', ClientesShema);