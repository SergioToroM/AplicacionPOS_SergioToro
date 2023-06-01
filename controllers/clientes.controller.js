const cliente = require('../models/cliente');

///CLIENTES
// Listar
exports.dbclientes = async(req,res) => {
    let clienteslista = await cliente.find();
    res.render('listarclientes', {
        'listaclientes': clienteslista
    });
}

// exports.createClientes = async(req,res) => {
//     console.log(req.body)
//     const nuevoCliente = cliente({
//         id : req.body.id,
//         nombre : req.body.nombre,
//         telefono : req.body.telefono,
//         ubicacion : req.body.ubicacion,
//         totalCompras : req.body.totalCompras,
//         historicoCompras : req.body.historicoCompras
//     });
//     await nuevoCliente.save();
//     res.redirect('clientes');
// };

// dbclientes.createClientes = async(req,res) => {
//     const cliente = new Clientes(req.body);
//     await cliente.save();
//     res.json({Status: 'Cliente registrado'});
// }

// dbclientes.modificarClientes = async(req, res) => {
//     const{id} = req.params;
//     const losclientesEdit = {
//         nombre: req.body.nombre,
//         telefono: req.body.telefono,
//         ubicacion: req.body.ubicacion
//     };
//     await Clientes.findByIdAndUpdate(id, {$set: losclientesEdit}, {new: true});
//     res.json({Status: 'Cliente actualizado'});
// }

// dbclientes.eliminarlosClientes = async(req,res) => {
//     await Clientes.findByIdAndDelete(req.params.id);
//     res.json({Status: 'Cliente eliminado'});
// }

