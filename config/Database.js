const mongoose = require('mongoose')

const uri ='mongodb+srv://sergiotoro19:n4UlfL1mvuWWecWH@clusteradso2498009.nnizzya.mongodb.net/AplicacionPOS'

mongoose.connect(uri, conex, { useNewUrlParser: true });

module.exports = mongoose;