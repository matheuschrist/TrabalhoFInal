const http = require('http');
const app = require('./app')
const server = http.createServer(app);

// Importar arquivo .sql ao banco (executar só uma vez)
//const db = require('./config/db.import');
//console.log('Aguarde... Importando arquivo SQL ao banco.');

// Setup da porta do servidor
const port = process.env.PORT || 3000;

server.listen(port, () => {

  console.log(`Servidor sendo executado na porta ${port}`);
  
});