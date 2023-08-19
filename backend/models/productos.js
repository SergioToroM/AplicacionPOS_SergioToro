const { truncate } = require('fs')
const mongoose = require('../config/Database')

const ProductsSchema = new mongoose.Schema({
  referencia: { type: String, required: true },
  nombre: { type: String, required: true },
  descripcion: { type: String },
  precio: { type: Number, required: true },
  stock: { type: Number, required: true }

})

const productos = mongoose.model('Productos', ProductsSchema)

module.exports = productos
