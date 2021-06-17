'use strict';

const DocumentoRevisao = require('../models/DocumentoRevisao.model');

exports.cadastrar = function(req, res) {

    const novoDocumentoRevisao = new DocumentoRevisao(req.body);

    novoDocumentoRevisao.dataAbertura = new Date();

    // Retorna erro pela falta de campos obrigatórios
    if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({erro: true, mensagem: 'Preencha todos os campos obrigatórios.'});
    }else{
        DocumentoRevisao.cadastrar(novoDocumentoRevisao, function(err, documentoRevisao) {
            if (err) {
                res.send(err);
            }
            res.json({ erro: false, mensagem: 'DocumentoRevisao cadastrado com sucesso!', idDocumentoRevisao: documentoRevisao });
        });
    }

};

exports.listarTodos = function(req, res) {

    DocumentoRevisao.listarTodos(function(err, documentoRevisao) {
        if (err) {
            res.send(err);
        }
        res.send(documentoRevisao);
    });

};

exports.listarId = function(req, res) {

    DocumentoRevisao.listarId(req.params.id, function(err, documentoRevisao) {
        if (err) {
            res.send(err);
        }
        res.json(documentoRevisao);
    });

};

exports.atualizar = function(req, res) {

    // Retorna erro pela falta de campos obrigatórios
    if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ erro: true, mensagem: 'Preencha todos os campos obrigatórios.' });
    }else{
        DocumentoRevisao.atualizar(req.params.id, new DocumentoRevisao(req.body), function(err, documentoRevisao) {
            if (err) {
                res.send(err);
            }
            res.json({ erro: false, mensagem: 'DocumentoRevisao atualizado com sucesso!' });
        });
    }
  
};


exports.excluirId = function(req, res) {

    DocumentoRevisao.excluir(req.params.id, function(err, documentoRevisao) {
        if (err) {
            res.send(err);
        }
        res.json({ erro: false, mensagem: 'DocumentoRevisao excluído com sucesso!' });
    });

};

exports.excluirTodos = function(req, res) {

    DocumentoRevisao.excluirTodos(function(err, documentoRevisao) {
        if (err) {
            res.send(err);
        }
        res.json({ erro: false, mensagem: 'Todos os documentoRevisao excluídos com sucesso!' });
    });

};