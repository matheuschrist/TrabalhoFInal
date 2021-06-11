module.exports = (sequelize, Sequelize) => {
  const TipoEquipamento = sequelize.define('TipoEquipamento',
  {
      TipoEquipamentoId: {
          type: Sequelize.INTEGER,
          allowNull : false,
          primaryKey: true,
          autoIncrement:true
      },
      NomeTipo: {
          type: Sequelize.STRING,
          allowNull : false
      },
  },
  {
      timestamps: false, 
      tablename: 'TipoEquipamento', 
      freezeTableName: true
  })

  return TipoEquipamento
}