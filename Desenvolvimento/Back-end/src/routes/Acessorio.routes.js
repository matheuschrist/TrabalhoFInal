const express = require('express')
const router = express.Router()
const acessorioController = require('../controllers/Acessorio.controller');

// Cadastra um novo acessório
// Exemplo: POST localhost:3000/api/acessorios 
router.post('/', acessorioController.cadastrar);

// Recupera todos os acessórios
// Exemplo: GET localhost:3000/api/acessorios/
router.get('/', acessorioController.listarTodos);

// Recupera um acessório pela Id
// Exemplo: GET localhost:3000/api/acessorios/id/1
router.get('/id/:id', acessorioController.listarId);

// Pesquisa acessório de acordo com o parâmetro inserido
// Exemplo: GET localhost:3000/api/acessorios/pesquisar?tipo=Mouse
router.get('/pesquisar', acessorioController.pesquisar);

// Atualiza um acessório pela Id
// Exemplo: PUT localhost:3000/api/acessorios/1
router.put('/:id', acessorioController.atualizar);

// Exclui um acessório pela Id (para teste)
// Exemplo: DELETE localhost:3000/api/acessorios/1
router.delete('/:id', acessorioController.excluirId);

// Exclui todos os acessórios (para teste)
// Exemplo: DELETE localhost:3000/api/acessorios/
router.delete('/', acessorioController.excluirTodos);

module.exports = router