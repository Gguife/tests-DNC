const express = require("express");
const ConnectDB = require("./src/config/db.js");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.use(express.json());


app.listen(8080, () => {
  console.log("Servidor iniciado com sucesso!")
})

ConnectDB();