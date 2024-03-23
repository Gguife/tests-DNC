const {Pool} = require("pg");


const ConnectDB = () =>{
  const pool = new Pool({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    port: process.env.PGPORT
  });
  
  pool.query('SELECT NOW()', (err, res) => {
    if (err) {
      console.error('Erro ao conectar ao banco de dados:', err);
    } else {
      console.log('Conexão bem-sucedida ao banco de dados. Última consulta executada em:', res.rows[0].now);
    }
    pool.end() 
  })
} 

module.exports = ConnectDB;