'use strict';

var dbConn = require('./../../config/db.config');
const DATE_FORMATER = require( 'dateformat' );


// Cria objeto Usuário
var Requisicao = function(requisicao) {

    this.tipo               = requisicao.tipo;
    this.status             = requisicao.status;
    this.dataAbertura       = requisicao.dataAbertura;
    this.dataEntrega        = requisicao.dataEntrega ? requisicao.dataEntrega : null;
    this.dataCancelamento   = requisicao.dataEntrega ? requisicao.dataEntrega : null;
    this.dataConclusao      = requisicao.dataEntrega ? requisicao.dataEntrega : null;
    this.usuarioId          = requisicao.usuarioId;

};

Requisicao.cadastrar = function (requisicao, retorno) {
    
    var datetime = DATE_FORMATER( new Date(), "yyyy-mm-dd HH:MM:ss" );
    requisicao.status = 0
    requisicao.dataAbertura = datetime

    switch(requisicao.tipo)
    {
        case "Sala":
            requisicao.tipo = 0            
            break
        case "Equipamento":
            requisicao.tipo = 1
            break
    }


    // Comando SQL INSERT
    dbConn.query("INSERT INTO Requisicao SET ?", [requisicao], function (err, res) {
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

Requisicao.listarTodos = function (retorno) {

    // Comando SQL SELECT
    dbConn.query("SELECT * FROM Requisicao", function (err, res) {
        if(err) {
            console.log("Erro: ", err);
            retorno(null, err);
        }
        else{
            console.log('Requisicao: ', res);  
            retorno(null, res);
        }
    });   

};

Requisicao.listarId = function (id, retorno) {

    // Comando SQL SELECT
    dbConn.query("SELECT * FROM Requisicao WHERE RequisicaoId = ? ", [id], function (err, res) {             
        if(err) {
            console.log("Erro: ", err);
            retorno(err, null);
        }
        else{
            retorno(null, res);
        }
    }); 

};

Requisicao.atualizar = function(id, requisicao, retorno) {

    // Comando SQL UPDATE
    dbConn.query("UPDATE Requisicao SET Status=?, DataEntrega=?, DataConclusao=?, DataCancelamento=? WHERE RequisicaoId = ?", 
                    [requisicao.status, requisicao.dataEntrega, requisicao.dataConclusao, requisicao.dataCancelamento, id], 
                    function (err, res) {
        if(err) {
            console.log("Erro: ", err);
            retorno(null, err);
        }else{   
            retorno(null, res);
        }
    }); 

};

Requisicao.excluirId = function(id, retorno) {

    // Comando SQL DELETE
    dbConn.query("DELETE FROM Requisicao WHERE RequisicaoId = ?", [id], function (err, res) {
        if(err) {
            console.log("Erro: ", err);
            retorno(null, err);
        }
        else{
            retorno(null, res);
        }
    }); 

};

Requisicao.excluirTodos = function(retorno) {

    // Comando SQL DELETE
    dbConn.query("DELETE FROM Requisicao", function (err, res) {
        if(err) {
            console.log("Erro: ", err);
            retorno(null, err);
        }
        else{
            retorno(null, res);
        }
    }); 

};

module.exports = Requisicao;