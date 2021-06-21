const express = require('express')
const router = express.Router()
const acessorioSalaController = require('../controllers/AcessorioSala.controller');

// Cadastra um novo acessório de sala
// Exemplo: POST localhost:3000/api/acessoriosSala
router.post('/', acessorioSalaController.cadastrar);

// Recupera todos os acessórios de salas
// Exemplo: GET localhost:3000/api/acessoriosSala/
router.get('/', acessorioSalaController.listarTodos);

// Recupera um acessório de sala pela Id
// Exemplo: GET localhost:3000/api/acessoriosSala/id/1
router.get('/id/:id', acessorioSalaController.listarId);

// Pesquisa acessórios de salas de acordo com o parâmetro inserido
// Exemplo: GET localhost:3000/api/acessoriosSala/pesquisar?idSala=2
router.get('/pesquisar', acessorioSalaController.pesquisar);

// Atualiza um acessório de sala pela Id
// Exemplo: PUT localhost:3000/api/acessoriosSala/1
//router.put('/:id', acessorioSalaController.atualizar);

// Exclui um acessório de sala pela Id
// Exemplo: DELETE localhost:3000/api/acessoriosSala/1
router.delete('/:id', acessorioSalaController.excluirId);

// Exclui todos os acessórios de salas
// Exemplo: DELETE localhost:3000/api/acessoriosSala/
router.delete('/', acessorioSalaController.excluirTodos);

module.exports = router