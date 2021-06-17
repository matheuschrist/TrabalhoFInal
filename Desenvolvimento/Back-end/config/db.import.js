// Setup para importação do banco (Deivyd)
/*const host = 'remotemysql.com';
const user = 'mfIMHFYIWD';
const password = 'Efvdg0nU2D';
const database = 'mfIMHFYIWD';*/

// Setup para importação do banco (Kelly)
const host = 'localhost';
const user = 'root';
const password = '123456';
const database = 'gerenciamentorequisicao';

const Importer = require('mysql-import');
const importer = new Importer({host, user, password, database});

// Progresso da importação
importer.onProgress(progress=>{
  var percent = Math.floor(progress.bytes_processed / progress.total_bytes * 10000) / 100;
  console.log(`${percent}% concluído`);
});

// Caminho para o arquivo .sql
importer.import('config/database.sql').then(()=>{
  var files_imported = importer.getImported();
  console.log(`${files_imported.length} Arquivo(s) SQL importado.`);
}).catch(err=>{
  console.error(err);
});

module.exports= importer;