const { Model, DataTypes} = require('sequelize')

const sequelize = require("../../mysql")


class RequestTypeEquipment extends Model {}

RequestTypeEquipment.init({
    QuantidadeSolicitada: {
        type: DataTypes.INTEGER,
        allowNull : false
    },
},{
    sequelize,
    nameModel: 'requestTypeEquipment',
    timestamps: false
})

module.exports = RequestTypeEquipment
