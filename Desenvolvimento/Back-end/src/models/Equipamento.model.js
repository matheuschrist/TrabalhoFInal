const tipoEquipamento = require("./TipoEquipamento.model")
const documentoRevisao = require("./DocumentoRivisao.model")


module.exports = (sequelize, Sequelize) => {

    const equipamento = sequelize.define('Equipamento',
    {
        EquipamentoId: {
            type: Sequelize.BIGINT,
            allowNull : false,
            primaryKey: true,
            autoIncrement:true
        },
        Patrimonio: {
            type: Sequelize.STRING,
            allowNull : false
        },
        Status: {
            type: Sequelize.INTEGER,
            allowNull : false
        },
        DataCadastro: {
            type: Sequelize.DATE,
            allowNull : false,
        },
        DocumentoRevisaoId: {
            type : Sequelize.BIGINT,
            references: {model: 'DocumentoRevisao', key: 'DocumentoRevisaoId'},
            onDelete: 'RESTRICT',
            onUpdate: 'RESTRICT',
            allowNull: true
        },
        TipoEquipamentoId: {
            type : Sequelize.BIGINT,
            references: {model: 'TipoEquipamento', key: 'TipoEquipamentoId'},
            onDelete: 'RESTRICT',
            onUpdate: 'RESTRICT',
            allowNull: false
        }
    },
    {
        timestamps: false, 
        tablename: 'Equipamento', 
        freezeTableName: true
    })

    equipamento.associate = models => {

        equipamento.belongsTo(models.TipoEquipamento, 
        {
            as : 'tipoEquipamento',
        })
        equipamento.belongsTo(models.DocumentoRevisao, 
        {
            as : 'documentosrevisao',
        })
        equipamento.belongsToMany(models.Requisicao,{
            throught: 'RequisicaoEquipamento',
            as : 'requisicoes',
            foreignKey: 'EquipamentoId'
        })

    }


    return equipamento

}