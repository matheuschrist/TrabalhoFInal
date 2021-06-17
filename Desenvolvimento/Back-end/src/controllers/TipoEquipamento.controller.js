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

    if(req.query.limite) {
        // Assume página 1 caso ela não seja especificada
        if(req.query.pagina == null) {
            req.query.pagina = '1';
        }
        // Lista de acordo com o limite e a página especificados
        TipoEquipamento.listarPagina(Number(req.query.limite), Number(req.query.pagina), function(err, tipoEquipamento) {
            if (err) {
                res.send(err);
            }
            res.send(tipoEquipamento);
        });
    }
    else {
        // Lista todos se nenhum limite for especificado
        TipoEquipamento.listarTodos(function(err, tipoEquipamento) {
            if (err) {
                res.send(err);
            }
            res.send(tipoEquipamento);
        });
    }

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