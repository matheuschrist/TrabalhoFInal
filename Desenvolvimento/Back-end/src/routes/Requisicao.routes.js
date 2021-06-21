const express = require('express')
const router = express.Router()
const requisicaoController = require('../controllers/Requisicao.controller');

// Cadastra uma nova requisição
//Exemplo: POST localhost:3000/api/requisicoes
router.post('/', requisicaoController.cadastrar);

// Recupera todos as requisições
// Exemplo: GET localhost:3000/api/requisicoes/
router.get('/', requisicaoController.listarTodos);

// Recupera uma requisição pela Id
// Exemplo: GET localhost:3000/api/requisicoes/id/1
router.get('/id/:id', requisicaoController.listarId);

// Pesquisa requisições de acordo com o parâmetro inserido
// Exemplo: GET localhost:3000/api/requisicoes/pesquisar?id=1
router.get('/pesquisar', requisicaoController.pesquisar);

// Atualiza uma requisição pela Id
// Exemplo: PUT localhost:3000/api/requisicoes/1
router.put('/:id', requisicaoController.atualizar);

// Exclui uma requisição pela Id
// Exemplo: DELETE localhost:3000/api/requisicoes/1
router.delete('/:id', requisicaoController.excluirId);

// Exclui todas as requisições
// Exemplo: DELETE localhost:3000/api/requisicoes/
router.delete('/', requisicaoController.excluirTodos);

module.exports = router