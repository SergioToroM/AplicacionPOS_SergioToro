const mongoose = require('../config/Database');

const ProductsSchema = new mongoose.Schema({
    referencia: {type: String, required: true},
    nombre: {type: String, required: true},
    descripcion: {type: String},
    precio: {type: Number},
    stock: {type: Number}

});

const productos = mongoose.model('Productos', ProductsSchema);

module.exports = productos;