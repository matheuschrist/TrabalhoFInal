const sala = require("./Sala.model")
const acessorio = require("./Acessorio.model")

module.exports = (sequelize, Sequelize) => {

    const salaAcessorio = sequelize.define('SalaAcessorio',
    {
        SalaAcessorioId:{
            type: Sequelize.BIGINT,
            allowNull : false,
            primaryKey: true,
            autoIncrement:true
        },
        QuantidadeAcessorio: {
            type: Sequelize.INTEGER,
            allowNull : false,
        },
        AcessorioId: {
            type : Sequelize.BIGINT,
            references: {model: 'Acessorio', key: 'AcessorioId'},
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
        tablename: 'SalaAcessorio', 
        freezeTableName: true
    })

    

    return salaAcessorio
}