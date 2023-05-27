const express = require('express');
const morgan = require('morgan');
const app = express();
const path = require('path');

const mirouter = require('./routes/clientes')

//const{mongoose} = require('/')

app.set('view engine', 'ejs');

app.set('port', process.env.PORT || 4300);
app.use(morgan('dev'));
app.use(express.json());
app.use('/api/clientes', mirouter);

console.log('En linea, puerto ',app.get('port'));
