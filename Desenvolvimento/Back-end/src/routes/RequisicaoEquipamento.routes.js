const express = require('express')
const router = express.Router()
const requisicaoEquipamentoController = require('../controllers/RequisicaoEquipamento.controller');

// Cadastra um novo usuário
/* Exemplo: POST localhost:3000/api/usuarios
JSON: 
    {
        "nome": "Deivyd",
        "login": "deivydw",
        "senha": "deivyd123",
        "identificacao": "12345678911",
        "tipo": 0,
        "email": "deivyd.email@gmail.com"
    }
*/ 
router.post('/', requisicaoEquipamentoController.cadastrar);

// Recupera todos os usuários
// Exemplo: GET localhost:3000/api/usuarios/
router.get('/', requisicaoEquipamentoController.listarTodos);

// Recupera um usuário pela Id
// Exemplo: GET localhost:3000/api/usuarios/1
router.get('/id/:id', requisicaoEquipamentoController.listarId);

// Atualiza um usuário pela Id
// Exemplo: PUT localhost:3000/api/usuarios/1
//router.put('/:id', requisicaoController.atualizar);

// Exclui um usuário pela Id (para teste)
// Exemplo: DELETE localhost:3000/api/usuarios/1
router.delete('/:id', requisicaoEquipamentoController.excluirId);

// Exclui todos os usuários (para teste)
// Exemplo: DELETE localhost:3000/api/usuarios/
router.delete('/', requisicaoEquipamentoController.excluirTodos);

module.exports = router