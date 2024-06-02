// ./config/swagger.ts
import swaggerJsdoc from "swagger-jsdoc";
import { Options } from "swagger-jsdoc";

const options: Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Minha API de Pesquisa de Preços",
      version: "1.0.0",
      description: "API para comparar preços de produtos em diferentes lojas.",
    },
  },
  apis: ["./src/app/controller/*.ts"],
};

const specs = swaggerJsdoc(options);

export default specs;
