'use strict';

const RequisicaoEquipamento = require('../models/RequisicaoEquipamento.model');

exports.cadastrar = function(req, res) {

    const novoRequisicaoEquipamento = new RequisicaoEquipamento(req.body);

    // Retorna erro pela falta de campos obrigatórios
    if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({erro: true, mensagem: 'Preencha todos os campos obrigatórios.'});
    }else{
        RequisicaoEquipamento.cadastrar(novoRequisicaoEquipamento, function(err, requisicaoEquipamento) {
            if (err) {
                res.send(err);
            }
            res.json({ erro: false, mensagem: 'RequisicaoEquipamento cadastrada com sucesso!', idRequisicaoEquipamento: requisicaoEquipamento });
        });
    }

};

exports.listarTodos = function(req, res) {

    if(req.query.limite) {
        // Assume página 1 caso ela não seja especificada
        if(req.query.pagina == null) {
            req.query.pagina = '1';
        }
        // Lista de acordo com o limite e a página especificados
        RequisicaoEquipamento.listarPagina(Number(req.query.limite), Number(req.query.pagina), function(err, requisicaoEquipamento) {
            if (err) {
                res.send(err);
            }
            res.send(requisicaoEquipamento);
        });
    }
    else {
        // Lista todos se nenhum limite for especificado
        RequisicaoEquipamento.listarTodos(function(err, requisicaoEquipamento) {
            if (err) {
                res.send(err);
            }
            res.send(requisicaoEquipamento);
        });
    }

};

exports.listarId = function(req, res) {

    RequisicaoEquipamento.listarId(req.params.id, function(err, requisicaoEquipamento) {
        if (err) {
            res.send(err);
        }
        res.json(requisicaoEquipamento);
    });

};

/*exports.atualizar = function(req, res) {

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
  
};*/


exports.excluirId = function(req, res) {

    RequisicaoEquipamento.excluir(req.params.id, function(err, requisicaoEquipamento) {
        if (err) {
            res.send(err);
        }
        res.json({ erro: false, mensagem: 'RequisicaoEquipamento excluída com sucesso!' });
    });

};

exports.excluirTodos = function(req, res) {

    RequisicaoEquipamento.excluirTodos(function(err, requisicaoEquipamento) {
        if (err) {
            res.send(err);
        }
        res.json({ erro: false, mensagem: 'Todos as RequisicaoEquipamentos excluídas com sucesso!' });
    });

};