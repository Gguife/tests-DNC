import * as express from "express";
import ConnectDB from "./config/db";
import routes from "./routes/router";


const app = express();

app.use(express.json());
app.use(routes);

app.listen(8080, () => {
  console.log("Servidor iniciado com sucesso!")
})

ConnectDB();