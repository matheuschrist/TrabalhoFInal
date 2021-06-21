const express = require('express')
const router = express.Router()
const acessorioSalaController = require('../controllers/AcessorioSala.controller');

// Cadastra um novo AcessorioSala
// Exemplo: POST localhost:3000/api/acessoriosSala
router.post('/', acessorioSalaController.cadastrar);

// Recupera todos os AcessoriosSala
// Exemplo: GET localhost:3000/api/acessoriosSala/
router.get('/', acessorioSalaController.listarTodos);

// Recupera um AcessorioSala pela Id
// Exemplo: GET localhost:3000/api/acessoriosSala/id/1
router.get('/id/:id', acessorioSalaController.listarId);

// Pesquisa AcessoriosSala de acordo com o parâmetro inserido
// Exemplo: GET localhost:3000/api/acessoriosSala/pesquisar?idSala=2
router.get('/pesquisar', acessorioSalaController.pesquisar);

// Atualiza um AcessorioSala pela Id
// Exemplo: PUT localhost:3000/api/acessoriosSala/1
//router.put('/:id', acessorioSalaController.atualizar);

// Exclui um AcessorioSala pela Id (para teste)
// Exemplo: DELETE localhost:3000/api/acessoriosSala/1
router.delete('/:id', acessorioSalaController.excluirId);

// Exclui todos os AcessoriosSala (para teste)
// Exemplo: DELETE localhost:3000/api/acessoriosSala/
router.delete('/', acessorioSalaController.excluirTodos);

module.exports = router