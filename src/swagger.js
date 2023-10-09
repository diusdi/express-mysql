const swaggerJSDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Express Mysql API",
      version: "1.0.0",
      description: "---",
    },
  },
  apis: ["./routes/*.js"], // Ganti dengan jalur file API Anda yang sebenarnya
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
