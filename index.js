const express = require('express');
const morgan = require('morgan');
const app = express();

const{mongoose} = require('/')

app.set('port', process.env.PORT || 4300);
app.use(morgan('dev'));
app.use(express.json());

app.use('/api/clientes', require ('/routes/clientes.routes'));

console.log('En linea, uso del puerto ',app.get('port'));
