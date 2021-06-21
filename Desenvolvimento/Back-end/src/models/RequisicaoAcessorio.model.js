'use strict';

var dbConn = require('./../../config/db.config');

// Cria objeto RequisicaoAcessorio
var RequisicaoAcessorio = function(requisicaoAcessorio) {

    this.requisicaoId           = requisicaoAcessorio.requisicaoId;
    this.acessorioId            = requisicaoAcessorio.acessorioId;
    this.quantidadeAcessorio    = requisicaoAcessorio.quantidadeAcessorio;

};

RequisicaoAcessorio.cadastrar = function (requisicaoAcessorio, retorno) {

    // Comando SQL INSERT
    dbConn.query("INSERT INTO RequisicaoAcessorio SET ?", [requisicaoAcessorio], function (err, res) {
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

RequisicaoAcessorio.listarTodos = function (retorno) {

    // Comando SQL SELECT
    dbConn.query("SELECT * FROM RequisicaoAcessorio", function (err, res) {
        if(err) {
            console.log("Erro: ", err);
            retorno(null, err);
        }
        else{
            console.log('RequisicaoAcessorio: ', res);  
            retorno(null, res);
        }
    });   

};

RequisicaoAcessorio.listarPagina = function (limite, pagina, retorno) {

    // Obtem o offset para os objetos da página requisitada
    var offset = (pagina - 1) * limite;

    // Comando SQL SELECT
    dbConn.query("SELECT * FROM RequisicaoAcessorio LIMIT ? OFFSET ? ", [limite, offset], function (err, res) {
        if(err) {
            console.log("Erro: ", err);
            retorno(err, null);
        }
        else{
            console.log('RequisicaoAcessorio: ', res);  
            retorno(null, res);
        }
    });   

};

RequisicaoAcessorio.listarId = function (id, retorno) {

    // Comando SQL SELECT
    dbConn.query("SELECT * FROM RequisicaoAcessorio WHERE RequisicaoAcessorioId = ? ", [id], function (err, res) {             
        if(err) {
            console.log("Erro: ", err);
            retorno(err, null);
        }
        else{
            retorno(null, res);
        }
    }); 

};

RequisicaoAcessorio.atualizar = function(id, requisicaoAcessorio, retorno) {

    // Comando SQL UPDATE
    dbConn.query("UPDATE RequisicaoAcessorio SET QuantidadeAcessorio=? WHERE RequisicaoAcessorioId = ?", 
                    [requisicaoAcessorio.quantidadeAcessorio, id], 
                    function (err, res) {
        if(err) {
            console.log("Erro: ", err);
            retorno(null, err);
        }else{   
            retorno(null, res);
        }
    }); 

};

RequisicaoAcessorio.excluirId = function(id, retorno) {

    // Comando SQL DELETE
    dbConn.query("DELETE FROM RequisicaoAcessorio WHERE RequisicaoAcessorioId = ?", [id], function (err, res) {
        if(err) {
            console.log("Erro: ", err);
            retorno(null, err);
        }
        else{
            retorno(null, res);
        }
    }); 

};

RequisicaoAcessorio.excluirTodos = function(retorno) {

    // Comando SQL DELETE
    dbConn.query("DELETE FROM RequisicaoAcessorio", function (err, res) {
        if(err) {
            console.log("Erro: ", err);
            retorno(null, err);
        }
        else{
            retorno(null, res);
        }
    }); 

};

module.exports = RequisicaoAcessorio;