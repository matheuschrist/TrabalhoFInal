'use strict';

const Login = require('../models/Login.model');
const Usuario = require('../models/Usuario.model');

exports.realizar = function(req, res) {

    Usuario.listarTodos(function(err, usuario) {
        if (err) {
            res.send(err);
        }

        var logado = false;

        for(let i = 0 ; i < usuario.length ; i++) {
            if(usuario[i].Login == req.body.login && usuario[i].Senha == req.body.senha) {
                Login.realizar(usuario[i].UsuarioId, function(err, login) {
                    if (err) {
                        res.send(err);
                    }
                    logado = true;
                    console.log('TESTE 1 ' + logado)
                    res.json({ erro: false, mensagem: 'Usuário logado com sucesso!', idUsuario: usuario[i].UsuarioId });
                });
            }/*
            else if(i == (usuario.length - 1) && logado == false) {
                console.log('TESTE 2 ' + logado)
                res.json({ erro: true, mensagem: 'Usuário ou Senha de login incorretos!' });
            }*/ 
        }  
    });
    

};
/*
exports.verificar = function(req, res) {

    Login.recuperar(function(err, login) {
        if (err) {
            res.send(err);
        }
        else if (login[0] == undefined) {
            res.status(403).json({ erro: true, mensagem: 'Usuário não está logado!' });
        }
        else {
            retorno(login);
        }
    });

}
*/
exports.recuperar = function(req, res) {

    Login.recuperar(function(err, login) {
        if (err) {
            res.send(err);
        }
        // Verifica se o usuário está logado ou não
        if(login[0] == undefined) {
            res.status(403).json({ erro: true, mensagem: 'Usuário não está logado!' });
        }
        else {
            // Retorna dados do usuário que está logado
            Usuario.listarId(login[0].UsuarioId, function(err, usuario) {
                if (err) {
                    res.send(err);
                }
                res.json(usuario);
            }); 
        }   
    });

};

exports.finalizar = function(req, res) {

    Login.finalizar(function(err, usuario) {
        if (err) {
            res.send(err);
        }
        res.json({ erro: false, mensagem: 'Usuário deslogou com sucesso!' });
    });

};