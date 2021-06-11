const usuario = require("./Usuario.model")
const equipamento = require("./Equipamento.model")

module.exports = (sequelize, Sequelize) => {

    const requisicao = sequelize.define('Requisicao',
    {
        RequisicaoId: {
            type: Sequelize.BIGINT,
            allowNull : false,
            primaryKey: true,
            autoIncrement:true
        },
        Tipo: {
            type: Sequelize.INTEGER,
            allowNull : false,
        },
        Status: {
            type: Sequelize.INTEGER,
            allowNull : false,
        },
        DataAbertura: {
            type: Sequelize.DATE,
            allowNull : false,
        },
        DataEntrega: {
            type: Sequelize.DATE,
            allowNull : true,
        },
        DataConclusao: {
            type: Sequelize.DATE,
            allowNull : true,
        },
        DataCancelamento: {
            type: Sequelize.DATE,
            allowNull : true,
        }
    },
    {
        timestamps: false, 
        tablename: 'Requisicao', 
        freezeTableName: true
    })

    requisicao.associate = models => {
        requisicao.belongsTo(models.usuario,{
            onDelete: 'RESTRICT',
            onUpdate: 'RESTRICT',
            foreignKey: 
            { 
                type: Sequelize.UUID,
                allowNull: false
            },
            as: 'usuarios',
        })

        requisicao.belongsToMany(models.equipamento,{
            throught: 'Requisicao_Equipamento'
        })
        equipamento.belongsToMany(models.requisicao,{
            throught: 'Requisicao_Equipamento'
        })
    } 
    
    return requisicao
}