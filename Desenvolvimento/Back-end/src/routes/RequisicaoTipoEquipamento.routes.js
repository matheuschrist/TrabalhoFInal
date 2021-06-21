const express = require('express')
const router = express.Router()
const RequisicaoTipoEquipamentoController = require('../controllers/RequisicaoTipoEquipamento.controller');

// Cadastra uma requisição de tipo de equipamento
//Exemplo: POST localhost:3000/api/requisicoesTipoEquipamento
router.post('/', RequisicaoTipoEquipamentoController.cadastrar);

// Recupera todos as requisições de tipo de equipamento
// Exemplo: GET localhost:3000/api/requisicoesTipoEquipamento/
router.get('/', RequisicaoTipoEquipamentoController.listarTodos);

// Recupera uma requisição de tipo de equipamento pela Id
// Exemplo: GET localhost:3000/api/requisicoesTipoEquipamento/id/1
router.get('/id/:id', RequisicaoTipoEquipamentoController.listarId);

// Atualiza uma requisição de tipo de equipamento pela Id
// Exemplo: PUT localhost:3000/api/requisicoesTipoEquipamento/1
//router.put('/:id', requisicaoController.atualizar);

// Exclui uma requisição de tipo de equipamento pela Id
// Exemplo: DELETE localhost:3000/api/requisicoesTipoEquipamento/1
router.delete('/:id', RequisicaoTipoEquipamentoController.excluirId);

// Exclui todas as requisições de tipo de equipamento
// Exemplo: DELETE localhost:3000/api/requisicoesTipoEquipamento/
router.delete('/', RequisicaoTipoEquipamentoController.excluirTodos);

module.exports = router