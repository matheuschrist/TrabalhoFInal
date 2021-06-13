const { Model, DataTypes} = require('sequelize')

const sequelize = require("../../mysql")

class Class extends Model {}

Class.init({
    NumeroSala: {
        type: DataTypes.INTEGER,
        allowNull : false, 
        unique: true
    },
    Status: {
        type: DataTypes.INTEGER,
        allowNull : false
    },
    QuantidadeAluno: {
        type: DataTypes.INTEGER,
        allowNull : false,
    },
    QuantidadeAlunoPandemia: {
        type: DataTypes.INTEGER,
        allowNull : false,
    },
},{
    sequelize,
    nameModel: 'class',
    timestamps: false
});



module.exports = Class