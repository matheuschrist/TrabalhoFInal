const mysql = require('mysql');

var poll = mysql.createPool({
    "host": "localhost",
    "user" : "root",
    "password": "123456",
    "database": "GerenciamentoEquipamento",
    "port": 3306,
})

exports.poll = poll;