// app.ts
import express from "express";
import router from "./router/router";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.SERVER_PORT || 3001;

app.use(express.json());

app.use(router);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
