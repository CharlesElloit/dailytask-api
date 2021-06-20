"use strict"

const http = require("http");
const app = require("./api/v1/src");

const server = http.createServer(app);
const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
})