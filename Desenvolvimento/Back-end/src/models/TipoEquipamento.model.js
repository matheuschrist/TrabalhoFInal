const { Model, DataTypes} = require('sequelize')

const sequelize = require("../../mysql")

class TypeEquipment extends Model {}

TypeEquipment.init({
    NomeTipo: {
        type: DataTypes.STRING,
        allowNull : false,
        unique: true
    },
},{
    sequelize,
    nameModel: 'typeEquipment',
    timestamps: false
})

module.exports = TypeEquipment