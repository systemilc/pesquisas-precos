// config/swagger.js
const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Minha API de Pesquisa de Preços",
      version: "1.0.0",
      description: "API para comparar preços de produtos em diferentes lojas.",
    },
  },
  apis: ["./src/app/controller/*.ts"], // Caminho para os controladores da API
};

const specs = swaggerJsdoc(options);

module.exports = specs;
