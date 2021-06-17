'use strict';

const Equipamento = require('../models/Equipamento.model');

exports.cadastrar = function(req, res) {

    const novoEquipamento = new Equipamento(req.body);

    novoEquipamento.dataCadastro = new Date();

    // Retorna erro pela falta de campos obrigatórios
    if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({erro: true, mensagem: 'Preencha todos os campos obrigatórios.'});
    }else{
        Equipamento.cadastrar(novoEquipamento, function(err, equipamento) {
            if (err) {
                res.send(err);
            }
            res.json({ erro: false, mensagem: 'Equipamento cadastrado com sucesso!', idEquipamento: equipamento });
        });
    }

};

exports.listarTodos = function(req, res) {

    Equipamento.listarTodos(function(err, equipamento) {
        if (err) {
            res.send(err);
        }
        res.send(equipamento);
    });

};

exports.listarId = function(req, res) {

    Equipamento.listarId(req.params.id, function(err, equipamento) {
        if (err) {
            res.send(err);
        }
        res.json(equipamento);
    });

};

exports.atualizar = function(req, res) {

    // Retorna erro pela falta de campos obrigatórios
    if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ erro: true, mensagem: 'Preencha todos os campos obrigatórios.' });
    }else{
        Equipamento.atualizar(req.params.id, new Equipamento(req.body), function(err, equipamento) {
            if (err) {
                res.send(err);
            }
            res.json({ erro: false, mensagem: 'Equipamento atualizado com sucesso!' });
        });
    }
  
};


exports.excluirId = function(req, res) {

    Equipamento.excluir(req.params.id, function(err, equipamento) {
        if (err) {
            res.send(err);
        }
        res.json({ erro: false, mensagem: 'Equipamento excluído com sucesso!' });
    });

};

exports.excluirTodos = function(req, res) {

    Equipamento.excluirTodos(function(err, equipamento) {
        if (err) {
            res.send(err);
        }
        res.json({ erro: false, mensagem: 'Todos os equipamentos excluídos com sucesso!' });
    });

};