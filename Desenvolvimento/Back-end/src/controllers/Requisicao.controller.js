'use strict';

const Requisicao = require('../models/Requisicao.model');
var RequisicaoSala = require('../models/RequisicaoSala.model');
var Sala = require('../models/Sala.model');

exports.cadastrar = function(req, res) {

    const novoRequisicao = new Requisicao(req.body);

    novoRequisicao.dataAbertura = new Date();

    console.log(req.body.salaId)


    // Retorna erro pela falta de campos obrigatórios
    if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({erro: true, mensagem: 'Preencha todos os campos obrigatórios.'});
    }else{
        Requisicao.cadastrar(novoRequisicao, function(err, requisicao) {
            if (err) {
                res.send(err);
            }
            res.json({ erro: false, mensagem: 'Requisicao cadastrada com sucesso!', idRequisicao: requisicao });

            for(let i=0; i<req.body.salaId.length; i++)
            {
                var requisicaoSala = new RequisicaoSala({
                    requisicaoId : requisicao,
                    salaId : req.body.salaId[i]
                })
                Sala.atualizarSatus( req.body.salaId[i])
                RequisicaoSala.cadastrar(requisicaoSala , function(err,res)
                {
                    if(err)
                    {
                        console.log(err)
                    }
                    else
                    {
                        console.log(res)
                    }
                })
            }
        });
    }

};

exports.listarTodos = function(req, res) {

    Requisicao.listarTodos(function(err, requisicao) {
        if (err) {
            res.send(err);
        }
        res.send(requisicao);
    });

};

exports.listarId = function(req, res) {

    Requisicao.listarId(req.params.id, function(err, requisicao) {
        if (err) {
            res.send(err);
        }
        res.json(requisicao);
    });

};

exports.atualizar = function(req, res) {

    // Retorna erro pela falta de campos obrigatórios
    if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ erro: true, mensagem: 'Preencha todos os campos obrigatórios.' });
    }else{
        Requisicao.atualizar(req.params.id, new Requisicao(req.body), function(err, requisicao) {
            if (err) {
                res.send(err);
            }
            res.json({ erro: false, mensagem: 'Requisicao atualizada com sucesso!' });
        });
    }
  
};


exports.excluirId = function(req, res) {

    Requisicao.excluir(req.params.id, function(err, requisicao) {
        if (err) {
            res.send(err);
        }
        res.json({ erro: false, mensagem: 'Requisicao excluída com sucesso!' });
    });

};

exports.excluirTodos = function(req, res) {

    Requisicao.excluirTodos(function(err, requisicao) {
        if (err) {
            res.send(err);
        }
        res.json({ erro: false, mensagem: 'Todos as Requisicoes excluídas com sucesso!' });
    });

};