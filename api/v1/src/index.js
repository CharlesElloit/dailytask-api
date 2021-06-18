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

const PORT = process.env.PORT || 4000;

DBConnection(process.env.DBCONNECTION);

app.use("/", appRoutes);

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
})