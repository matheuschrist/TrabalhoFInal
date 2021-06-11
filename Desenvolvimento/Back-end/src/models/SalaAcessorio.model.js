const sala = require("./Sala.model")
const acessorio = require("./Acessorio.model")

module.exports = (sequelize, Sequelize) => {

    const salaAcessorio = sequelize.define('Sala_Acessorio',
    {
        QuantidadeAcessorio: {
            type: Sequelize.INTEGER,
            allowNull : false,
        }
    },
    {
        timestamps: false, 
        tablename: 'Sala_Acessorio', 
        freezeTableName: true
    })

    salaAcessorio.associate = models => 
    {
        sala.belongsToMany(models.acessorio, { through: salaAcessorio })
        acessorio.belongsToMany(models.sala, { through: salaAcessorio })
    }

    

    return salaAcessorio
}