const cliente = require('../models/cliente');
const vendedor = require('../models/vendedores');

///CLIENTES
// Listar
exports.dbclientes = async(req,res) => {
    let clienteslista = await cliente.find();
    res.render('listarclientes', {
        'listaclientes': clienteslista
    });
}

exports.clientes =(req, res)=>{ //render asocia un documento que contiene lo que va mostar al usuario  //
    res.render('clientes');
}

exports.createClientes = async(req,res) => {
    const Clientes = cliente({
        Nombre : req.body.Nombre,
        Telefono : req.body.Telefono,
        Ubicacion : req.body.Ubicacion,
        TotalCompras : req.body.TotalCompras,
        HistoricoCompras : req.body.HistoricoCompras
    });
    Clientes.save();
    res.redirect('/api/Clientes');
    console.log('Clientes');
    
};


///VENDEDORES
// Listar
exports.dbvendedores = async(req,res) => {
    let vendedorlista = await vendedor.find();
    res.render('listarvendedores', {
        'listavendedores': vendedorlista
    });
}

exports.vendedores =(req, res)=>{ //render asocia un documento que contiene lo que va mostar al usuario  //
    res.render('vendedores');
}

exports.createVendedores = async(req,res) => {
    const Vendedores = vendedores({
        Nombre : req.body.Nombre,
        Documento : req.body.Documento,
        VentasDespachadas : req.body.VentasDespachadas
    });
    Vendedores.save();
    res.redirect('/api/Vendedores');
    console.log('Vendedores');
    
};