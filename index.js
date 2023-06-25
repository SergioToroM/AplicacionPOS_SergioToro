const express = require('express');
const logger = require('morgan');
const app = express();
const path = require('path');

const mirouter = require('./routes/enrutamiento')
const env = require('dotenv');
env.config();
app.use(logger('dev'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/api',mirouter);

const PORT = 4900;

app.get('/', (req,res) =>{res.render('../views/productos',)});

app.listen( process.env.PORT || 4900,()=>{
    console.log('En línea, puerto', PORT );
});
