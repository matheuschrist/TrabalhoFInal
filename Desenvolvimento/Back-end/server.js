const http = require('http');
const app = require('./app')
const server = http.createServer(app);
const cors = require('cors')

app.use(cors())

// Importar arquivo .sql ao banco (executar só uma vez)
//const db = require('./config/db.import');
//console.log('Aguarde... Importando arquivo SQL ao banco.');

// Setup da porta do servidor
const port = process.env.PORT || 3080;

server.listen(port, () => {

  console.log(`Servidor sendo executado na porta ${port}`);
  
});