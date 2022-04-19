const { SERVER_PORT, OPENAPI_FILE } = require('./lib/config.js');
const cors = require('cors');
const express = require('express');
const http = require('http');
const logger = require('./lib/logger.js');
const OpenApiValidator = require('express-openapi-validator');
const mountEndpoints = require('./lib/mount-endpoints.js');

async function main() {
  let app = await buildApp();
  let server = http.createServer(app)
  server.listen(SERVER_PORT);
}

async function buildApp() {
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(
    OpenApiValidator.middleware({
      apiSpec: OPENAPI_FILE,
      validateRequests: true,
      validateResponses: false,
    }),
  );

  mountEndpoints(app);

  app.use((err, req, res, next) => {
    console.log("WE ARE HERE");
    if (res.headersSent) {
      return next(err);
    }
    logger.error(__filename, err);
    res.status(err.status || 500).json({
      message: err.message,
      errors: err.errors,
    });
  });

  return app;
}


main();
