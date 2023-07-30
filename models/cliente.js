const mongoose = require('../config/Database');

const ClientesSchema = new mongoose.Schema({
    Nombre: {type: String, required: true},
    Telefono: {type: String, required: true},
    TotalCompras: {type: Number},
    Correo: {type: String, required: true}
});

const cliente = mongoose.model('Cliente', ClientesSchema);

module.exports = cliente;