const requisicao = require("./Requisicao.model")

module.exports = (sequelize, Sequelize) => {
  const requisicaoTipoEquipamento = sequelize.define('RequisicaoTipoEquipamento',
  {
        RequisicaoTipoEquipamentoId:{
            type: Sequelize.BIGINT,
            allowNull : false,
            primaryKey: true,
            autoIncrement: false
        },
        QuantidadeSolicitada: {
            type: Sequelize.INTEGER,
            allowNull : false
        },
        RequisicaoId: {
            type : Sequelize.BIGINT,
            references: {model: 'Requisicao', key: 'RequisicaoId'},
            onDelete: 'RESTRICT',
            onUpdate: 'RESTRICT',
            allowNull: false
        },
        TipoEquipamentoId: {
            type : Sequelize.BIGINT,
            references: {model: 'TipoEquipamento', key: 'TipoEquipamentoId'},
            onDelete: 'RESTRICT',
            onUpdate: 'RESTRICT',
            allowNull: false
        },

  },
  {
      timestamps: false, 
      tablename: 'RequisicaoTipoEquipamento', 
      freezeTableName: true
  })

    

  return requisicaoTipoEquipamento
}