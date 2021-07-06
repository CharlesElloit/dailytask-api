const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const swaggerUI = require("swagger-ui-express");
const swaggerJSDOC = require("swagger-jsdoc");

const app = express();
require("dotenv").config();
const appRoutes = require("./routes");
const swaggerOptions = require("../docs/swagger/swagger.options");
const DBConnection = require("./configs/config.db");

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

DBConnection(process.env.MONGODB_URI);

const swaggerSpecs = swaggerJSDOC(swaggerOptions);

app.use("/", appRoutes);
app.use("/dailytasks-api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpecs));

module.exports = app;
