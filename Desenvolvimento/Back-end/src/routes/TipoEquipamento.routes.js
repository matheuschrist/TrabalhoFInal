const express = require('express')
const router = express.Router()
const tipoEquipamentoController = require('../controllers/TipoEquipamento.controller');

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
router.post('/', tipoEquipamentoController.cadastrar);

// Recupera todos os usuários
// Exemplo: GET localhost:3000/api/usuarios/
router.get('/', tipoEquipamentoController.listarTodos);

// Recupera um usuário pela Id
// Exemplo: GET localhost:3000/api/usuarios/1
router.get('/id/:id', tipoEquipamentoController.listarId);

// Atualiza um usuário pela Id
// Exemplo: PUT localhost:3000/api/usuarios/1
router.put('/:id', tipoEquipamentoController.atualizar);

// Exclui um usuário pela Id (para teste)
// Exemplo: DELETE localhost:3000/api/usuarios/1
router.delete('/:id', tipoEquipamentoController.excluirId);

// Exclui todos os usuários (para teste)
// Exemplo: DELETE localhost:3000/api/usuarios/
router.delete('/', tipoEquipamentoController.excluirTodos);

module.exports = router