const { gql } = require('apollo-server-express');

const typeDefs = gql`

type User {
  _id: ID!
  username: String!
  email: String!
  password: String!
  technician: [Technician]
  tool: [Tools]
}

type Technician {
  _id: ID!
  username: String
  tool: [Tools]
}

type Tools {
        _id: ID!
        name: String!
        description: String
        value: Float
        technician: Technician
    }

 type Auth {
        token: ID!
        user: User
        password: String
    }

  type Query {
     users: [User]
      user(username: String!): [User]
      tools(name: String, value: Float): [Tools]
      technician(tool: ID, name: String): [Technician]  
    }

  type Mutation {
      addUser(username: String!, email: String!, password: String!): Auth

      updateUser(username: String, email: String, password: String): User

      login(email: String!, password: String!): Auth

      addTool(name: String!, description: String!, value: Float!): User

      deleteTool(_id: ID): User

      updateTool(name: String, description: String, value: Float): User

      addTechnician(username: String, tools: []): User
      
      deleteTechnician(_id: ID): User
        
  }
`;

module.exports = typeDefs;

