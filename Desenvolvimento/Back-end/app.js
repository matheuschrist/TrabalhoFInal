const express = require('express');
const app = express();
const sequelize = require('./mysql')
require('./associacoes')
const morgan = require('morgan');

const port = process.env.PORT || 3000;


const UsuarioController = require('./src/controller/UsuarioController')
const TipoEquipamento = require('./src/controller/TipoEquipamentoController')
const Equipamento = require('./src/controller/EquipamentoController')
const Sala = require('./src/controller/SalaController')
const Acessorio = require('./src/controller/AcessorioController')

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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

app.listen(port, function() {
    sequelize.sync({force: false})
    .then(() => {
        console.log("Temos conexão com o banco")
    })
    .catch(error => {
        console.log("O erro produzido ", error)
    })
})

app.use("/usuario", UsuarioController)
app.use("/tipoEquipamento", TipoEquipamento)
app.use("/equipamento", Equipamento)
app.use("/sala", Sala)
app.use("/acessorio", Acessorio)

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

module.exports = app;