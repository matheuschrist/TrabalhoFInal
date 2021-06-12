module.exports = (sequelize, Sequelize) => {

    const acessorio = sequelize.define('Acessorio',
    {
        AcessorioId: {
            type: Sequelize.BIGINT,
            allowNull : false,
            primaryKey: true,
            autoIncrement:true
        },
        Tipo: {
            type: Sequelize.STRING,
            allowNull : false,
            unique: true
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

    acessorio.associate = models => {
        acessorio.belongsToMany(models.Requisicao, { 
            through: 'RequisicaoAcessorio',
            as : 'requisicao',
            foreignKey : 'RequisicaoId' 
        })
        acessorio.belongsToMany(models.sala, { 
            through: 'SalaAcessorio',
            as: 'sala',
            foreignKey: 'AcessorioId' 
        })
    }

    return acessorio

}
 