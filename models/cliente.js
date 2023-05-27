const mongoose = require('mongoose');
const {Schema} = mongoose;

const ClientesShema = new Schema({
    id: {type: Number, min: 0, max: 5000},
    nombre: {type: String, require: true},
    telefono: {type: Number},
    ubicación: {type: String},
    TotalCompras: {type: Number},
    HistoricoCompras: {type: Number}
});

module.exports = mongoose.model('Clientes', ClientesShema);