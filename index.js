const express = require("express");
const ConnectDB = require("./src/config/db.js");
const dotenv = require("dotenv");
const routes = require("./src/routes/router.js");
dotenv.config();

const app = express();

app.use(express.json());
app.use(routes);

app.listen(8080, () => {
  console.log("Servidor iniciado com sucesso!")
})

ConnectDB();