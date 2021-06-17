'use strict';

var dbConn = require('./../../config/db.config');

// Cria objeto Usuário
var TipoEquipamento = function(tipoEquipamento) {

    this.nomeTipo = tipoEquipamento.nomeTipo;

};

TipoEquipamento.cadastrar = function (tipoEquipamento, retorno) {

    // Comando SQL INSERT
    dbConn.query("INSERT INTO TipoEquipamento SET ?", [tipoEquipamento], function (err, res) {
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

TipoEquipamento.listarTodos = function (retorno) {

    // Comando SQL SELECT
    dbConn.query("SELECT * FROM TipoEquipamento", function (err, res) {
        if(err) {
            console.log("Erro: ", err);
            retorno(null, err);
        }
        else{
            console.log('TipoEquipamento: ', res);  
            retorno(null, res);
        }
    });   

};

TipoEquipamento.listarId = function (id, retorno) {

    // Comando SQL SELECT
    dbConn.query("SELECT * FROM TipoEquipamento WHERE TipoEquipamentoId = ? ", [id], function (err, res) {             
        if(err) {
            console.log("Erro: ", err);
            retorno(err, null);
        }
        else{
            retorno(null, res);
        }
    }); 

};

TipoEquipamento.atualizar = function(id, tipoEquipamento, retorno) {

    // Comando SQL UPDATE
    dbConn.query("UPDATE TipoEquipamento SET NomeTipo=? WHERE TipoEquipamentoId = ?", 
                    [tipoEquipamento.nomeTipo, id], 
                    function (err, res) {
        if(err) {
            console.log("Erro: ", err);
            retorno(null, err);
        }else{   
            retorno(null, res);
        }
    }); 

};

TipoEquipamento.excluirId = function(retorno) {

    // Comando SQL DELETE
    dbConn.query("DELETE FROM TipoEquipamento WHERE TipoEquipamentoId = ?", [id], function (err, res) {
        if(err) {
            console.log("Erro: ", err);
            retorno(null, err);
        }
        else{
            retorno(null, res);
        }
    }); 

};

TipoEquipamento.excluirTodos = function(id, retorno) {

    // Comando SQL DELETE
    dbConn.query("DELETE FROM TipoEquipamento", function (err, res) {
        if(err) {
            console.log("Erro: ", err);
            retorno(null, err);
        }
        else{
            retorno(null, res);
        }
    }); 

};

module.exports = TipoEquipamento;