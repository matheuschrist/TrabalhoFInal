module.exports = (sequelize, Sequelize) => {
  const RequisicaoTipoEquipamento = sequelize.define('RequisicaoTipoEquipamento',
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

  return RequisicaoTipoEquipamento
}