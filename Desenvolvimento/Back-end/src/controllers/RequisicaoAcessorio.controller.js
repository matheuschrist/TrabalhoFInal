'use strict';

const RequisicaoAcessorio = require('../models/RequisicaoAcessorio.model');

exports.cadastrar = function(req, res) {

    const novoRequisicaoAcessorio = new RequisicaoAcessorio(req.body);

    // Retorna erro pela falta de campos obrigatórios
    if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({erro: true, mensagem: 'Preencha todos os campos obrigatórios.'});
    }else{
        RequisicaoAcessorio.cadastrar(novoRequisicaoAcessorio, function(err, requisicaoAcessorio) {
            if (err) {
                res.send(err);
            }
            res.json({ erro: false, mensagem: 'RequisicaoAcessorio cadastrada com sucesso!', idRequisicaoAcessorio: requisicaoAcessorio });
        });
    }

};

exports.RequisicaoAcessorio = function(req, res) {

    RequisicaoAcessorio.listarTodos(function(err, requisicaoAcessorio) {
        if (err) {
            res.send(err);
        }
        res.send(requisicaoAcessorio);
    });

};

exports.listarId = function(req, res) {

    RequisicaoAcessorio.listarId(req.params.id, function(err, requisicaoAcessorio) {
        if (err) {
            res.send(err);
        }
        res.json(requisicaoAcessorio);
    });

};

exports.listarTodos = function(req, res) {

    RequisicaoAcessorio.listarTodos(function(err, requisicao) {
        if (err) {
            res.send(err);
        }
        res.send(requisicao);
    });

};

exports.atualizar = function(req, res) {

    // Retorna erro pela falta de campos obrigatórios
    if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ erro: true, mensagem: 'Preencha todos os campos obrigatórios.' });
    }else{
        RequisicaoAcessorio.atualizar(req.params.id, new RequisicaoAcessorio(req.body), function(err, requisicaoAcessorio) {
            if (err) {
                res.send(err);
            }
            res.json({ erro: false, mensagem: 'RequisicaoAcessorio atualizada com sucesso!' });
        });
    }
  
};


exports.excluirId = function(req, res) {

    RequisicaoAcessorio.excluirId(req.params.id, function(err, requisicaoAcessorio) {
        if (err) {
            res.send(err);
        }
        res.json({ erro: false, mensagem: 'RequisicaoAcessorio excluída com sucesso!' });
    });

};

exports.excluirTodos = function(req, res) {

    RequisicaoAcessorio.excluirTodos(function(err, requisicaoAcessorio) {
        if (err) {
            res.send(err);
        }
        res.json({ erro: false, mensagem: 'Todos as RequisicaoAcessorios excluídas com sucesso!' });
    });

};