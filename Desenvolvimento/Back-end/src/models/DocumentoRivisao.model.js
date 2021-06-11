module.exports = (sequelize, Sequelize) => {

    const documentoRevisao = sequelize.define('DocumentoRevisao',
    {
        DocumentoRevisaoId: {
            type: Sequelize.INTEGER,
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
        }

    },
    {
        timestamps: false, 
        tablename: 'DocumentoRevisao', 
        freezeTableName: true
    })

    return documentoRevisao

}
