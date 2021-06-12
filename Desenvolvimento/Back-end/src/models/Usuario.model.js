module.exports = (sequelize, Sequelize) => {

    const usuario = sequelize.define('Usuario',
    {
        UsuarioId: {
            type: Sequelize.BIGINT,
            allowNull : false,
            primaryKey: true,
            autoIncrement:true
        },
        Nome: {
            type: Sequelize.STRING,
            allowNull : false,
            validate: {
                len: [3,45]
            }
        },
        Usuario: {
            type: Sequelize.STRING,
            allowNull : false,
            validate: {
                len: [3,15]
            },
            unique: true
        },
        Senha: {
            type: Sequelize.STRING,
            allowNull : false,
            validate: {
                len: [3,10]
            }
        },
        Identificacao: {
            type: Sequelize.STRING,
            allowNull : false,
            validate: {
                len: [9]
            }
        },
        Tipo: {
            type: Sequelize.INTEGER,
            allowNull : false,
        },
        Email: {
            type: Sequelize.STRING,
            allowNull: false,
            validation: {
                isEmail: true
            },
            unique: true 
        }
    },
    {
        timestamps: false, 
        tablename: 'Usuario', 
        freezeTableName: true
    })

    return usuario

}