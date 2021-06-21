const express = require('express')
const router = express.Router()
const requisicaoEquipamentoController = require('../controllers/RequisicaoEquipamento.controller');

// Cadastra uma nova requisição de equipamento
// Exemplo: POST localhost:3000/api/requisicoesEquipamento
router.post('/', requisicaoEquipamentoController.cadastrar);

// Recupera todos as requisições de equipamentos
// Exemplo: GET localhost:3000/api/requisicoesEquipamento/
router.get('/', requisicaoEquipamentoController.listarTodos);

// Recupera uma requisição de equipamento pela Id
// Exemplo: GET localhost:3000/api/requisicoesEquipamento/id/1
router.get('/id/:id', requisicaoEquipamentoController.listarId);

// Atualiza uma requisição de equipamento pela Id
// Exemplo: PUT localhost:3000/api/requisicoesEquipamento/1
//router.put('/:id', requisicaoController.atualizar);

// Exclui uma requisição de equipamento pela Id
// Exemplo: DELETE localhost:3000/api/requisicoesEquipamento/1
router.delete('/:id', requisicaoEquipamentoController.excluirId);

// Exclui todos as requisições de equipamento
// Exemplo: DELETE localhost:3000/api/requisicoesEquipamento/
router.delete('/', requisicaoEquipamentoController.excluirTodos);

module.exports = router