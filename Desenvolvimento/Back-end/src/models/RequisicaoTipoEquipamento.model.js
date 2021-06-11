const requisicao = require("./Requisicao.model")

module.exports = (sequelize, Sequelize) => {
  const requisicaoTipoEquipamento = sequelize.define('RequisicaoTipoEquipamento',
  {
      QuantidadeSolicitada: {
          type: Sequelize.INTEGER,
          allowNull : false
      },
  },
  {
      timestamps: false, 
      tablename: 'RequisicaoTipoEquipamento', 
      freezeTableName: true
  })

  requisicaoTipoEquipamento.associate = models => {
    requisicaoTipoEquipamento.belongToMany(models.requisicao,{
        throught: 'Requisicao_TipoEquipamento'
    })
    requisicao.belongToMany(models.requisicaoTipoEquipamento,{
        throught: 'Requisicao_TipoEquipamento'
    })
  }
    

  return requisicaoTipoEquipamento
}