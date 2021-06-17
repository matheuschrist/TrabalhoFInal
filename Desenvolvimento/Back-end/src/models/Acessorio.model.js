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
            retorno(err, null);
        }
        else{
            console.log('Acessorio: ', res);  
            retorno(null, res);
        }
    });   

};

Acessorio.listarPagina = function (limite, pagina, retorno) {

    // Obtem o offset para os objetos da página requisitada
    var offset = (pagina - 1) * limite;

    // Comando SQL SELECT
    dbConn.query("SELECT * FROM Acessorio LIMIT ? OFFSET ? ", [limite, offset], function (err, res) {
        if(err) {
            console.log("Erro: ", err);
            retorno(err, null);
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

Acessorio.pesquisar = function (id, tipo, retorno) {

    tipo = ('%' + tipo + '%');

    // Comando SQL SELECT
    dbConn.query("SELECT * FROM Acessorio WHERE AcessorioId = ? OR Tipo LIKE ? ", [id, tipo], function (err, res) {             
        if(err) {
            console.log("Erro: ", err);
            retorno(err, null);
        }
        else{
            retorno(null, res);
        }
    }); 
    
}

Acessorio.obterQuantidade = function (id, retorno) {

    // Comando SQL SELECT
    dbConn.query("SELECT Quantidade FROM Acessorio WHERE AcessorioId = ? ", [id], function (err, res) {             
        if(err) {
            console.log("Erro: ", err);
            retorno(err, null);
        }
        else{
            retorno(null, res[0].Quantidade);
        }
    }); 

};

Acessorio.atualizarQuantidade = function(id, quantidade, retorno) {

    // Comando SQL UPDATE
    dbConn.query("UPDATE Acessorio SET Quantidade = (Quantidade + ?) WHERE AcessorioId = ?", 
                    [quantidade, id], 
                    function (err) {
        if(err) {
            console.log("Erro: ", err);
            retorno(err);
        }else{   
            retorno(null);
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
            retorno(err, null);
        }else{   
            retorno(null, res);
        }
    }); 

};

Acessorio.excluirId = function(id, retorno) {

    // Comando SQL DELETE
    dbConn.query("DELETE FROM Acessorio WHERE AcessorioId = ?", [id], function (err, res) {
        if(err) {
            console.log("Erro: ", err);
            retorno(err, null);
        }
        else{
            retorno(null, res);
        }
    }); 

};

Acessorio.excluirTodos = function(retorno) {

    // Comando SQL DELETE
    dbConn.query("DELETE FROM Acessorio", function (err, res) {
        if(err) {
            console.log("Erro: ", err);
            retorno(err, null);
        }
        else{
            retorno(null, res);
        }
    }); 

};

module.exports = Acessorio;