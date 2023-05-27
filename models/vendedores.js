const mongoose = require('mongoose');
const {Schema} = mongoose;

const VendedoresShema = new Schema({
    id: {type: Number, min: 0, max: 5000},
    nombre: {type: String, require: true},
    documento: {type: Number, require: true},
    VentasDespachadas: {Type: Number}
});

module.exports = mongoose.model('Vendedores', VendedoresShema);

