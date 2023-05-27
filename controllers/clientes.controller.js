const Clientes = require('../models/cliente');
const losclientes = {};

losclientes.getClientes = async(req,res) => {
    const cliente = await Clientes.find();
    res.json(cliente);
}

losclientes.createClientes = async(req,res) => {
    const cliente = new Clientes(req.body);
    await cliente.save();
    res.json({Status: 'Cliente registrado'});
}

losclientes.modificarClientes = async(req, res) => {
    const{id} = req.params;
    const losclientesEdit = {
        nombre: req.body.nombre,
        telefono: req.body.telefono,
        ubicacion: req.body.ubicacion
    };
    await Clientes.findByIdAndUpdate(id, {$set: losclientesEdit}, {new: true});
    res.json({Status: 'Cliente actualizado'});
}

losclientes.eliminarlosClientes = async(req,res) => {
    await Clientes.findByIdAndDelete(req.params.id);
    res.json({Status: 'Cliente eliminado'});
}

module.exports = losclientes;