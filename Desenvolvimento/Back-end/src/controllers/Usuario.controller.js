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

    if(req.query.limite) {
        // Assume página 1 caso ela não seja especificada
        if(req.query.pagina == null) {
            req.query.pagina = '1';
        }
        // Lista de acordo com o limite e a página especificados
        Usuario.listarPagina(Number(req.query.limite), Number(req.query.pagina), function(err, usuario) {
            if (err) {
                res.send(err);
            }
            res.send(usuario);
        });
    }
    else {
        // Lista todos se nenhum limite for especificado
        Usuario.listarTodos(function(err, usuario) {
            if (err) {
                res.send(err);
            }
            res.send(usuario);
        });
    }

};

exports.listarId = function(req, res) {

    Usuario.listarId(req.params.id, function(err, usuario) {
        if (err) {
            res.send(err);
        }
        res.json(usuario);
    });

};

exports.pesquisar = function(req, res) {

    Usuario.pesquisar(req.query.id, req.query.nome, req.query.login, req.query.identificacao, 
                      req.query.tipo, req.query.email, function(err, usuario) {
        if (err) {
            res.send(err);
        }
        res.send(usuario);
    });

}

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