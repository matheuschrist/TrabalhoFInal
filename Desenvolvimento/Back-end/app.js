const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const UsuarioController = require('./src/controller/UsuarioController')


app.use("/usuarios", UsuarioController)


app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Header', 
        'Origin, X-Requested-With, Content-tye, Accept, Authorization'
    );

    if(req.method === 'OPTIONS')
    {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).send({});
    }
    next();
});


app.use((req, res, next) => {
    const erro = new Error('Não encontrado');
    erro.status = 400;
    next(erro);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500)
    return res.send({
        erro: {
            mensagem: error.message
        }
    })
});

//app.use("/usuario", UsuarioController);


module.exports = app;