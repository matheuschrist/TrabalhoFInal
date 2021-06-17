'use strict';

const AcessorioSala = require('../models/AcessorioSala.model');

exports.cadastrar = function(req, res) {

    const novoAcessorioSala = new AcessorioSala(req.body);

    // Retorna erro pela falta de campos obrigatórios
    if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({erro: true, mensagem: 'Preencha todos os campos obrigatórios.'});
    }else{
        AcessorioSala.cadastrar(novoAcessorioSala, function(err, acessorioSala) {
            if (err) {
                res.send(err);
            }
            res.json({ erro: false, mensagem: 'AcessorioSala cadastrado com sucesso!', idAcessorioSala: acessorioSala });
        });
    }

};

exports.listarTodos = function(req, res) {

    AcessorioSala.listarTodos(function(err, acessorioSala) {
        if (err) {
            res.send(err);
        }
        //console.log('res', usuario);
        res.send(acessorioSala);
    });

};

exports.listarId = function(req, res) {

    AcessorioSala.listarId(req.params.id, function(err, acessorioSala) {
        if (err) {
            res.send(err);
        }
        res.json(acessorioSala);
    });

};

exports.atualizar = function(req, res) {

    // Retorna erro pela falta de campos obrigatórios
    if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ erro: true, mensagem: 'Preencha todos os campos obrigatórios.' });
    }else{
        AcessorioSala.atualizar(req.params.id, new AcessorioSala(req.body), function(err, acessorioSala) {
            if (err) {
                res.send(err);
            }
            res.json({ erro: false, mensagem: 'AcessorioSala atualizado com sucesso!' });
        });
    }
  
};


exports.excluirId = function(req, res) {

    AcessorioSala.excluir(req.params.id, function(err, acessorioSala) {
        if (err) {
            res.send(err);
        }
        res.json({ erro: false, mensagem: 'AcessorioSala excluído com sucesso!' });
    });

};

exports.excluirTodos = function(req, res) {

    AcessorioSala.excluirTodos(function(err, acessorioSala) {
        if (err) {
            res.send(err);
        }
        res.json({ erro: false, mensagem: 'Todos os acessorioSalas excluídos com sucesso!' });
    });

};