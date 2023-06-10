const mongoose = require('../config/Database');

const ProductsSchema = new mongoose.Schema({
    Referencia: {type: String, required: true},
    Nombre: {type: String, required: true},
    Descripcion: {type: String},
    Precio: {type: Number},
    Stock: {type: Number}

});

const productos = mongoose.model('Productos', ProductsSchema);

module.exports = productos;