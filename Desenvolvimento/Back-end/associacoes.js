// Associação entre Requisicao e Usuario
const User = require('./src/models/Usuario.model')
const Request = require('./src/models/Requisicao.model')

//chave estrangeira ficara na tabela Request
User.hasMany(Request, { as:'salicitante', foreignKey: 'solicitanteId'})
Request.belongsTo(User, {as: 'solicitante'})

// Associação entre TipoEquipamento e Equipamento
const TypeEquipment = require('./src/models/TipoEquipamento.model')
const Equipment = require('./src/models/Equipamento.model')

//chave estrangeira ficara na tabela Equipamento
TypeEquipment.hasMany(Equipment, { as:'tipo', foreignKey: 'tipoEquipamentoId', allowNull: false })
Equipment.belongsTo(TypeEquipment, {as:'tipoEquipamento'})

//Associação entre Equipamento e DocumentoRevisao
const ReviewDocument = require('./src/models/DocumentoRevisao.model')

//chave estrangeira vai ficar na tabela DocumentoRevisao
Equipment.hasMany(ReviewDocument, {as:'equipamentoRevisao', foreignKey:'equipamentoId'})
ReviewDocument.belongsTo(Equipment, {as:'equipamento'})

//Associação entre Sala e DocumentoRevisao
const Class = require('./src/models/Sala.model')

//chave estrangeira vai ficar na tabela DocumentoRevisao
Class.hasMany(ReviewDocument, {as:'revisaoSala', foreignKey:'revisaoSalaId'})
ReviewDocument.belongsTo(Class, {as:'revisaoSala'})

//Associação entre Sala e Equipamento
//chave estrangeira vai ficar na tabela Equipamento
Class.hasMany(Equipment, {as:'sala', foreignKey: 'salaEquipamentoId'})
Equipment.belongsTo(Class, {as:'salaEquipamento'})

//Associação ente Requisicao e Equipamento
Request.belongsToMany(Equipment, { through: 'Request_Equipment', foreignKey: 'equipamentosId'})
Equipment.belongsToMany(Request, { through: 'Request_Equipment', foreignKey: 'requisicoesId'})

//Associação entre Requisicao e Sala
Request.belongsToMany(Class, { through: 'Request_Class', foreignKey:'salasId'})
Class.belongsToMany(Request, { through: 'Request_Class', foreignKey:'requisicoesId'})

//Associação entre Requisicao e Acessorio
const Accessory = require('./src/models/Acessorio.model')
const RequestAccessory = require('./src/models/RequisicaoAcessorio.model')

Request.belongsToMany(Accessory, { through: RequestAccessory, foreignKey:'acessoriosId'})
Accessory.belongsToMany(Request, { through: RequestAccessory, foreignKey:'requisicoesId'})

//Associação entre Requisicao e TipoEquipamento
const RequestTypeEquipment = require('./src/models/RequisicaoTipoEquipamento.model')

Request.belongsToMany(TypeEquipment, { through: RequestTypeEquipment, foreignKey:'equipamentoSolicitadosId', as:'equipamentoSolicitado'})
TypeEquipment.belongsToMany(Request, { through: RequestTypeEquipment, foreignKey:'requisicoesId'})

//Associação entre Acessorio e Sala
const ClassAccessory = require('./src/models/SalaAcessorio.model')
Class.belongsToMany(Accessory, { through: ClassAccessory, foreignKey:'acessoriosId'})
Accessory.belongsToMany(Class, { through: ClassAccessory, foreignKey:'salasId'})



