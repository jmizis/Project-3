const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Category {
        _id: ID!
        name: String
    }

  type Tools {
        _id: ID!
        name: String!
        description: String
        value: Float
        category: Category
        technician: Technician
    }

  type Technician {
        _id: ID!
        firstName: String
        lastName: String
    }

  type User {
        _id: ID!
        firstName: String
        lastName: String
        email: String
        password: String
    }

 type Auth {
        token: ID!
        user: User
        password: String
    }

  type Query {
        categories: [Category]
        tools(category: ID, name: String): [Tools]
        technician(tool: ID, name: String, value: float) [Technician]
        user: User
    }
// the tool and technician are flipped? 
  type Mutation {
      addUser(username: String!, email: String!, password: String!): Auth

        updateUser(firstName: String, lastName: String, email: String, password: String): User

        login(email: String!, password: String!): Auth

        addTool(name: String!, description: String!, value: float!, category: [Category]): Tools

        deleteTool

        updateTool(name: String, description: String, value: float, category: [Category]): Tools

        addTechnician(firstName: String!, lastName: String!): Technician

        deleteTechnician

        updateTechnician(firstName: String, lastName: String): Technician

        addCategory(name: String): Category

        deleteCategory
        
        
  }
`;

module.exports = typeDefs;

