const express = require('express')
const router = express.Router()
const equipamentoController = require('../controllers/Equipamento.controller');

// Cadastra um novo equipamento
/* Exemplo: POST localhost:3000/api/equipamentos
JSON: 
    {
        "patrimonio": "Patrimonio125",
        "status": "0",
        "tipoEquipamentoId": "1",
        "salaId": null
    }
*/ 
router.post('/', equipamentoController.cadastrar);

// Recupera todos os equipamentos
// Exemplo: GET localhost:3000/api/equipamentos/
router.get('/', equipamentoController.listarTodos);

// Recupera um equipamento pela Id
// Exemplo: GET localhost:3000/api/equipamentos/1
router.get('/id/:id', equipamentoController.listarId);

// Pesquisa equipamentos de acordo com o parâmetro inserido
// Exemplo: GET localhost:3000/api/equipamentos/pesquisar?id=1
router.get('/pesquisar', equipamentoController.pesquisar);

// Atualiza um equipamento pela Id
// Exemplo: PUT localhost:3000/api/equipamentos/1
router.put('/:id', equipamentoController.atualizar);

// Exclui um equipamento pela Id
// Exemplo: DELETE localhost:3000/api/equipamentos/1
router.delete('/:id', equipamentoController.excluirId);

// Exclui todos os equipamentos
// Exemplo: DELETE localhost:3000/api/equipamentos/
router.delete('/', equipamentoController.excluirTodos);

module.exports = router