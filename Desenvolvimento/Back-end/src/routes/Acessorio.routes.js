const express = require('express')
const router = express.Router()
const acessorioController = require('../controllers/Acessorio.controller');

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
router.post('/', acessorioController.cadastrar);

// Recupera todos os usuários
// Exemplo: GET localhost:3000/api/usuarios/
router.get('/', acessorioController.listarTodos);

// Recupera um usuário pela Id
// Exemplo: GET localhost:3000/api/usuarios/1
router.get('/id/:id', acessorioController.listarId);

// Pesquisa usuários de acordo com o parâmetro inserido
// Exemplo: GET localhost:3000/api/usuarios/pesquisa/nome?=Deivyd
router.get('/pesquisar', acessorioController.pesquisar);

// Atualiza um usuário pela Id
// Exemplo: PUT localhost:3000/api/usuarios/1
router.put('/:id', acessorioController.atualizar);

// Exclui um usuário pela Id (para teste)
// Exemplo: DELETE localhost:3000/api/usuarios/1
router.delete('/:id', acessorioController.excluirId);

// Exclui todos os usuários (para teste)
// Exemplo: DELETE localhost:3000/api/usuarios/
router.delete('/', acessorioController.excluirTodos);

module.exports = router