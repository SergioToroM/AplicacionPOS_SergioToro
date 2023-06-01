const mongoose = require('mongoose')

const uri ='mongodb+srv://sergiotoro19:n4UlfL1mvuWWecWH@clusteradso2498009.nnizzya.mongodb.net/AplicacionPOS'
const conex = {
    usuario: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    basedatos: process.env.DB_NOMBE
}


mongoose.connect(uri, conex, { useNewUrlParser: true });

module.exports = mongoose;