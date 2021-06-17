'use strict';

const TipoEquipamento = require('../models/TipoEquipamento.model');

exports.cadastrar = function(req, res) {

    const novoTipoEquipamento = new TipoEquipamento(req.body);

    // Retorna erro pela falta de campos obrigatórios
    if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({erro: true, mensagem: 'Preencha todos os campos obrigatórios.'});
    }else{
        TipoEquipamento.cadastrar(novoTipoEquipamento, function(err, tipoEquipamento) {
            if (err) {
                res.send(err);
            }
            res.json({ erro: false, mensagem: 'TipoEquipamento cadastrado com sucesso!', idTipoEquipamento: tipoEquipamento });
        });
    }

};

exports.listarTodos = function(req, res) {

    TipoEquipamento.listarTodos(function(err, tipoEquipamento) {
        if (err) {
            res.send(err);
        }
        //console.log('res', usuario);
        res.send(tipoEquipamento);
    });

};

exports.listarId = function(req, res) {

    TipoEquipamento.listarId(req.params.id, function(err, tipoEquipamento) {
        if (err) {
            res.send(err);
        }
        res.json(tipoEquipamento);
    });

};

exports.atualizar = function(req, res) {

    // Retorna erro pela falta de campos obrigatórios
    if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ erro: true, mensagem: 'Preencha todos os campos obrigatórios.' });
    }else{
        TipoEquipamento.atualizar(req.params.id, new TipoEquipamento(req.body), function(err, tipoEquipamento) {
            if (err) 
            {
                res.send(err);
            }
            else
            {
                res.json({ erro: false, mensagem: 'TipoEquipamento atualizado com sucesso!' });
            }
            
        });
    }
  
};


exports.excluirId = function(req, res) {

    TipoEquipamento.excluir(req.params.id, function(err, tipoEquipamento) {
        if (err) {
            res.send(err);
        }
        res.json({ erro: false, mensagem: 'TipoEquipamento excluído com sucesso!' });
    });

};

exports.excluirTodos = function(req, res) {

    TipoEquipamento.excluirTodos(function(err, tipoEquipamento) {
        if (err) {
            res.send(err);
        }
        res.json({ erro: false, mensagem: 'Todos os tipoEquipamentos excluídos com sucesso!' });
    });

};