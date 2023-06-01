const mongoose = require('../config/Database');

const ClientesShema = new mongoose.Schema({
    id: {type: Number, min: 0, max: 5000},
    Nombre: {type: String, required: true},
    Telefono: {type: String, required: true},
    Ubicacion: {centro: {type: Array, required: true}, Zoom: {type: Number, default: 20}},
    TotalCompras: {type: Number},
    HistoricoCompras: {type: Array, required: []}
});

const cliente = mongoose.model('Clientes', ClientesShema);

module.exports = cliente;