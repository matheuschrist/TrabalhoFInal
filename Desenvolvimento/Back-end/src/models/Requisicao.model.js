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
        },
        UsuarioId: {
            type : Sequelize.BIGINT,
            references: {model: 'Usuario', key: 'UsuarioId'},
            onDelete: 'RESTRICT',
            onUpdate: 'RESTRICT',
            allowNull: false
        }
    },
    {
        timestamps: false, 
        tablename: 'Requisicao', 
        freezeTableName: true
    })

    requisicao.associate = models => {
        requisicao.belongsTo(models.usuario,{
            as: 'usuarios',
        })

        requisicao.belongsToMany(models.Equipamento,{
            throught: 'RequisicaoEquipamento',
            as : 'equipamentos',
            foreignKey: 'RequisicaoId'
        })

        requisicao.belongsToMany(models.Sala, {
            through: 'RequisicaoSala',
            as : 'salas',
            foreignKey : 'RequisicaoId'
        })

        requisicao.belongsToMany(models.TipoEquipamento, {
            through: 'RequisicaoTipoEquipamento',
            as : 'equipamentosSolicitados',
            foreignKey : 'RequisicaoId'
        })

        requisicao.belongsToMany(models.Acessorio, { 
            through: 'RequisicaoAcessorio',
            as : 'acessorio',
            foreignKey : 'AcessorioId' 
        })
    } 
    
    return requisicao
}