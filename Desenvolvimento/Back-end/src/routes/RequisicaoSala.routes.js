const express = require('express')
const router = express.Router()
const requisicaoSalaController = require('../controllers/RequisicaoSala.controller');

// Cadastra uma requisição de sala
// Exemplo: POST localhost:3000/api/requisicoesSala
router.post('/', requisicaoSalaController.cadastrar);

// Recupera todas as requisições de salas
// Exemplo: GET localhost:3000/api/requisicoesSala/
router.get('/', requisicaoSalaController.listarTodos);

// Recupera uma requisição de sala pela Id
// Exemplo: GET localhost:3000/api/requisicoesSala/id/1
router.get('/id/:id', requisicaoSalaController.listarId);

// Atualiza uma requisição de sala pela Id
// Exemplo: PUT localhost:3000/api/requisicoesSala/1
//router.put('/:id', requisicaoController.atualizar);

// Exclui uma requisição de sala pela Id
// Exemplo: DELETE localhost:3000/api/requisicoesSala/1
router.delete('/:id', requisicaoSalaController.excluirId);

// Exclui todos as requisições de salas
// Exemplo: DELETE localhost:3000/api/requisicoesSala/
router.delete('/', requisicaoSalaController.excluirTodos);

module.exports = router