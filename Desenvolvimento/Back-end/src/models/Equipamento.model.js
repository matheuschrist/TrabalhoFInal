'use strict';

const DATE_FORMATER = require( 'dateformat' );


var dbConn = require('./../../config/db.config');

// Cria objeto Usuário
var Equipamento = function(equipamento) {

    this.patrimonio         = equipamento.patrimonio;
    this.status             = equipamento.status;
    this.dataCadastro       = new Date();
    this.tipoEquipamentoId  = equipamento.tipoEquipamentoId;
    this.salaId             = equipamento.salaId ? equipamento.salaId : null;

};

Equipamento.cadastrar = function (equipamento, retorno) {
    var datetime = DATE_FORMATER( new Date(), "yyyy-mm-dd HH:MM:ss" );
    equipamento.status = 0;
    equipamento.dataCadastro = datetime;

    // Comando SQL INSERT
    dbConn.query("INSERT INTO Equipamento SET ?", [equipamento], function (err, res) {
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

Equipamento.listarTodos = function (retorno) {

    // Comando SQL SELECT
    dbConn.query("SELECT * FROM Equipamento", function (err, res) {
        if(err) {
            console.log("Erro: ", err);
            retorno(null, err);
        }
        else{
            console.log('Equipamento: ', res);  
            retorno(null, res);
        }
    });   

};

Equipamento.listarId = function (id, retorno) {

    // Comando SQL SELECT
    dbConn.query("SELECT * FROM Equipamento WHERE EquipamentoId = ? ", [id], function (err, res) {             
        if(err) {
            console.log("Erro: ", err);
            retorno(err, null);
        }
        else{
            retorno(null, res);
        }
    }); 

};

Equipamento.atualizar = function(id, equipamento, retorno) {
    if(equipamento.salaId)
    {
        // Comando SQL UPDATE
        dbConn.query("UPDATE Equipamento SET SalaId=? WHERE EquipamentoId = ?", 
                        [equipamento.salaId, id], 
                        function (err, res) {
            if(err) {
                console.log("Erro: ", err);
                retorno(null, err);
            }else{   
                retorno(null, res);
            }
        }); 
    }
    else
    {
        dbConn.query("UPDATE Equipamento SET Status=? WHERE EquipamentoId = ?", 
                        [equipamento.status, id], 
                        function (err, res) {
            if(err) {
                console.log("Erro: ", err);
                retorno(null, err);
            }else{   
                retorno(null, res);
            }
        });
    }
    

};

Equipamento.excluirId = function(retorno) {

    // Comando SQL DELETE
    dbConn.query("DELETE FROM Equipamento", [id], function (err, res) {
        if(err) {
            console.log("Erro: ", err);
            retorno(null, err);
        }
        else{
            retorno(null, res);
        }
    }); 

};

Equipamento.excluirTodos = function(id, retorno) {

    // Comando SQL DELETE
    dbConn.query("DELETE FROM Equipamento WHERE EquipamentoId = ?", function (err, res) {
        if(err) {
            console.log("Erro: ", err);
            retorno(null, err);
        }
        else{
            retorno(null, res);
        }
    }); 

};

module.exports = Equipamento;