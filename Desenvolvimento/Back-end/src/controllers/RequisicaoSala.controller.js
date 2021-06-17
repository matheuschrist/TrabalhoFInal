'use strict';

const RequisicaoSala = require('../models/RequisicaoSala.model');

exports.cadastrar = function(req, res) {

    const novoRequisicaoSala = new RequisicaoSala(req.body);

    // Retorna erro pela falta de campos obrigatórios
    if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({erro: true, mensagem: 'Preencha todos os campos obrigatórios.'});
    }else{
        RequisicaoSala.cadastrar(novoRequisicaoSala, function(err, requisicaoSala) {
            if (err) {
                res.send(err);
            }
            res.json({ erro: false, mensagem: 'RequisicaoSala cadastrada com sucesso!', idRequisicaoSala: requisicaoSala });
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
        RequisicaoSala.listarPagina(Number(req.query.limite), Number(req.query.pagina), function(err, requisicaoSala) {
            if (err) {
                res.send(err);
            }
            res.send(requisicaoSala);
        });
    }
    else {
        // Lista todos se nenhum limite for especificado
        RequisicaoSala.listarTodos(function(err, requisicaoSala) {
            if (err) {
                res.send(err);
            }
            res.send(requisicaoSala);
        });
    }

};

exports.listarId = function(req, res) {

    RequisicaoSala.listarId(req.params.id, function(err, requisicaoSala) {
        if (err) {
            res.send(err);
        }
        res.json(requisicaoSala);
    });

};

/*exports.atualizar = function(req, res) {

    // Retorna erro pela falta de campos obrigatórios
    if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ erro: true, mensagem: 'Preencha todos os campos obrigatórios.' });
    }else{
        RequisicaoSala.atualizar(req.params.id, new RequisicaoSala(req.body), function(err, requisicaoSala) {
            if (err) {
                res.send(err);
            }
            res.json({ erro: false, mensagem: 'RequisicaoSala atualizada com sucesso!' });
        });
    }
  
};*/


exports.excluirId = function(req, res) {

    RequisicaoSala.excluir(req.params.id, function(err, requisicaoSala) {
        if (err) {
            res.send(err);
        }
        res.json({ erro: false, mensagem: 'RequisicaoSala excluída com sucesso!' });
    });

};

exports.excluirTodos = function(req, res) {

    RequisicaoSala.excluirTodos(function(err, requisicaoSala) {
        if (err) {
            res.send(err);
        }
        res.json({ erro: false, mensagem: 'Todos as RequisicaoSalas excluídas com sucesso!' });
    });

};