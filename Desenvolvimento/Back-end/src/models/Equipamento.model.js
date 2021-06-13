const { Model, DataTypes} = require('sequelize')

const sequelize = require("../../mysql")


class Equipment extends Model{}

Equipment.init({
    Patrimonio: {
        type: DataTypes.STRING,
        allowNull : false,
        unique: true
    },
    Status: {
        type: DataTypes.INTEGER,
        allowNull : false
    },
    DataCadastro: {
        type: DataTypes.DATE,
        allowNull : false,
    },
},{
    sequelize,
    modelName: 'equipment',
    timestamps: false
});

module.exports = Equipment
