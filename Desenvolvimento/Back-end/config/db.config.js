'use strict';

const mysql = require('mysql2');

// Conexão ao banco (Deivyd)
/*const dbConn = mysql.createPool({
  host: 'remotemysql.com',
  user: 'mfIMHFYIWD',
  password: 'Efvdg0nU2D',
  database: 'mfIMHFYIWD',
  //port: 3122,
  waitForConnections: true,
  connectionLimit: 5,
  queueLimit: 0
});*/

// Conexão ao banco (Kelly)
const dbConn = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'gerenciamentorequisicao',
  //port: 3122,
  waitForConnections: true,
  connectionLimit: 5,
  queueLimit: 0
});

module.exports = dbConn;