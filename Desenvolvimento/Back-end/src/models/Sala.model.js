const documentoRevisao = require("./DocumentoRivisao.model")
const requisicao = require("./Requisicao.model")

module.exports = (sequelize, Sequelize) => {

    const sala = sequelize.define('Sala',
    {
        SalaId: {
            type: Sequelize.BIGINT,
            allowNull : false,
            primaryKey: true,
            autoIncrement:true
        },
        NumeroSala: {
            type: Sequelize.INTEGER,
            allowNull : false, 
            unique: true
        },
        Status: {
            type: Sequelize.INTEGER,
            allowNull : false
        },
        QuantidadeAluno: {
            type: Sequelize.INTEGER,
            allowNull : false,
        },
        QuantidadeAlunoPandemia: {
            type: Sequelize.INTEGER,
            allowNull : false,
        },
    },
    {
        timestamps: false, 
        tablename: 'Sala', 
        freezeTableName: true
    })

    sala.associate = models => {
        sala.belongsToMany(models.Requisicao, {
            through: 'RequisicaoSala',
            as : 'requisicoes',
            foreignKey : 'SalaId'
        })
        sala.belongsToMany(models.acessorio, { 
            through: 'SalaAcessorio',
            as: 'acessorio',
            foreignKey: 'SalaId'
        })
    }

    

    return sala

}