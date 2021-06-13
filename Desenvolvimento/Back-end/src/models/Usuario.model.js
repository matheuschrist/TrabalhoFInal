const { Model, DataTypes} = require('sequelize')

const sequelize = require("../../mysql")

class User extends Model {}

User.init({
    Nome: {
        type: DataTypes.STRING,
        allowNull : false,
        validate: {
            len: [3,45]
        }
    },
    Usuario: {
        type: DataTypes.STRING,
        allowNull : false,
        validate: {
            len: [3,15]
        },
        unique: true
    },
    Senha: {
        type: DataTypes.STRING,
        allowNull : false,
        validate: {
            len: [3,10]
        }
    },
    Identificacao: {
        type: DataTypes.STRING,
        allowNull : false,
        validate: {
            len: [9]
        }
    },
    Tipo: {
        type: DataTypes.INTEGER,
        allowNull : false,
    },
    Email: {
        type: DataTypes.STRING,
        allowNull: false,
        validation: {
            isEmail: true
        },
        unique: true 
    }
},{
    sequelize,
    nameModel: 'User', 
    timestamps: false
})


module.exports = User