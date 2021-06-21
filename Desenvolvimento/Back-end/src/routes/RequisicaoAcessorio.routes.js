const express = require('express')
const router = express.Router()
const requisicaoAcessorioController = require('../controllers/RequisicaoAcessorio.controller');

// Cadastra uma requisição de acessório
// Exemplo: POST localhost:3000/api/requisicoesAcessorio
router.post('/', requisicaoAcessorioController.cadastrar);

// Recupera todas as requisições de acessórios
// Exemplo: GET localhost:3000/api/requisicoesAcessorio/
router.get('/', requisicaoAcessorioController.listarTodos);

// Recupera uma requisição de acessório pela Id
// Exemplo: GET localhost:3000/api/requisicoesAcessorio/id/1
router.get('/id/:id', requisicaoAcessorioController.listarId);

// Atualiza uma requisição de acessório pela Id
// Exemplo: PUT localhost:3000/api/requisicoesAcessorio/1
router.put('/:id', requisicaoAcessorioController.atualizar);

// Exclui uma requisição de acessório pela Id
// Exemplo: DELETE localhost:3000/api/requisicoesAcessorio/1
router.delete('/:id', requisicaoAcessorioController.excluirId);

// Exclui todos as requisições de acessórios
// Exemplo: DELETE localhost:3000/api/requisicoesAcessorio/
router.delete('/', requisicaoAcessorioController.excluirTodos);

module.exports = router