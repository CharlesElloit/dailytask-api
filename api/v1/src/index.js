const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const app = express();
require("dotenv").config();
const appRoutes = require("./routes");
const DBConnection = require("./configs/config.db");

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let DBConnectionUri;

if (process.env.NODE_ENV === "development") {
  DBConnectionUri = process.env.LOCAL_MONGODB_URI;
} else {
  DBConnectionUri = process.env.MONGODB_URI;
}

DBConnection(DBConnectionUri);

app.use("/", appRoutes);

module.exports = app;
