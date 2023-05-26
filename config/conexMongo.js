const mongoose = require('mongoose')


mongoose.connect(uri, conex, { useNewUrlParser: true });

module.exports = mongoose;