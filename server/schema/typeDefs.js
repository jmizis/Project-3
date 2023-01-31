const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    
    
  }


  type Tools {
    _id: ID
    toolName: String
    description: String
    value: String
  }
input toolsInput{
  toolName: String
  description: String
    value: String
}
  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    tools: [Tools]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth

    updateUser(username: String, email: String, password: String): User

    login(email: String!, password: String!): Auth

    addTool(toolData: toolsInput): Tools

    deleteTool(_id: ID): User

    updateTool(toolName: String!, description: String!, value: String!): User
  }
`;
// addTool(toolName: String!, description: String!, value: Float!): User
module.exports = typeDefs;
