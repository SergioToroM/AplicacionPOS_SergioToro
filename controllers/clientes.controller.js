const cliente = require('../models/cliente');
const vendedor = require('../models/vendedores');
const products = require ('../models/productos');

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
    res.redirect('/api/listarclientes');
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

exports.vendedores =(req, res)=>{ 
    res.render('vendedores');
}

exports.createVendedores = async(req,res) => {
    console.log(req.body);
    const Vendedores = new vendedor({
        Nombre : req.body.Nombre,
        Documento : req.body.Documento,
        VentasDespachadas : req.body.VentasDespachadas
    });
    await Vendedores.save();
    res.redirect('/api/listarvendedores');
    console.log('Vendedores');
    
};


///PRODUCTOS
// Listar
exports.dbproductos = async(req,res) => {
    let productoslista = await products.find();
    res.render('productos', {
        'listaproductos': productoslista
    });
}

exports.productos = (req, res)=>{ 
    res.render('productos', {
        'listaproductos': productoslista
    });
}
