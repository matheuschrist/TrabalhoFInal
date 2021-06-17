'use strict';

var dbConn = require('./../../config/db.config');

// Cria objeto Usuário
var Sala = function(sala) {

    this.numeroSala                 = sala.numeroSala;
    this.status                     = sala.status;
    this.quantidadeAluno            = sala.quantidadeAluno;
    this.quantidadeAlunoPandemia    = sala.quantidadeAlunoPandemia;

};

Sala.cadastrar = function (sala, retorno) {

    sala.status = 0
    // Comando SQL INSERT
    dbConn.query("INSERT INTO Sala SET ?", [sala], function (err, res) {
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

Sala.listarTodos = function (retorno) {

    // Comando SQL SELECT
    dbConn.query("SELECT * FROM Sala", function (err, res) {
        if(err) {
            console.log("Erro: ", err);
            retorno(null, err);
        }
        else{
            console.log('Sala: ', res);  
            retorno(null, res);
        }
    });   

};

Sala.listarPagina = function (limite, pagina, retorno) {

    // Obtem o offset para os objetos da página requisitada
    var offset = (pagina - 1) * limite;

    // Comando SQL SELECT
    dbConn.query("SELECT * FROM Sala LIMIT ? OFFSET ? ", [limite, offset], function (err, res) {
        if(err) {
            console.log("Erro: ", err);
            retorno(err, null);
        }
        else{
            console.log('Sala: ', res);  
            retorno(null, res);
        }
    });   

};

Sala.pesquisar = function (id, numeroSala, status, quantidadeAluno, quantidadeAlunoPandemia, retorno) {

    // Comando SQL SELECT
    dbConn.query("SELECT * FROM Sala WHERE SalaId = ? OR NumeroSala = ? OR Status = ? OR QuantidadeAluno = ? OR QuantidadeAlunoPandemia = ? ", 
                [id, numeroSala, status, quantidadeAluno, quantidadeAlunoPandemia], function (err, res) {             
        if(err) {
            console.log("Erro: ", err);
            retorno(err, null);
        }
        else{
            retorno(null, res);
        }
    }); 

};

Sala.listarId = function (id, retorno) {

    // Comando SQL SELECT
    dbConn.query("SELECT * FROM Sala WHERE SalaId = ? ", [id], function (err, res) {             
        if(err) {
            console.log("Erro: ", err);
            retorno(err, null);
        }
        else{
            retorno(null, res); 
        }
    }); 
};

Sala.atualizarSatus = function(id) {
    
    this.listarId(id, function(err, res)
    {
        if(err)
        {
            console.log(err)
        }
        else
        {
            switch(res[0].Status)
            {
                case 0:
                    res[0].Status = 1;
                    break;
                case 1:
                    res[0].Status = 2;
                    break;
                case 2:
                    res[0].Status = 0;
                    break 
            }
            
            dbConn.query("UPDATE Sala SET Status=? WHERE SalaId = ?", 
                            [res[0].Status, id], 
                            function (err, res) {
                if(err) {
                    console.log("Erro: ", err); 
                }else{
                    console.log(res)   
                }
            });
        }
    })
     
    
}

Sala.atualizar = function(id, sala, retorno) {

    if(sala.quantidadeAluno && sala.quantidadeAlunoPandemia)
    {
        // Comando SQL UPDATE
        dbConn.query("UPDATE Sala SET QuantidadeAluno=?, QuantidadeAlunoPandemia=? WHERE SalaId = ?", 
                        [sala.quantidadeAluno, sala.quantidadeAlunoPandemia, id], 
                        function (err, res) {
            if(err) {
                console.log("Erro: ", err);
                retorno(null, err);
            }else{   
                retorno(null, res);
            }
        });
    }
    else if(sala.quantidadeAluno)
    {
        dbConn.query("UPDATE Sala SET  QuantidadeAluno=? WHERE SalaId = ?", 
                        [sala.quantidadeAluno, id], 
                        function (err, res) {
            if(err) {
                console.log("Erro: ", err);
                retorno(null, err);
            }else{   
                retorno(null, res);
            }
        });
    }
    else if(sala.quantidadeAlunoPandemia)
    {
        dbConn.query("UPDATE Sala SET QuantidadeAlunoPandemia=? WHERE SalaId = ?", 
                        [sala.quantidadeAlunoPandemia, id], 
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

        dbConn.query("UPDATE Sala SET Status=? WHERE SalaId = ?", 
                        [sala.status, id], 
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

Sala.excluirId = function(retorno) {

    // Comando SQL DELETE
    dbConn.query("DELETE FROM Sala WHERE SalaId = ?", [id], function (err, res) {
        if(err) {
            console.log("Erro: ", err);
            retorno(null, err);
        }
        else{
            retorno(null, res);
        }
    }); 

};

Sala.excluirTodos = function(id, retorno) {

    // Comando SQL DELETE
    dbConn.query("DELETE FROM Sala", function (err, res) {
        if(err) {
            console.log("Erro: ", err);
            retorno(null, err);
        }
        else{
            retorno(null, res);
        }
    }); 

};

module.exports = Sala;