const express = require('express')
const router = express.Router()
const usuarioController = require('../controllers/Usuario.controller');

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
router.post('/', usuarioController.cadastrar);

// Recupera todos os usuários
// Exemplo: GET localhost:3000/api/usuarios/
router.get('/', usuarioController.listarTodos);

// Recupera um usuário pela Id
// Exemplo: GET localhost:3000/api/usuarios/1
router.get('/id/:id', usuarioController.listarId);

// Pesquisa usuários de acordo com o parâmetro inserido
// Exemplo: GET localhost:3000/api/usuario/pesquisa/nome?=Deivyd
router.get('/pesquisar', usuarioController.pesquisar);

// Atualiza um usuário pela Id
// Exemplo: PUT localhost:3000/api/usuarios/1
router.put('/:id', usuarioController.atualizar);

// Exclui um usuário pela Id (para teste)
// Exemplo: DELETE localhost:3000/api/usuarios/1
router.delete('/:id', usuarioController.excluirId);

// Exclui todos os usuários (para teste)
// Exemplo: DELETE localhost:3000/api/usuarios/
router.delete('/', usuarioController.excluirTodos);

module.exports = router