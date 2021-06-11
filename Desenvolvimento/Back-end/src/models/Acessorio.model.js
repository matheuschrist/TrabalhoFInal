module.exports = (sequelize, Sequelize) => {

    const acessorio = sequelize.define('Acessorio',
    {
        AcessorioId: {
            type: Sequelize.INTEGER,
            allowNull : false,
            primaryKey: true,
            autoIncrement:true
        },
        Tipo: {
            type: Sequelize.STRING,
            allowNull : false
        },
        Quantidade: {
            type: Sequelize.INTEGER,
            allowNull : false
        },
    },
    {
        timestamps: false, 
        tablename: 'Acessorio', 
        freezeTableName: true
    })

    return acessorio

}
 