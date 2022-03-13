const express = require("express");
const cors = require("cors");
require("dotenv-safe").config();
const { graphqlHTTP } = require("express-graphql");

const expressPlayground = require("graphql-playground-middleware-express").default;
const { db } = require("../config/database.config");
const schema = require("./schema");

(async () => {
  const app = express();

  // middlewares
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // graphiql playground
  app.use(
    "/v2/graphql",
    graphqlHTTP({
      schema,
      graphiql: {
        headerEditorEnabled: true,
      },
    }),
  );

  // connecting to db
  db.connect(process.env.MONGODB_URI);

  // Second Graphql Playground route: i like this one more.
  app.get("/v2/playground", expressPlayground({ endpoint: "/graphql" }));

  const PORT = process.env.PORT || 8000;

  app.listen(PORT, () => console.log("Server is running....."));
})();
