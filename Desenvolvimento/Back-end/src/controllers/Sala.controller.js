'use strict';

const Sala = require('../models/Sala.model');

exports.cadastrar = function(req, res) {

    const novoSala = new Sala(req.body);

    // Retorna erro pela falta de campos obrigatórios
    if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({erro: true, mensagem: 'Preencha todos os campos obrigatórios.'});
    }else{
        Sala.cadastrar(novoSala, function(err, sala) {
            if (err) {
                res.send(err);
            }
            res.json({ erro: false, mensagem: 'Sala cadastrado com sucesso!', idSala: sala });
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
        Sala.listarPagina(Number(req.query.limite), Number(req.query.pagina), function(err, sala) {
            if (err) {
                res.send(err);
            }
            res.send(sala);
        });
    }
    else {
        // Lista todos se nenhum limite for especificado
        Sala.listarTodos(function(err, sala) {
            if (err) {
                res.send(err);
            }
            res.send(sala);
        });
    }

};

exports.listarId = function(req, res) {

    Sala.listarId(req.params.id, function(err, sala) {
        if (err) {
            res.send(err);
        }
        res.json(sala);
    });

};

exports.pesquisar = function(req, res) {

    Sala.pesquisar(req.query.id, req.query.numeroSala, req.query.status, req.query.quantidadeAluno, 
                      req.query.quantidadeAlunoPandemia, function(err, sala) {
        if (err) {
            res.send(err);
        }
        res.send(sala);
    });

}

exports.atualizar = function(req, res) {

    // Retorna erro pela falta de campos obrigatórios
    if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ erro: true, mensagem: 'Preencha todos os campos obrigatórios.' });
    }else{
        Sala.atualizar(req.params.id, new Sala(req.body), function(err, sala) {
            if (err) {
                res.send(err);
            }
            res.json({ erro: false, mensagem: 'Sala atualizado com sucesso!' });
        });
    }
  
};


exports.excluirId = function(req, res) {

    Sala.excluir(req.params.id, function(err, sala) {
        if (err) {
            res.send(err);
        }
        res.json({ erro: false, mensagem: 'Sala excluído com sucesso!' });
    });

};

exports.excluirTodos = function(req, res) {

    Sala.excluirTodos(function(err, sala) {
        if (err) {
            res.send(err);
        }
        res.json({ erro: false, mensagem: 'Todos os salas excluídos com sucesso!' });
    });

};