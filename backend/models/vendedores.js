const mongoose = require('../config/Database')

const VendedoresSchema = new mongoose.Schema({
  _id: { type: String },
  Nombre: { type: String, require: true },
  Documento: { type: String, require: true },
  Correo: { type: String, required: true },
  VentasDespachadas: { type: Number }
})

const vendedores = mongoose.model('Vendedores', VendedoresSchema)

module.exports = vendedores
