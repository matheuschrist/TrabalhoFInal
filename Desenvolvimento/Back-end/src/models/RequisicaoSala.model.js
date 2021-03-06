'use strict';

var dbConn = require('./../../config/db.config');

// Cria objeto RequisicaoSala
var RequisicaoSala = function(requisicaoSala) {

    this.requisicaoId   = requisicaoSala.requisicaoId;
    this.salaId         = requisicaoSala.salaId

};

RequisicaoSala.cadastrar = function (requisicaoSala, retorno) {
    console.log('RequisicaoId: ',requisicaoSala.requisicaoId)
    // Comando SQL INSERT
    dbConn.query("INSERT INTO RequisicaoSala SET ?", [requisicaoSala], function (err, res) {
        if(err) {
            retorno(err, null);
        }
        else {
            // Retorna Id do usuário inserido no banco
            retorno(null, res.insertId);
        }
    }); 

}


RequisicaoSala.listarTodos = function (retorno) {

    // Comando SQL SELECT
    dbConn.query("SELECT * FROM RequisicaoSala", function (err, res) {
        if(err) {
            console.log("Erro: ", err);
            retorno(null, err);
        }
        else{
            console.log('RequisicaoSala: ', res);  
            retorno(null, res);
        }
    });   

};

RequisicaoSala.listarPagina = function (limite, pagina, retorno) {

    // Obtem o offset para os objetos da página requisitada
    var offset = (pagina - 1) * limite;

    // Comando SQL SELECT
    dbConn.query("SELECT * FROM RequisicaoSala LIMIT ? OFFSET ? ", [limite, offset], function (err, res) {
        if(err) {
            console.log("Erro: ", err);
            retorno(err, null);
        }
        else{
            console.log('RequisicaoSala: ', res);  
            retorno(null, res);
        }
    });   

};

RequisicaoSala.listarAssociacaoReq = function(id, retorno) {
    dbConn.query("SELECT * FROM RequisicaoSala WHERE RequisicaoId = ? ", [id], function (err, res) {             
        if(err) {
            console.log("Erro: ", err);
            retorno(err, null);
        }
        else{
            retorno(null, res);
        }
    });
}

RequisicaoSala.listarId = function (id, retorno) {

    // Comando SQL SELECT
    dbConn.query("SELECT * FROM RequisicaoSala WHERE RequisicaoSalaId = ? ", [id], function (err, res) {             
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

RequisicaoSala.excluirId = function(id, retorno) {

    // Comando SQL DELETE
    dbConn.query("DELETE FROM RequisicaoSala WHERE RequisicaoSalaId = ?", [id], function (err, res) {
        if(err) {
            console.log("Erro: ", err);
            retorno(null, err);
        }
        else{
            retorno(null, res);
        }
    }); 

};

RequisicaoSala.excluirTodos = function(retorno) {

    // Comando SQL DELETE
    dbConn.query("DELETE FROM RequisicaoSala", function (err, res) {
        if(err) {
            console.log("Erro: ", err);
            retorno(null, err);
        }
        else{
            retorno(null, res);
        }
    }); 

};

module.exports = RequisicaoSala;