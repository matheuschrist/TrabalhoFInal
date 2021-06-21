const express = require('express')
const router = express.Router()
const documentoRevisaoController = require('../controllers/DocumentoRevisao.controller');

// Cadastra um novo documento de revisão
// Exemplo: POST localhost:3000/api/documentos
router.post('/', documentoRevisaoController.cadastrar);

// Recupera todos os documentos de revisão
// Exemplo: GET localhost:3000/api/documentos/
router.get('/', documentoRevisaoController.listarTodos);

// Recupera um documento de revisão pela Id
// Exemplo: GET localhost:3000/api/documentos/id/1
router.get('/id/:id', documentoRevisaoController.listarId);

// Pesquisa documento de revisão de acordo com o parâmetro inserido
// Exemplo: GET localhost:3000/api/documentos/pesquisar?id=1
router.get('/pesquisar', documentoRevisaoController.pesquisar);

// Atualiza um documento de revisão pela Id
// Exemplo: PUT localhost:3000/api/documentos/1
router.put('/:id', documentoRevisaoController.atualizar);

// Exclui um documento de revisão pela Id
// Exemplo: DELETE localhost:3000/api/documentos/1
router.delete('/:id', documentoRevisaoController.excluirId);

// Exclui todos os documentos de revisão
// Exemplo: DELETE localhost:3000/api/documentos/
router.delete('/', documentoRevisaoController.excluirTodos);

module.exports = router