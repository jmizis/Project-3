const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    tool: [Tools]
  }


  type Tools {
    _id: ID!
    toolName: String!
    description: String
    value: Float
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    tools(toolName: String, description: String, value: Float): [Tools]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth

    updateUser(username: String, email: String, password: String): User

    login(email: String!, password: String!): Auth

    addTool(toolName: String!, description: String!, value: Float!): User

    deleteTool(_id: ID): User

    updateTool(toolName: String!, description: String!, value: Float!): User
  }
`;

module.exports = typeDefs;
