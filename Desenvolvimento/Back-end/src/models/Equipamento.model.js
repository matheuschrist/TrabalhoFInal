module.exports = (sequelize, Sequelize) => {

    const equipamento = sequelize.define('Equipamento',
    {
        EquipamentoId: {
            type: Sequelize.INTEGER,
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

    return equipamento

}
const tipoEquipamento = require("./TipoEquipamento.model")


equipamento.belongsTo(tipoEquipamento, 
    {foreignKey: {
        name : 'TipoEquipamentoId',
        allowNull: false,
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT'
}})