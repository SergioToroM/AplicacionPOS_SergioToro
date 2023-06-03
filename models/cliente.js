const mongoose = require('../config/Database');

const ClientesSchema = new mongoose.Schema({
    Nombre: {type: String, required: true},
    Telefono: {type: String, required: true},
    Ubicacion: {centro: {type: Array}, Zoom:{type: Number}},
    TotalCompras: {type: Number},
    HistoricoCompras: {type: Number}
});

const cliente = mongoose.model('Cliente', ClientesSchema);

module.exports = cliente;