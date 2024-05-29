// app.ts
import express from "express";
import router from "./router/router";
//import router from "./src/app/router/router"; // Importe o arquivo de rotas

const app = express();
const port = process.env.PORT || 3000;

// Middleware para processar JSON
app.use(express.json());

// Rota inicial
app.get("/", (req, res) => {
  res.send("Bem-vindo à API de Pesquisa de Preços!");
});

// Use as rotas definidas no arquivo de rotas
app.use(router);

// Inicie o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
