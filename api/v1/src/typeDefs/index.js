const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    sayHello: String
  }
  
  type Mutation {}
`;

module.exports = typeDefs;
