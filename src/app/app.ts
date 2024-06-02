// ./src/app/app.ts
import express from "express";
import router from "./router/router";
import dotenv from "dotenv";
import swaggerUi from "swagger-ui-express";
import swaggerSpecs from "../config/swagger";
dotenv.config();

const app = express();
const port = process.env.SERVER_PORT || 3001;

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

app.use(router);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
  console.log(`Documentação disponível em http://localhost:${port}/api-docs`);
});
