'use strict';

var dbConn = require('./../../config/db.config');

// Cria objeto AcessorioSala
var AcessorioSala = function(acessorioSala) {

    this.acessorioId            = acessorioSala.acessorioId;
    this.quantidadeAcessorio    = acessorioSala.quantidadeAcessorio;
    this.salaId                 = acessorioSala.salaId;

};

AcessorioSala.cadastrar = function (acessorioSala, retorno) {

    // Comando SQL INSERT
    dbConn.query("INSERT INTO AcessorioSala SET ?", [acessorioSala], function (err, res) {
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

AcessorioSala.listarTodos = function (retorno) {

    // Comando SQL SELECT
    dbConn.query("SELECT * FROM AcessorioSala ", function (err, res) {
        if(err) {
            console.log("Erro: ", err);
            retorno(err, null);
        }
        else{
            console.log('AcessorioSala: ', res);  
            retorno(null, res);
        }
    });   

};

AcessorioSala.listarPagina = function (limite, pagina, retorno) {

    // Obtem o offset para os objetos da página requisitada
    var offset = (pagina - 1) * limite;

    // Comando SQL SELECT
    dbConn.query("SELECT * FROM AcessorioSala LIMIT ? OFFSET ? ", [limite, offset], function (err, res) {
        if(err) {
            console.log("Erro: ", err);
            retorno(err, null);
        }
        else{
            console.log('AcessorioSala: ', res);  
            retorno(null, res);
        }
    });   

};

AcessorioSala.listarId = function (id, retorno) {

    // Comando SQL SELECT
    dbConn.query("SELECT * FROM AcessorioSala WHERE AcessorioSalaId = ? ", [id], function (err, res) {             
        if(err) {
            console.log("Erro: ", err);
            retorno(err, null);
        }
        else{
            retorno(null, res);
        }
    }); 

};

AcessorioSala.pesquisar = function (id, idAcessorio, idSala, qtdAcessorio, retorno) {


    // Comando SQL SELECT
    dbConn.query("SELECT * FROM AcessorioSala WHERE AcessorioSalaId = ? OR AcessorioId = ? OR SalaId = ? OR QuantidadeAcessorio = ? ", 
                [id, idAcessorio, idSala, qtdAcessorio], function (err, res) {             
        if(err) {
            console.log("Erro: ", err);
            retorno(err, null);
        }
        else{
            retorno(null, res);
        }
    }); 

};

AcessorioSala.obterQuantidade = function (id, retorno) {

    // Comando SQL SELECT
    dbConn.query("SELECT QuantidadeAcessorio FROM AcessorioSala WHERE AcessorioSalaId = ? ", [id], function (err, res) {             
        if(err) {
            console.log("Erro: ", err);
            retorno(err, null);
        }
        else{
            retorno(null, res[0].QuantidadeAcessorio);
        }
    }); 

};

AcessorioSala.atualizar = function(id, acessorio, retorno) {

    // Comando SQL UPDATE
    dbConn.query("UPDATE AcessorioSala SET QuantidadeAcessorio = ? WHERE AcessorioSalaId = ?", 
                    [acessorio.quantidadeAcessorio, id], 
                    function (err, res) {
        if(err) {
            console.log("Erro: ", err);
            retorno(err, null);
        }else{   
            retorno(null, res);
        }
    }); 

};

AcessorioSala.excluirId = function(id, retorno) {

    // Comando SQL DELETE
    dbConn.query("DELETE FROM AcessorioSala WHERE AcessorioSalaId = ?", [id], function (err, res) {
        if(err) {
            console.log("Erro: ", err);
            retorno(err, null);
        }
        else{
            retorno(null, res);
        }
    }); 

};

AcessorioSala.excluirTodos = function(retorno) {

    // Comando SQL DELETE
    dbConn.query("DELETE FROM AcessorioSala", function (err, res) {
        if(err) {
            console.log("Erro: ", err);
            retorno(err, null);
        }
        else{
            retorno(null, res);
        }
    }); 

};

module.exports = AcessorioSala;