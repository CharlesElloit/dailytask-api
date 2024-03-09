const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "ITIMS",
  password: "test@123",
  port: 5432,
});

if (pool) {
  console.log("Connection to database is successfully.");
}

module.exports = pool;
