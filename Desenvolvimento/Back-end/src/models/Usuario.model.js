'use strict';

var dbConn = require('./../../config/db.config');

// Cria objeto Usuário
var Usuario = function(usuario) {

    this.nome           = usuario.nome;
    this.login          = usuario.login;
    this.senha          = usuario.senha;
    this.identificacao  = usuario.identificacao;
    this.tipo           = usuario.tipo;
    this.email          = usuario.email;

};

Usuario.cadastrar = function (usuario, retorno) {

    // Comando SQL INSERT
    dbConn.query("INSERT INTO Usuario SET ?", [usuario], function (err, res) {
        if(err) {
            console.log("Erro: ", err);
            retorno(err, null);
        }
        else {
            // Retorna Id do usuário inserido no banco
            console.log(res.insertId);
            retorno(null, res.insertId);
        }
    }); 

}

Usuario.listarTodos = function (retorno) {

    // Comando SQL SELECT
    dbConn.query("SELECT * FROM Usuario", function (err, res) {
        if(err) {
            console.log("Erro: ", err);
            retorno(null, err);
        }
        else{
            console.log('Usuarios: ', res);  
            retorno(null, res);
        }
    });   

};

Usuario.listarPagina = function (limite, pagina, retorno) {

    // Obtem o offset para os objetos da página requisitada
    var offset = (pagina - 1) * limite;

    // Comando SQL SELECT
    dbConn.query("SELECT * FROM Usuario LIMIT ? OFFSET ? ", [limite, offset], function (err, res) {
        if(err) {
            console.log("Erro: ", err);
            retorno(err, null);
        }
        else{
            console.log('Usuarios: ', res);  
            retorno(null, res);
        }
    });   

};

Usuario.listarId = function (id, retorno) {

    // Comando SQL SELECT
    dbConn.query("SELECT * FROM Usuario WHERE UsuarioId = ? ", [id], function (err, res) {             
        if(err) {
            console.log("Erro: ", err);
            retorno(err, null);
        }
        else{
            retorno(null, res);
        }
    }); 

};

Usuario.pesquisar = function (id, nome, login, identificacao, tipo, email, retorno) {

    // Prepara as strings
    nome = ('%' + nome + '%');
    login = ('%' + login + '%');
    identificacao = ('%' + identificacao + '%');
    email = ('%' + email + '%');

    // Comando SQL SELECT
    dbConn.query("SELECT * FROM Usuario WHERE UsuarioId = ? OR Nome LIKE ? OR Login LIKE ? OR Identificacao LIKE ? OR Tipo = ? OR Email LIKE ? ", 
                [id, nome, login, identificacao, tipo, email], function (err, res) {             
        if(err) {
            console.log("Erro: ", err);
            retorno(err, null);
        }
        else{
            retorno(null, res);
        }
    }); 

};

Usuario.atualizar = function(id, usuario, retorno) {

    // Comando SQL UPDATE
    dbConn.query("UPDATE Usuario SET Nome=?, Login=?, Senha=?, Identificacao=?, Tipo=?, Email=? WHERE UsuarioId = ?", 
                    [usuario.nome, usuario.login, usuario.senha, usuario.email, id], 
                    function (err, res) {
        if(err) {
            console.log("Erro: ", err);
            retorno(null, err);
        }else{   
            retorno(null, res);
        }
    }); 

};

Usuario.excluirId = function(id, retorno) {

    // Comando SQL DELETE
    dbConn.query("DELETE FROM Usuario WHERE UsuarioId = ?", [id], function (err, res) {
        if(err) {
            console.log("Erro: ", err);
            retorno(null, err);
        }
        else{
            retorno(null, res);
        }
    }); 

};

Usuario.excluirTodos = function( retorno) {

    // Comando SQL DELETE
    dbConn.query("DELETE FROM Usuario", function (err, res) {
        if(err) {
            console.log("Erro: ", err);
            retorno(null, err);
        }
        else{
            retorno(null, res);
        }
    }); 

};

module.exports = Usuario;