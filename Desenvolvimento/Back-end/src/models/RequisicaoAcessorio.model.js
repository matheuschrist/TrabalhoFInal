const requisicao = require("./Requisicao.model")
const acessorio = require("./Acessorio.model")

module.exports = (sequelize, Sequelize) => {

    const requisicaoAcessorio = sequelize.define('Requisicao_Acessorio',
    {
        QuantidadeAcessorio: {
            type: Sequelize.INTEGER,
            allowNull : false,
        }
    },
    {
        timestamps: false, 
        tablename: 'Requisicao_Acessorio', 
        freezeTableName: true
    })


    requisicaoAcessorio.associate = models => {
        equisicao.belongsToMany(models.acessorio, { through: requisicaoAcessorio })
        acessorio.belongsToMany(models.requisicao, { through: requisicaoAcessorio })
    }


    return requisicaoAcessorio
}