'use strict';

const RequisicaoTipoEquipamento = require('../models/RequisicaoTipoEquipamento.model');

exports.cadastrar = function(req, res) {

    const novoRequisicaoTipoEquipamento = new RequisicaoTipoEquipamento(req.body);

    // Retorna erro pela falta de campos obrigatórios
    if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({erro: true, mensagem: 'Preencha todos os campos obrigatórios.'});
    }else{
        RequisicaoTipoEquipamento.cadastrar(novoRequisicaoTipoEquipamento, function(err, requisicaoTipoEquipamento) {
            if (err) {
                res.send(err);
            }
            res.json({ erro: false, mensagem: 'RequisicaoTipoEquipamento cadastrada com sucesso!', idnovoRequisicaoTipoEquipamento: requisicaoTipoEquipamento });
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
        RequisicaoTipoEquipamento.listarPagina(Number(req.query.limite), Number(req.query.pagina), function(err, requisicaoTipoEquipamento) {
            if (err) {
                res.send(err);
            }
            res.send(requisicaoTipoEquipamento);
        });
    }
    else {
        // Lista todos se nenhum limite for especificado
        RequisicaoTipoEquipamento.listarTodos(function(err, requisicaoTipoEquipamento) {
            if (err) {
                res.send(err);
            }
            res.send(requisicaoTipoEquipamento);
        });
    }

};

exports.listarId = function(req, res) {

    RequisicaoTipoEquipamento.listarId(req.params.id, function(err, requisicaoTipoEquipamento) {
        if (err) {
            res.send(err);
        }
        res.json(requisicaoTipoEquipamento);
    });

};

exports.atualizar = function(req, res) {

    // Retorna erro pela falta de campos obrigatórios
    if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ erro: true, mensagem: 'Preencha todos os campos obrigatórios.' });
    }else{
        RequisicaoTipoEquipamento.atualizar(req.params.id, new RequisicaoTipoEquipamento(req.body), function(err, requisicaoTipoEquipamento) {
            if (err) {
                res.send(err);
            }
            res.json({ erro: false, mensagem: 'RequisicaoTipoEquipamento atualizada com sucesso!' });
        });
    }
  
};


exports.excluirId = function(req, res) {

    RequisicaoTipoEquipamento.excluir(req.params.id, function(err, requisicaoTipoEquipamento) {
        if (err) {
            res.send(err);
        }
        res.json({ erro: false, mensagem: 'RequisicaoTipoEquipamento excluída com sucesso!' });
    });

};

exports.excluirTodos = function(req, res) {

    RequisicaoTipoEquipamento.excluirTodos(function(err, requisicaoTipoEquipamento) {
        if (err) {
            res.send(err);
        }
        res.json({ erro: false, mensagem: 'Todos os requisicaoTipoEquipamentos excluídas com sucesso!' });
    });

};