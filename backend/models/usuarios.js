const mongoose = require('../config/Database')

const UsuariosSchema = new mongoose.Schema({
  _id: { type: String },
  Documento: { type: String, required: true },
  Nombre: { type: String, required: true },
  Correo: { type: String, required: true },
  Rol: { type: String, required: true },
  Password: { type: String, required: true }
})

const usuarios = mongoose.model('registrousuarios', UsuariosSchema)

module.exports = usuarios