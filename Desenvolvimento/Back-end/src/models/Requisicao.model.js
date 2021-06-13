const { Model, DataTypes} = require('sequelize')

const sequelize = require("../../mysql")


class Request extends Model {}

Request.init({
    Tipo: {
        type: DataTypes.INTEGER,
        allowNull : false,
    },
    Status: {
        type: DataTypes.INTEGER,
        allowNull : false,
    },
    DataAbertura: {
        type: DataTypes.DATE,
        allowNull : false,
    },
    DataEntrega: {
        type: DataTypes.DATE,
        allowNull : true,
    },
    DataConclusao: {
        type: DataTypes.DATE,
        allowNull : true,
    },
    DataCancelamento: {
        type: DataTypes.DATE,
        allowNull : true,
    },
},{
    sequelize,
    modelName: 'request',
    timestamps: false
})

module.exports = Request