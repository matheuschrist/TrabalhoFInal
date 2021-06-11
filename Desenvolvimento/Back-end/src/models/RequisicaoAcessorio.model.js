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

    return requisicaoAcessorio

}

const requisicao = require("./Requisicao.model")
const acessorio = require("./Acessorio.model")

requisicao.belongsToMany(acessorio, { through: requisicaoAcessorio })
acessorio.belongsToMany(requisicao, { through: requisicaoAcessorio })