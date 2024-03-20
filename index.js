const express = require("express");
const app = express();
const conectDB = require("./src/config/db.js");

const dotenv = require("dotenv");
dotenv.config();

app.use(express.json());

conectDB();

app.listen(8080, () => {
  console.log("Servidor iniciado com sucesso!")
})