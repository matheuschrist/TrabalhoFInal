module.exports = (sequelize, Sequelize) => {
  const tipoEquipamento = sequelize.define('TipoEquipamento',
  {
      TipoEquipamentoId: {
          type: Sequelize.BIGINT,
          allowNull : false,
          primaryKey: true,
          autoIncrement:true
      },
      NomeTipo: {
          type: Sequelize.STRING,
          allowNull : false,
          unique: true
      },
  },
  {
      timestamps: false, 
      tablename: 'TipoEquipamento', 
      freezeTableName: true
  })

  tipoEquipamento.associate = models => {
    tipoEquipamento.belongsToMany(models.TipoEquipamento, {
        through: 'RequisicaoTipoEquipamento',
        as : 'requisicoes',
        foreignKey : 'TipoEquipamentoId'
    })
  }

  return tipoEquipamento
}