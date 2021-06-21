const express = require('express')
const router = express.Router()
const tipoEquipamentoController = require('../controllers/TipoEquipamento.controller');

// Cadastra um novo tipo de equipamento
/* Exemplo: POST localhost:3000/api/tiposEquipamento/
JSON:
    {
        "nomeTipo": "Teste"
    }
*/
router.post('/', tipoEquipamentoController.cadastrar);

// Recupera todos os tipos de equipamento
router.get('/', tipoEquipamentoController.listarTodos);

// Recupera um tipo de equipamento pela Id
router.get('/id/:id', tipoEquipamentoController.listarId);

// Pesquisa tipos de equipamento de acordo com o parâmetro inserido
router.get('/pesquisar', tipoEquipamentoController.pesquisar);

// Atualiza um tipo de equipamento pela Id
router.put('/:id', tipoEquipamentoController.atualizar);

// Exclui um tipo de equipamento pela Id
router.delete('/:id', tipoEquipamentoController.excluirId);

// Exclui todos os tipos de equipamentos
router.delete('/', tipoEquipamentoController.excluirTodos);

module.exports = router