import swaggerJsdoc, { Options } from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options: Options = {
  swaggerDefinition: {
    openapi: "3.0.3",
    info: {
      title: "Test API",
      version: "1.0.0",
      description: "Test API with express",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["src/swagger/swagger.json"],
};

const specs = swaggerJsdoc(options);

export default {
  swaggerUi,
  specs,
};