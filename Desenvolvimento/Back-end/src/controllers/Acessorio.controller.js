'use strict';

const Acessorio = require('../models/Acessorio.model');

exports.cadastrar = function(req, res) {

    const novoAcessorio = new Acessorio(req.body);

    // Retorna erro pela falta de campos obrigatórios
    if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({erro: true, mensagem: 'Preencha todos os campos obrigatórios.'});
    }else{
        Acessorio.cadastrar(novoAcessorio, function(err, acessorio) {
            if (err) {
                res.send(err);
            }
            res.json({ erro: false, mensagem: 'Acessorio cadastrado com sucesso!', idAcessorio: acessorio });
        });
    }

};

exports.listarTodos = function(req, res) {

    Acessorio.listarTodos(function(err, acessorio) {
        if (err) {
            res.send(err);
        }
        res.send(acessorio);
    });

};

exports.listarId = function(req, res) {

    Acessorio.listarId(req.params.id, function(err, acessorio) {
        if (err) {
            res.send(err);
        }
        res.json(acessorio);
    });

};

exports.atualizar = function(req, res) {

    // Retorna erro pela falta de campos obrigatórios
    if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ erro: true, mensagem: 'Preencha todos os campos obrigatórios.' });
    }else{
        Acessorio.atualizar(req.params.id, new Acessorio(req.body), function(err, acessorio) {
            if (err) {
                res.send(err);
            }
            res.json({ erro: false, mensagem: 'Acessorio atualizado com sucesso!' });
        });
    }
  
};


exports.excluirId = function(req, res) {

    Acessorio.excluir(req.params.id, function(err, acessorio) {
        if (err) {
            res.send(err);
        }
        res.json({ erro: false, mensagem: 'Acessorio excluído com sucesso!' });
    });

};

exports.excluirTodos = function(req, res) {

    Acessorio.excluirTodos(function(err, acessorio) {
        if (err) {
            res.send(err);
        }
        res.json({ erro: false, mensagem: 'Todos os acessorio excluídos com sucesso!' });
    });

};