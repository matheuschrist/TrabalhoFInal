module.exports = (sequelize, Sequelize) => {

    const requisicaoSala = sequelize.define('RequisicaoSala',
    {
        RequisicaoSalaId: {
            type: Sequelize.BIGINT,
            allowNull : false,
            primaryKey: true,
            autoIncrement: false
        },
        RequisicaoId: {
            type : Sequelize.BIGINT,
            references: {model: 'Requisicao', key: 'RequisicaoId'},
            onDelete: 'RESTRICT',
            onUpdate: 'RESTRICT',
            allowNull: false
        },
        SalaId: {
            type : Sequelize.BIGINT,
            references: {model: 'Sala', key: 'SalaId'},
            onDelete: 'RESTRICT',
            onUpdate: 'RESTRICT',
            allowNull: false
        },
        
    },
    {
        timestamps: false, 
        tablename: 'RequisicaoSala', 
        freezeTableName: true
    })
    

    return requisicaoSala

}