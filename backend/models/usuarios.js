const mongoose = require('../config/Database')

const UsuariosSchema = new mongoose.Schema({
  Documento: { type: String, required: true },
  Nombre: { type: String, required: true },
  Correo: { type: String, required: true },
  Rol: { type: String, required: true }
})

const usuarios = mongoose.model('Usuarios', UsuariosSchema)

module.exports = usuarios