// Setup do Express e do Morgan
const express = require('express');
const app = express();
const morgan = require('morgan');

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

// Rota raíz 
app.get('/', (req, res) => {
  res.send("Página Principal.");
});

// Outras Rotas
const acessorioRoutes = require('./src/routes/Acessorio.routes');
const acessorioSalaRoutes = require('./src/routes/AcessorioSala.routes');
const documentoRevisaoRoutes = require('./src/routes/DocumentoRevisao.routes');
const equipamentoRoutes = require('./src/routes/Equipamento.routes');
const requisicaoRoutes = require('./src/routes/Requisicao.routes');
const requisicaoAcessorioRoutes = require('./src/routes/RequisicaoAcessorio.routes');
const requisicaoEquipamentoRoutes = require('./src/routes/RequisicaoEquipamento.routes');
const requisicaoSalaRoutes = require('./src/routes/RequisicaoSala.routes');
const requisicaoTipoEquipamentoRoutes = require('./src/routes/RequisicaoTipoEquipamento.routes');
const salaRoutes = require('./src/routes/Sala.routes');
const tipoEquipamentoRoutes = require('./src/routes/TipoEquipamento.routes');
const usuarioRoutes = require('./src/routes/Usuario.routes');

app.use('/api/acessorios', acessorioRoutes);
app.use('/api/acessoriosSala', acessorioSalaRoutes);
app.use('/api/documentos', documentoRevisaoRoutes);
app.use('/api/equipamentos', equipamentoRoutes);
app.use('/api/requisicoes', requisicaoRoutes);
app.use('/api/requisicoesAcessorio', requisicaoAcessorioRoutes);
app.use('/api/requisicoesEquipamento', requisicaoEquipamentoRoutes);
app.use('/api/requisicoesSala', requisicaoSalaRoutes);
app.use('/api/requisicoesTipoEquipamento', requisicaoTipoEquipamentoRoutes);
app.use('/api/salas', salaRoutes);
app.use('/api/tiposEquipamento', tipoEquipamentoRoutes);
app.use('/api/usuarios', usuarioRoutes);

// Em caso de erro
app.use((req, res, next) => {

    const erro = new Error('Não encontrado.');
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