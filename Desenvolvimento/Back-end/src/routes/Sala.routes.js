const express = require('express')
const router = express.Router()
const SalaController = require('../controllers/Sala.controller');

// Cadastra uma nova sala
router.post('/', SalaController.cadastrar);

// Recupera todos as salas
// Exemplo: GET localhost:3000/api/salas/
router.get('/', SalaController.listarTodos);

// Recupera uma sala pela Id
// Exemplo: GET localhost:3000/api/salas/id/1
router.get('/id/:id', SalaController.listarId);

// Pesquisa salas de acordo com o parâmetro inserido
// Exemplo: GET localhost:3000/api/salas/pesquisar?numeroSala=400
router.get('/pesquisar', SalaController.pesquisar);

// Atualiza uma sala pela Id
// Exemplo: PUT localhost:3000/api/salas/1
router.put('/:id', SalaController.atualizar);

// Exclui uma sala pela Id
// Exemplo: DELETE localhost:3000/api/salas/1
router.delete('/:id', SalaController.excluirId);

// Exclui todas as salas
// Exemplo: DELETE localhost:3000/api/salas/
router.delete('/', SalaController.excluirTodos);

module.exports = router