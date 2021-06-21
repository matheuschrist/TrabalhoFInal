const express = require('express')
const router = express.Router()
const loginController = require('../controllers/Login.controller');

// Realiza sessão de login
/* Exemplo: POST localhost:3000/api/login
JSON: 
    {
        "login": "admin",
        "senha": "admin"
    }
*/ 
router.post('/', loginController.realizar);

// Recupera dados de um usuário logado
// Exemplo: GET localhost:3000/api/login/1
router.get('/', loginController.recuperar);

// Finaliza sessão de login
// Exemplo: DELETE localhost:3000/api/login
router.delete('/', loginController.finalizar);

module.exports = router