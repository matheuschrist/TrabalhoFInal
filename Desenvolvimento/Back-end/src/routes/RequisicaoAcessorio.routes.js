const express = require('express')
const router = express.Router()
const requisicaoAcessorioController = require('../controllers/RequisicaoAcessorio.controller');

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
router.post('/', requisicaoAcessorioController.cadastrar);

// Recupera todos os usuários
// Exemplo: GET localhost:3000/api/usuarios/
router.get('/', requisicaoAcessorioController.listarTodos);

// Recupera um usuário pela Id
// Exemplo: GET localhost:3000/api/usuarios/1
router.get('/id/:id', requisicaoAcessorioController.listarId);

// Atualiza um usuário pela Id
// Exemplo: PUT localhost:3000/api/usuarios/1
router.put('/:id', requisicaoAcessorioController.atualizar);

// Exclui um usuário pela Id (para teste)
// Exemplo: DELETE localhost:3000/api/usuarios/1
router.delete('/:id', requisicaoAcessorioController.excluirId);

// Exclui todos os usuários (para teste)
// Exemplo: DELETE localhost:3000/api/usuarios/
router.delete('/', requisicaoAcessorioController.excluirTodos);

module.exports = router