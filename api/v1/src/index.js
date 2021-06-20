"use strict"

const express = require("express");
const helmet = require("helmet");
const cors = require("cors")
const app = express();
require("dotenv").config();
const appRoutes = require("./routes")
const DBConnection = require("./configs/db-cofig");

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

DBConnection(process.env.MONGODB_URI);

app.use("/", appRoutes);

module.exports = app;