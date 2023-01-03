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
input CategoryInput{
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
        technician(tool: ID, name: String, value: Float): [Technician]
        
    }

  type Mutation {
      addUser(username: String!, email: String!, password: String!): Auth

        updateUser(firstName: String, lastName: String, email: String, password: String): User

        login(email: String!, password: String!): Auth

        addTool(name: String!, description: String!, value: Float!, category: [String]): User

        deleteTool(_id: ID): User

        updateTool(name: String, description: String, value: Float, category: CategoryInput): User

        addTechnician(firstName: String!, lastName: String!): User
       

        deleteTechnician(_id: ID): User

        updateTechnician(firstName: String, lastName: String): Technician

        addCategory(name: String): Category

  
        
        
  }
`;

module.exports = typeDefs;

