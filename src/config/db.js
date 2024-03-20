const {Pool} = require("pg");
const dotenv = require("dotenv");
dotenv.config();

const ConnectDB = async () =>{
  try{
    const pool = new Pool({
      user: process.env.PGUSER,
      host: 'postgres-container',
      password: process.env.PGPASSWORD,
      database: process.env.PGDATABASE,
      port: process.env.PGPORT
    })

    await pool.connect();
    console.log('Conexão com o banco de dados estabelecida com sucesso!');
    
    await pool.end();
  }catch(error){
    console.error('Erro ao conectar ao banco de dados:', error.message);
  }
}

module.exports = ConnectDB;