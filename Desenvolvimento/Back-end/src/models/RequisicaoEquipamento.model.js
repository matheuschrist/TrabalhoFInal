module.exports = (sequelize, Sequelize) => {

    const requisicaoEquipamento = sequelize.define('RequisicaoEquipamento',
    {
        RequisicaoEquipamentoId: {
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
        EquipamentoId: {
            type : Sequelize.BIGINT,
            references: {model: 'Equipamento', key: 'EquipamentoId'},
            onDelete: 'RESTRICT',
            onUpdate: 'RESTRICT',
            allowNull: false
        },
        
    },
    {
        timestamps: false, 
        tablename: 'RequisicaoEquipamento', 
        freezeTableName: true
    })
    

    return requisicaoEquipamento

}