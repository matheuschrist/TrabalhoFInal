const { Model, DataTypes} = require('sequelize')

const sequelize = require("../../mysql")


class RequestAccessory extends Model {}

RequestAccessory.init({
    QuantidadeAcessorio: {
        type: DataTypes.INTEGER,
        allowNull : false,
    },
}, {
    sequelize,
    nameModel: 'requestAccessory',
    timestamps: false
})

module.exports = RequestAccessory