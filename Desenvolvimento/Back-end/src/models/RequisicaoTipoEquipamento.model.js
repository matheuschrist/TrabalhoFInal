'use strict';

var dbConn = require('./../../config/db.config');

// Cria objeto Usuário
var RequisicaoTipoEquipamento = function(requisicaoTipoEquipamento) {

    this.requisicaoId           = requisicaoTipoEquipamento.requisicaoId;
    this.tipoEquipamentoId      = requisicaoTipoEquipamento.tipoEquipamentoId;
    this.quantidadeSolicitada   = requisicaoTipoEquipamento.quantidadeSolicitada;

};

RequisicaoTipoEquipamento.cadastrar = function (requisicaoTipoEquipamento, retorno) {

    // Comando SQL INSERT
    dbConn.query("INSERT INTO RequisicaoTipoEquipamento SET ?", [requisicaoTipoEquipamento], function (err, res) {
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

RequisicaoTipoEquipamento.listarTodos = function (retorno) {

    // Comando SQL SELECT
    dbConn.query("SELECT * FROM RequisicaoTipoEquipamento", function (err, res) {
        if(err) {
            console.log("Erro: ", err);
            retorno(null, err);
        }
        else{
            console.log('RequisicaoTipoEquipamento: ', res);  
            retorno(null, res);
        }
    });   

};

RequisicaoTipoEquipamento.listarAssociacaoReq = function(id, retorno)
{
    dbConn.query("SELECT * FROM RequisicaoTipoEquipamento WHERE RequisicaoId = ? ", [id], function (err, res) {             
        if(err) {
            console.log("Erro: ", err);
            retorno(err, null);
        }
        else{
            retorno(null, res);
        }
    });
}

RequisicaoTipoEquipamento.listarId = function (id, retorno) {

    // Comando SQL SELECT
    dbConn.query("SELECT * FROM RequisicaoTipoEquipamento WHERE RequisicaoTipoEquipamentoId = ? ", [id], function (err, res) {             
        if(err) {
            console.log("Erro: ", err);
            retorno(err, null);
        }
        else{
            retorno(null, res);
        }
    }); 

};

RequisicaoTipoEquipamento.atualizar = function(id, requisicaoTipoEquipamento, retorno) {

    // Comando SQL UPDATE
    dbConn.query("UPDATE RequisicaoTipoEquipamento SET QuantidadeSolicitada=? WHERE RequisicaoTipoEquipamentoId = ?", 
                    [requisicaoTipoEquipamento.quantidadeSolicitada, id], 
                    function (err, res) {
        if(err) {
            console.log("Erro: ", err);
            retorno(null, err);
        }else{   
            retorno(null, res);
        }
    }); 

};

RequisicaoTipoEquipamento.excluirId = function(id, retorno) {

    // Comando SQL DELETE
    dbConn.query("DELETE FROM RequisicaoTipoEquipamento WHERE RequisicaoTipoEquipamentoId = ?", [id], function (err, res) {
        if(err) {
            console.log("Erro: ", err);
            retorno(null, err);
        }
        else{
            retorno(null, res);
        }
    }); 

};

RequisicaoTipoEquipamento.excluirTodos = function(retorno) {

    // Comando SQL DELETE
    dbConn.query("DELETE FROM RequisicaoTipoEquipamento", function (err, res) {
        if(err) {
            console.log("Erro: ", err);
            retorno(null, err);
        }
        else{
            retorno(null, res);
        }
    }); 

};

module.exports = RequisicaoTipoEquipamento;