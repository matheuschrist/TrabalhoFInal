const { Model, DataTypes} = require('sequelize')

const sequelize = require("../../mysql")


class Accessory extends Model {}

Accessory.init({
    Tipo: {
        type: DataTypes.STRING,
        allowNull : false,
        unique: true
    },
    Quantidade: {
        type: DataTypes.INTEGER,
        allowNull : false
    },
},{
    sequelize,
    modelName: 'accessory',
    timestamps: false
})

module.exports = Accessory
 