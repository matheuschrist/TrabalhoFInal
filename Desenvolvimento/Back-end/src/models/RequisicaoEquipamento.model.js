'use strict';

var dbConn = require('./../../config/db.config');

// Cria objeto RequisicaoEquipamento
var RequisicaoEquipamento = function(requisicaoEquipamento) {

    this.requisicaoId   = requisicaoEquipamento.requisicaoId;
    this.equipamentoId  = requisicaoEquipamento.equipamentoId;

};

RequisicaoEquipamento.cadastrar = function (requisicaoEquipamento, retorno) {

    // Comando SQL INSERT
    dbConn.query("INSERT INTO RequisicaoEquipamento SET ?", [requisicaoEquipamento], function (err, res) {
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

RequisicaoEquipamento.listarTodos = function (retorno) {

    // Comando SQL SELECT
    dbConn.query("SELECT * FROM RequisicaoEquipamento", function (err, res) {
        if(err) {
            console.log("Erro: ", err);
            retorno(null, err);
        }
        else{
            console.log('RequisicaoEquipamento: ', res);  
            retorno(null, res);
        }
    });   

};

RequisicaoEquipamento.listarPagina = function (limite, pagina, retorno) {

    // Obtem o offset para os objetos da página requisitada
    var offset = (pagina - 1) * limite;

    // Comando SQL SELECT
    dbConn.query("SELECT * FROM RequisicaoEquipamento LIMIT ? OFFSET ? ", [limite, offset], function (err, res) {
        if(err) {
            console.log("Erro: ", err);
            retorno(err, null);
        }
        else{
            console.log('RequisicaoEquipamento: ', res);  
            retorno(null, res);
        }
    });   

};

RequisicaoEquipamento.listarId = function (id, retorno) {

    // Comando SQL SELECT
    dbConn.query("SELECT * FROM RequisicaoEquipamento WHERE RequisicaoEquipamentoId = ? ", [id], function (err, res) {             
        if(err) {
            console.log("Erro: ", err);
            retorno(err, null);
        }
        else{
            retorno(null, res);
        }
    }); 

};

/*RequisicaoEquipamento.atualizar = function(id, requisicaoEquipamento, retorno) {

    // Comando SQL UPDATE
    dbConn.query("UPDATE RequisicaoEquipamento SET Status=?, DataEntrega=?, DataConclusao=?, DataCancelamento=? WHERE RequisicaoEquipamentoId = ?", 
                    [requisicao.status, requisicao.dataEntrega, requisicao.dataConclusao, requisicao.dataCancelamento, id], 
                    function (err, res) {
        if(err) {
            console.log("Erro: ", err);
            retorno(null, err);
        }else{   
            retorno(null, res);
        }
    }); 

};*/

RequisicaoEquipamento.excluirId = function(id, retorno) {

    // Comando SQL DELETE
    dbConn.query("DELETE FROM RequisicaoEquipamento WHERE RequisicaoEquipamentoId = ?", [id], function (err, res) {
        if(err) {
            console.log("Erro: ", err);
            retorno(null, err);
        }
        else{
            retorno(null, res);
        }
    }); 

};

RequisicaoEquipamento.excluirTodos = function(retorno) {

    // Comando SQL DELETE
    dbConn.query("DELETE FROM RequisicaoEquipamento", function (err, res) {
        if(err) {
            console.log("Erro: ", err);
            retorno(null, err);
        }
        else{
            retorno(null, res);
        }
    }); 

};

module.exports = RequisicaoEquipamento;