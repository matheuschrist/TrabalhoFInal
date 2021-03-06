'use strict';

const DATE_FORMATER = require( 'dateformat' );


var dbConn = require('./../../config/db.config');

// Cria objeto Equipamento
var Equipamento = function(equipamento) {

    this.patrimonio         = equipamento.patrimonio;
    this.status             = equipamento.status;
    this.dataCadastro       = equipamento.dataCadastro;
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

Equipamento.listarPagina = function (limite, pagina, retorno) {

    // Obtem o offset para os objetos da página requisitada
    var offset = (pagina - 1) * limite;

    // Comando SQL SELECT
    dbConn.query("SELECT * FROM Equipamento LIMIT ? OFFSET ? ", [limite, offset], function (err, res) {
        if(err) {
            console.log("Erro: ", err);
            retorno(err, null);
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

Equipamento.pesquisar = function (id, patrimonio, status, dataCadastro, tipoEquipamentoId, salaId, retorno) {

    // Prepara a string
    patrimonio = ('%' + patrimonio + '%');
    dataCadastro = ('%' + dataCadastro + '%');

    // Comando SQL SELECT
    dbConn.query("SELECT * FROM Equipamento WHERE EquipamentoId = ? OR Patrimonio LIKE ? OR Status = ? OR dataCadastro LIKE ? OR TipoEquipamentoId = ? OR SalaId = ? ", 
                [id, patrimonio, status, dataCadastro, tipoEquipamentoId, salaId], function (err, res) {             
        if(err) {
            console.log("Erro: ", err);
            retorno(err, null);
        }
        else{
            retorno(null, res);
        }
    }); 

};

Equipamento.atualizarStatus = function (id, retorno) {
    this.listarId(id, function(err, res) {
        if(err)
        {
            console.log(err)
        }
        else
        {

            switch(res[0].status)
            {
                case 0:
                    res[0].status = 1;
                    break
                case 1:
                    res[0].status = 0;
                    break
                default:
                    break
            }

            dbConn.query("UPDATE Equipamento SET Status=? WHERE EquipamentoId = ?", 
                    [res[0].status, id], 
                    function (err, res) {
                if(err) {
                    console.log("Erro: ", err);
                    retorno(null, err);
                }else{   
                    retorno(null, res);
                }
            });
        }
    })

    
}

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
        // Comando SQL UPDATE
        dbConn.query("UPDATE Equipamento SET Stauts=? WHERE EquipamentoId = ?", 
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