module.exports = (sequelize, Sequelize) => {

    const documentoRevisao = sequelize.define('DocumentoRevisao',
    {
        DocumentoRevisaoId: {
            type: Sequelize.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement:true
        },
        Descricaoproblema: {
            type: Sequelize.TEXT,
            allowNull : false,
        },
        Status: {
            type: Sequelize.INTEGER,
            allowNull : false,
        },
        DataConclusao: {
            type: Sequelize.DATE,
            allowNull : false,
        },
        Defeito: {
            type: Sequelize.BOOLEAN,
            allowNull : false,
        },
        EquipamentoId: {
            type : Sequelize.BIGINT,
            references: {model: 'Equipamento', key: 'EquipamentoId'},
            onDelete: 'RESTRICT',
            onUpdate: 'RESTRICT',
            allowNull: true
        },
        SalaId: {
            type : Sequelize.BIGINT,
            references: {model: 'Sala', key: 'SalaId'},
            onDelete: 'RESTRICT',
            onUpdate: 'RESTRICT',
            allowNull: true
        }

    },
    {
        timestamps: false, 
        tablename: 'DocumentoRevisao', 
        freezeTableName: true
    })

    documentoRevisao.associate = models => {
        documentoRevisao.belongsTo(models.Equipamento, 
        {
            as : 'equipamento',
        })
        documentoRevisao.belongsTo(models.Sala, 
        {
            as : 'equipamento',
        })
    }

    return documentoRevisao

}
