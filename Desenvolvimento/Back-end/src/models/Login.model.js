'use strict';

var dbConn = require('./../../config/db.config');

// Cria objeto Login
var Login = function(login) {

    this.usuarioId = login.usuarioId;

};

Login.realizar = function (id, retorno) {

    // Comando SQL INSERT
    dbConn.query("INSERT INTO Login (UsuarioId) VALUES (?)", [id], function (err, res) {
        if(err) {
            console.log("Erro: ", err);
            retorno(err, null);
        }
        else {
            // Retorna Id do usuário inserido no banco
            console.log(res);
            retorno(null, res);
        }
    }); 

}

Login.recuperar = function (retorno) {

    // Comando SQL SELECT
    dbConn.query("SELECT * FROM Login", function (err, res) {             
        if(err) {
            console.log("Erro: ", err);
            retorno(err, null);
        }
        else{
            retorno(null, res);
        }
    }); 

};

Login.finalizar = function(retorno) {
    console.log('TESTE');
    // Comando SQL DELETE
    dbConn.query("DELETE FROM Login", function (err, res) {
        if(err) {
            console.log("Erro: ", err);
            retorno(err, null);
        }
        else{
            retorno(null, res);
        }
    }); 

};

module.exports = Login;