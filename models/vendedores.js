const mongoose = require('mongoose');
const {Schema} = mongoose;

const VendedoresShema = new Schema({
    nombre: {type: String, require: true},
    documento: {type: number, require: true},
    VentasDespachadas: {Type: number}
});

module.exports = mongoose.model('Vendedores', VendedoresShema);

