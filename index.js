const express = require('express');
const logger = require('morgan');
const app = express();
const path = require('path');


const mirouter = require('./routes/enrutamiento')
const env = require('dotenv');
const { clientes } = require('./controllers/controller');
env.config();
app.use(logger('dev'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/api',mirouter);


const PORT = 4070;

app.get('/', (req,res) =>{res.render('../views/productos',)});

app.listen( process.env.PORT || 4070,()=>{
    console.log('En línea, puerto', PORT );
});



