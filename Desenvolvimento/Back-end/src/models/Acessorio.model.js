'use strict';

var dbConn = require('./../../config/db.config');

// Cria objeto Usuário
var Acessorio = function(acessorio) {

    this.tipo       = acessorio.tipo;
    this.quantidade = acessorio.quantidade;

};

Acessorio.cadastrar = function (acessorio, retorno) {

    // Comando SQL INSERT
    dbConn.query("INSERT INTO Acessorio SET ?", [acessorio], function (err, res) {
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

Acessorio.listarTodos = function (retorno) {

    // Comando SQL SELECT
    dbConn.query("SELECT * FROM Acessorio", function (err, res) {
        if(err) {
            console.log("Erro: ", err);
            retorno(null, err);
        }
        else{
            console.log('Acessorio: ', res);  
            retorno(null, res);
        }
    });   

};

Acessorio.listarId = function (id, retorno) {

    // Comando SQL SELECT
    dbConn.query("SELECT * FROM Acessorio WHERE AcessorioId = ? ", [id], function (err, res) {             
        if(err) {
            console.log("Erro: ", err);
            retorno(err, null);
        }
        else{
            retorno(null, res);
        }
    }); 

};

Acessorio.atualizar = function(id, acessorio, retorno) {

    // Comando SQL UPDATE
    dbConn.query("UPDATE Acessorio SET Quantidade = ? WHERE AcessorioId = ?", 
                    [acessorio.quantidade, id], 
                    function (err, res) {
        if(err) {
            console.log("Erro: ", err);
            retorno(null, err);
        }else{   
            retorno(null, res);
        }
    }); 

};

Acessorio.excluirId = function(retorno) {

    // Comando SQL DELETE
    dbConn.query("DELETE FROM Acessorio WHERE AcessorioId = ?", [id], function (err, res) {
        if(err) {
            console.log("Erro: ", err);
            retorno(null, err);
        }
        else{
            retorno(null, res);
        }
    }); 

};

Acessorio.excluirTodos = function(id, retorno) {

    // Comando SQL DELETE
    dbConn.query("DELETE FROM Acessorio", function (err, res) {
        if(err) {
            console.log("Erro: ", err);
            retorno(null, err);
        }
        else{
            retorno(null, res);
        }
    }); 

};

module.exports = Acessorio;