/**
  This file is where we have batch or combine all the different
  typedefs files into one file.
*/

const { join } = require("path");
const { readdirSync, readFileSync } = require("fs");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const resolvers = require("./resolvers");

const typeDefsFiles = readdirSync(join(__dirname, "./typeDefs"));

let typeDefs = "";

typeDefsFiles.forEach((file) => {
  typeDefs += readFileSync(join(__dirname, "./typeDefs", file), {
    encoding: "utf8",
  });
});

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

module.exports = schema;
