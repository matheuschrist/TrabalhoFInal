const { Model, DataTypes} = require('sequelize')

const sequelize = require("../../mysql")

class ClassAccessory extends Model {}

ClassAccessory.init({
    QuantidadeAcessorio: {
        type: DataTypes.INTEGER,
        allowNull : false,
    },
},{
    sequelize,
    nameModel: "classAccessory",
    timestamps: false
})

module.exports = ClassAccessory