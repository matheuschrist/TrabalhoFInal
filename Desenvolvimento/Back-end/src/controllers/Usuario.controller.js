'use strict';

const Usuario = require('../models/Usuario.model');

exports.cadastrar = function(req, res) {

    const novoUsuario = new Usuario(req.body);

    // Retorna erro pela falta de campos obrigatórios
    if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({erro: true, mensagem: 'Preencha todos os campos obrigatórios.'});
    }else{
        Usuario.cadastrar(novoUsuario, function(err, usuario) {
            if (err) {
                res.send(err);
            }
            res.json({ erro: false, mensagem: 'Usuário cadastrado com sucesso!', idUsuario: usuario });
        });
    }

};

exports.listarTodos = function(req, res) {

    Usuario.listarTodos(function(err, usuario) {
        if (err) {
            res.send(err);
        }
        res.send(usuario);
    });

};

exports.listarId = function(req, res) {

    Usuario.listarId(req.params.id, function(err, usuario) {
        if (err) {
            res.send(err);
        }
        res.json(usuario);
    });

};

exports.atualizar = function(req, res) {

    // Retorna erro pela falta de campos obrigatórios
    if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ erro: true, mensagem: 'Preencha todos os campos obrigatórios.' });
    }else{
        Usuario.atualizar(req.params.id, new Usuario(req.body), function(err, usuario) {
            if (err) {
                res.send(err);
            }
            res.json({ erro: false, mensagem: 'Usuário atualizado com sucesso!' });
        });
    }
  
};


exports.excluirId = function(req, res) {

    Usuario.excluirId(req.params.id, function(err, usuario) {
        if (err) {
            res.send(err);
        }
        res.json({ erro: false, mensagem: 'Usuário excluído com sucesso!' });
    });

};

exports.excluirTodos = function(req, res) {

    Usuario.excluirTodos(function(err, usuario) {
        if (err) {
            res.send(err);
        }
        res.json({ erro: false, mensagem: 'Todos os usuários excluídos com sucesso!' });
    });

};