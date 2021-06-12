const requisicao = require("./Requisicao.model")
const acessorio = require("./Acessorio.model")

module.exports = (sequelize, Sequelize) => {

    const requisicaoAcessorio = sequelize.define('RequisicaoAcessorio',
    {
        RequisicaoAcessorioId: {
            type: Sequelize.BIGINT,
            allowNull : false,
            primaryKey: true,
            autoIncrement:true
        },
        QuantidadeAcessorio: {
            type: Sequelize.INTEGER,
            allowNull : false,
        },
        RequisicaoId: {
            type : Sequelize.BIGINT,
            references: {model: 'Requisicao', key: 'RequisicaoId'},
            onDelete: 'RESTRICT',
            onUpdate: 'RESTRICT',
            allowNull: false
        },
        AcessorioId: {
            type : Sequelize.BIGINT,
            references: {model: 'Acessorio', key: 'AcessorioId'},
            onDelete: 'RESTRICT',
            onUpdate: 'RESTRICT',
            allowNull: false
        },
    },
    {
        timestamps: false, 
        tablename: 'RequisicaoAcessorio', 
        freezeTableName: true
    })



    return requisicaoAcessorio
}