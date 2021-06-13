const { Model, DataTypes} = require('sequelize')

const sequelize = require("../../mysql")

class ReviewDocument extends Model {}

ReviewDocument.init({
    Descricaoproblema: {
        type: DataTypes.TEXT,
        allowNull : false,
    },
    Status: {
        type: DataTypes.INTEGER,
        allowNull : false,
    },
    DataConclusao: {
        type: DataTypes.DATE,
        allowNull : false,
    },
    Defeito: {
        type: DataTypes.BOOLEAN,
        allowNull : false,
    },
},{
    sequelize,
    modelName: 'reviewDocument',
    timestamps: false
})

module.exports = ReviewDocument

