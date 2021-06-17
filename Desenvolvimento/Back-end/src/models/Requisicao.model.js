'use strict';

var dbConn = require('./../../config/db.config');
const DATE_FORMATER = require( 'dateformat' );


// Cria objeto Usuário
var Requisicao = function(requisicao) {

    this.tipo               = requisicao.tipo;
    this.status             = requisicao.status;
    this.turno              = requisicao.turno;
    this.dataUtilizacao     = requisicao.dataUtilizacao ? requisicao.dataUtilizacao : null;
    this.dataAbertura       = requisicao.dataAbertura;
    this.dataEntrega        = requisicao.dataEntrega ? requisicao.dataEntrega : null;
    this.dataCancelamento   = requisicao.dataCancelamento ? requisicao.dataCancelamento : null;
    this.dataConclusao      = requisicao.dataConclusao ? requisicao.dataConclusao : null;
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

    switch(requisicao.turno)
    {
        case "Integral":
            requisicao.turno = 0
            break;
        case "Matutino":
            requisicao.turno = 1
            break;
        case "Noturno":
            requisicao.turno = 2
            break;
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

Requisicao.listarPagina = function (limite, pagina, retorno) {

    // Obtem o offset para os objetos da página requisitada
    var offset = (pagina - 1) * limite;

    // Comando SQL SELECT
    dbConn.query("SELECT * FROM Requisicao LIMIT ? OFFSET ? ", [limite, offset], function (err, res) {
        if(err) {
            console.log("Erro: ", err);
            retorno(err, null);
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

Requisicao.pesquisar = function (id, tipo, status, turno, dataUtilizacao, dataAbertura, dataEntrega, dataCancelamento, dataConclusao, usuarioId, retorno) {

    // Comando SQL SELECT
    dbConn.query("SELECT * FROM Requisicao WHERE RequisicaoId = ? OR Tipo = ? OR Status = ? OR Turno = ? OR DataUtilizacao = ? OR DataAbertura = ? " +
                 "OR DataEntrega = ? OR DataCancelamento = ? OR DataConclusao = ? OR UsuarioId = ?", 
                [id, tipo, status, turno, dataUtilizacao, dataAbertura, dataEntrega, dataCancelamento, dataConclusao, usuarioId], function (err, res) {             
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

    if(requisicao.status === 1) // Confirmada
    {
        dbConn.query("UPDATE Requisicao SET Status=? WHERE RequisicaoId = ?", 
                    [requisicao.status, id], 
                    function (err, res) {
            if(err) {
                console.log("Erro: ", err);
                retorno(null, err);
            }else{   
                retorno(null, res);
            }
        });
    }
    if(requisicao.status === 2) // Em Uso
    {
        dbConn.query("UPDATE Requisicao SET Status=?, DataEntrega=? WHERE RequisicaoId = ?", 
                    [requisicao.status, requisicao.dataEntrega, id], 
                    function (err, res) {
            if(err) {
                console.log("Erro: ", err);
                retorno(null, err);
            }else{   
                retorno(null, res);
            }
        });
    }
    if(requisicao.status === 3) // Finalizada
    {
        dbConn.query("UPDATE Requisicao SET Status=?, DataConclusao=? WHERE RequisicaoId = ?", 
                    [requisicao.status, requisicao.dataConclusao, id], 
                    function (err, res) {
            if(err) {
                console.log("Erro: ", err);
                retorno(null, err);
            }else{   
                retorno(null, res);
            }
        });
    }
    if(requisicao.status === 4) // Cancelada
    {
        dbConn.query("UPDATE Requisicao SET Status=?, DataCancelamento=? WHERE RequisicaoId = ?", 
                    [requisicao.status, requisicao.dataCancelamento, id], 
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