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
        sala.belongsTo(models.documentoRevisao,{
            as: 'documentosRevisao',
            onDelete: 'RESTRICT',
            onUpdate: 'RESTRICT',
            foreignKey: 
            { 
                type: DataTypes.UUID,
                allowNull: true,
            },
    
        })
        sala.belongsToMany(models.requisicao, {
            through: 'Requisicao_Sala'
        })
        requisicao.belongsToMany(models.sala, {
            through: 'Requisicao_Sala'
        })
    }

    

    return sala

}