const cliente = require('../models/cliente');
const vendedor = require('../models/vendedores');
const products = require ('../models/productos');
const graficos = require('../models/grafico');
// const descargarExcel = require ('../models/productos');

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
        HistoricoCompras : req.body.HistoricoCompras,
        Correo : req.body.Correo
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
        Correo : req.body.Correo,
        VentasDespachadas : req.body.VentasDespachadas
    });
    await Vendedores.save();
    res.redirect('/api/listarvendedores');
    console.log('Vendedores');
    
};


//PRODUCTOS
//Listar
exports.dbproductos = async(req,res) => {
    // console.log(products);
    let productoslista = await products.find();
    // console.log(productoslista);
    res.render('productos', {
        'listaproductos': productoslista
    });
}




//GRAFICO
// exports.dbgrafico = async(req, res) => {
//     console.log(graficos);
//     let graphics = await graficos.find();
//     res.render('grafico', {
//         'grafiquito': graphics
//     });
// }

// // exports.productos = (req, res)=>{ 
// //     res.render('productos'); 
// // }

// // exports.productos = (req, res)=>{ 
// //     let productoslista = await products.find();
// //     res.render('productos', {
// //         'listaproductos': productoslista
// //     });
// // }



// //DESCARGAR A EXCEL
// const xl = require('excel4node');
// const path = require('path');
// const fs = require('fs');


// exports.descargarExcel = async(req, res) => {
//     //configuramos el excel4node

//     //creamos un nuevo documento
//     const wb = new xl.Workbook();
//     //definimos el nombre con el cual se descargara el archivo 
//     const nombreArchivo = 'TablaProductos';
//     //se define el nombre 
//     var ws = wb.addWorksheet(nombreArchivo);

//     //definimos estilos
//     const columnaEstilo = wb.createStyle({
//         font: {
//             name: 'Arial',
//             color: '#000000',
//             size: 12,
//             bold: true,
//         }
//     });

//     const contenidoEstilo = wb.createStyle({
//         font: {
//             name: 'Arial',
//             color: '#565656',
//             size: 11,
//         }
//     });

//     //definimos el nombre de las columnas
//     ws.cell(1, 1).string('Categoria').style(columnaEstilo);
//     ws.cell(1, 2).string('Nombre').style(columnaEstilo);
//     ws.cell(1, 3).string('Descripcion').style(columnaEstilo);
//     ws.cell(1, 4).string('Precio').style(columnaEstilo);

//     //llamamos a la base de datos
//     const listaProductos = await producto.find()

//     // definimos un contador que empiece en 2 
//     let fila = 2;

//     //agregamos el contenido de la base de datos con un for o un forEach para llamar todos los datos 
    
//     listaProductos.forEach(datoProducto => {
//     ws.cell(fila, 1).string(datoProducto.categoriaProducto).style(contenidoEstilo);
//     ws.cell(fila, 2).string(datoProducto.nombreProducto).style(contenidoEstilo);
//     ws.cell(fila, 3).string(datoProducto.descripcionProducto).style(contenidoEstilo);
//     ws.cell(fila, 4).number(datoProducto.precioProducto).style(contenidoEstilo);
    
//     fila = fila +1;
//     });

//     const rutaExcel = path.join(__dirname,'excel'+ nombreArchivo +'.xlsx');

//     //escribir y guardar en el documento 
//     //se le inclulle la ruta y una funcion 
//     wb.write(rutaExcel, function(err,stars){

//         //capturamos y mostramos en caso de un error
//         if(err)console.log(err);
//         //creamos una funcion que descargue el archibo y lo elimine 
//         else{

//             //guardamos el documento en la carpeta para excel para poder descargarla en el pc
//                 res.download(rutaExcel);
                
//                 console.log('documento descargado correctamente');

//                 //Eliminamos el documento de la carpeta excel
//                 fs.rm(rutaExcel, function(err){
//                     if(err)console.log(err);
//                     else console.log('Archivo descargado y borrado del servidor correctamente');
//                 });
                
//         }
//     });
// }
