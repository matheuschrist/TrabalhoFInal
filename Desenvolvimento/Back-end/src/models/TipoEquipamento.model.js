module.exports = (sequelize, Sequelize) => {
  const TipoEquipamento = sequelize.define('TipoEquipamento',
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

  return TipoEquipamento
}