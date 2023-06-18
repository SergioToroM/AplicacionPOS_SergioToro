const mongoose = require('../config/Database');

const grafico = new mongoose.Schema({
    Nombre: {type: String},
    Stock:{type: Number}
});

const grafic = mongoose.model('grafico', grafico)

module.exports = grafic;
