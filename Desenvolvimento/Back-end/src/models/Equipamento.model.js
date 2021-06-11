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
    },
    {
        timestamps: false, 
        tablename: 'Equipamento', 
        freezeTableName: true
    })

    equipamento.associate = models => {

        equipamento.belongsTo(models.tipoEquipamento, 
        {
            foreignKey: 
            {
                type: DataTypes.UUID,
                
                allowNull: false,
            },
            
        
            onDelete: 'RESTRICT',
            onUpdate: 'RESTRICT',
            as : 'tipoEquipamento',
        })
        equipamento.belongsTo(models.documentoRevisao, 
        {
            foreignKey: 
            {
                type: DataTypes.UUID,
                allowNull: true,
            },
            onDelete: 'RESTRICT',
            onUpdate: 'RESTRICT',
            as : 'documentosrevisao',
        })

    }


    return equipamento

}