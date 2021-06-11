module.exports = (sequelize, Sequelize) => {

    const usuario = sequelize.define('Usuario',
    {
        UsuarioId: {
            type: Sequelize.INTEGER,
            allowNull : false,
            primaryKey: true,
            autoIncrement:true
        },
        Nome: {
            type: Sequelize.STRING,
            allowNull : false
        },
        Usuario: {
            type: Sequelize.STRING,
            allowNull : false
        },
        Senha: {
            type: Sequelize.STRING,
            allowNull : false,
        },
        Identificacao: {
            type: Sequelize.STRING,
            allowNull : false,
        },
        Tipo: {
            type: Sequelize.INTEGER,
            allowNull : false,
        }
    },
    {
        timestamps: false, 
        tablename: 'Usuario', 
        freezeTableName: true
    })

    return usuario

}