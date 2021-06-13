const  Sequelize  = require('sequelize');

/*const sequelize = new Sequelize('GerenciamentoRequisicao', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql'
});*/

const sequelize = new Sequelize('gerenciamentorequisicao', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize

/*
const openConnection = async() => {
    try 
    {
        await sequelize.authenticate();
        await sequelize.sync({ force: true });
        console.log('Conexão ao banco de dados estabelecida com sucesso.');
    } 
    catch (error) 
    {
        console.error('Erro ao tentar estabelecer conexão com o banco de dados, erro:', error);
    }
}

const db = {}

db.conexao = openConnection();


db.usuario = require("./src/models/Usuario.model")(sequelize, Sequelize)
db.requisicao = require("./src/models/Requisicao.model")(sequelize, Sequelize)
db.requisicaoEquipamento = require("./src/models/RequisicaoEquipamento.model")(sequelize, Sequelize)
db.requisicaoTipoEquipamento = require("./src/models/RequisicaoTipoEquipamento.model")(sequelize, Sequelize)
db.requisicaoSala = require('./src/models/SalaRequisicao.model')(sequelize, Sequelize)
db.requisicaoAcessorio = require("./src/models/RequisicaoAcessorio.model")(sequelize, Sequelize)
db.tipoEquipamento = require("./src/models/TipoEquipamento.model")(sequelize, Sequelize)
db.equipamento = require("./src/models/Equipamento.model")(sequelize, Sequelize)
db.documentoRevisao = require("./src/models/DocumentoRivisao.model")(sequelize, Sequelize)
db.sala = require("./src/models/Sala.model")(sequelize, Sequelize)
db.salaAcessorio = require("./src/models/SalaAcessorio.model")(sequelize, Sequelize)
db.acessorio = require("./src/models/Acessorio.model")(sequelize, Sequelize)
*/
