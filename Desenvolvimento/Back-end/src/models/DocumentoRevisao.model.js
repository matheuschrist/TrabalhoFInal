'use strict';

var dbConn = require('./../../config/db.config');
const DATE_FORMATER = require( 'dateformat' );

// Cria objeto Usuário
var DocumentoRevisao = function(documentoRevisao) {

    this.descricaoProblema  = documentoRevisao.descricaoProblema;
    this.status             = documentoRevisao.status;
    this.dataAbertura       = documentoRevisao.dataAbertura;
    this.dataConclusao      = documentoRevisao.dataConclusao ? documentoRevisao.dataConclusao : null;
    this.defeito            = documentoRevisao.defeito;
    this.equipamentoId      = documentoRevisao.equipamentoId ? documentoRevisao.equipamentoId : null;
    this.salaId             = documentoRevisao.salaId ? documentoRevisao.salaId : null;
};

DocumentoRevisao.cadastrar = function (documentoRevisao, retorno) {
    var datetime = DATE_FORMATER( new Date(), "yyyy-mm-dd HH:MM:ss" );
    documentoRevisao.dataAbertura = datetime;
    documentoRevisao.status = 0;
    // Comando SQL INSERT
    dbConn.query("INSERT INTO DocumentoRevisao SET ?", [documentoRevisao], function (err, res) {
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

DocumentoRevisao.listarTodos = function (retorno) {

    // Comando SQL SELECT
    dbConn.query("SELECT * FROM DocumentoRevisao", function (err, res) {
        if(err) {
            console.log("Erro: ", err);
            retorno(null, err);
        }
        else{
            console.log('DocumentoRevisao: ', res);  
            retorno(null, res);
        }
    });   

};

DocumentoRevisao.listarPagina = function (limite, pagina, retorno) {

    // Obtem o offset para os objetos da página requisitada
    var offset = (pagina - 1) * limite;

    // Comando SQL SELECT
    dbConn.query("SELECT * FROM DocumentoRevisao LIMIT ? OFFSET ? ", [limite, offset], function (err, res) {
        if(err) {
            console.log("Erro: ", err);
            retorno(err, null);
        }
        else{
            console.log('DocumentoRevisao: ', res);  
            retorno(null, res);
        }
    });   

}; 

DocumentoRevisao.listarId = function (id, retorno) {

    // Comando SQL SELECT
    dbConn.query("SELECT * FROM DocumentoRevisao WHERE DocumentoRevisaoId = ? ", [id], function (err, res) {             
        if(err) {
            console.log("Erro: ", err);
            retorno(err, null);
        }
        else{
            retorno(null, res);
        }
    }); 

};

DocumentoRevisao.pesquisar = function (id, descricaoProblema, status, dataAbertura, dataConclusao, defeito, equipamentoId, salaId, retorno) {

    // Prepara a string
    descricaoProblema = ('%' + descricaoProblema + '%');

    // Comando SQL SELECT
    dbConn.query("SELECT * FROM DocumentoRevisao WHERE DocumentoRevisaoId = ? OR DescricaoProblema LIKE ? OR Status = ? OR DataAbertura = ? "
                + "OR DataConclusao = ? OR Defeito = ? OR EquipamentoId = ? OR SalaId = ? ", 
                [id, descricaoProblema, status, dataAbertura, dataConclusao, defeito, equipamentoId, salaId], function (err, res) {             
        if(err) {
            console.log("Erro: ", err);
            retorno(err, null);
        }
        else{
            retorno(null, res);
        }
    }); 

};

DocumentoRevisao.atualizar = function(id, documentoRevisao, retorno) {

    // Comando SQL UPDATE
    dbConn.query("UPDATE DocumentoRevisao SET Satus=?, DataConclusao=? WHERE DocumentoRevisaoId = ?", 
                    [documentoRevisao.status, documentoRevisao.dataConclusao, id], 
                    function (err, res) {
        if(err) {
            console.log("Erro: ", err);
            retorno(null, err);
        }else{   
            retorno(null, res);
        }
    }); 

};

DocumentoRevisao.excluirId = function(id, retorno) {

    // Comando SQL DELETE
    dbConn.query("DELETE FROM DocumentoRevisao WHERE DocumentoRevisaoId = ?", [id], function (err, res) {
        if(err) {
            console.log("Erro: ", err);
            retorno(null, err);
        }
        else{
            retorno(null, res);
        }
    }); 

};

DocumentoRevisao.excluirTodos = function(retorno) {

    // Comando SQL DELETE
    dbConn.query("DELETE FROM DocumentoRevisao", function (err, res) {
        if(err) {
            console.log("Erro: ", err);
            retorno(null, err);
        }
        else{
            retorno(null, res);
        }
    }); 

};



module.exports = DocumentoRevisao;