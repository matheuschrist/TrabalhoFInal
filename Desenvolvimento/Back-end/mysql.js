const  Sequelize  = require('sequelize');

const sequelize = new Sequelize('GerenciamentoEquipamento', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql'
});

const openConnection = async() => {
    try 
    {
        await sequelize.authenticate();
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
db.tipoEquipamento = require("./src/models/TipoEquipamento.model")(sequelize, Sequelize)
db.requisicaoTipoEquipamento = require("./src/models/RequisicaoTipoEquipamento.model")(sequelize, Sequelize)
db.Equipamento = require("./src/models/Equipamento.model")(sequelize, Sequelize)

module.exports = db