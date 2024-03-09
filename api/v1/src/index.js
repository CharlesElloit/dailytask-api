const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const swaggerUI = require("swagger-ui-express");
const swaggerJSDOC = require("swagger-jsdoc");

require("dotenv").config();
const appRoutes = require("./routes");
const swaggerOptions = require("../docs/swagger/swagger.options");
// const { db } = require("../../config/database.config");

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connecting to db
// db.connect(process.env.MONGODB_URI);

const swaggerSpecs = swaggerJSDOC(swaggerOptions);

app.use("/", appRoutes);

app.use("/dailytasks-api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpecs));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});

module.exports = app;
