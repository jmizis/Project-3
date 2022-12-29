const { gql } = require('apollo-server-express');

const typeDefs = gql`

type User {
  _id: ID!
  firstName: String
  lastName: String
  email: String
  password: String
  technician: [Technician]
  tool: [Tools]
}

type Technician {
  _id: ID!
  firstName: String
  lastName: String
}


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

  

 

 type Auth {
        token: ID!
        user: User
        password: String
    }

  type Query {

     users: [User]
      user(username: String!): User
        categories: [Category]
        tools(category: ID, name: String): [Tools]
        technician(tool: ID, name: String, value: float) [Technician]
        
    }
// the tool and technician are flipped? 
  type Mutation {
      addUser(username: String!, email: String!, password: String!): Auth

        updateUser(firstName: String, lastName: String, email: String, password: String): User

        login(email: String!, password: String!): Auth

        addTool(name: String!, description: String!, value: float!, category: [String]): User

        deleteTool(_id: ID): User

        updateTool(name: String, description: String, value: float, category: [Category]): User

        addTechnician(firstName: String!, lastName: String!): User
        // updating the User and its returning the user with updated tech

        deleteTechnician(_id: ID): User

        updateTechnician(firstName: String, lastName: String): Technician

        addCategory(name: String): Category

        deleteCategory
        
        
  }
`;

module.exports = typeDefs;

