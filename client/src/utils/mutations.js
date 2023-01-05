import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;


export const ADD_TOOL = gql`
  mutation addTool($toolName: String!, $description: String!, $value: float!) {
    addTool(name: $toolName, description: $description, value: $value ) {
      name
      description
      value
    }
  }
`;

export const DELETE_TOOL = gql`
  mutation deleteTool($_id: ID) {
    deleteTool(_id: $_id) {
      _id
    }
  }
`;


// export const ADD_TECHNICIAN = gql`
//   mutation addTechnician($firstName: String!, $lastName: String!) {
//     addTechnician(firstname: $firstName, lastName: $lastName) {
//         _id
//         firstName
//         lastName
//         email
//         technician {
//           _id
//           firstName
//           lastName
      
//         }
//         tool{
//           _id
//           name
//           description
//           value
//           category
//           technician
//         }
     
      
      
//     }
//   }
// `;

// export const DELETE_TECHNICIAN = gql`
//   mutation deleteTechnician($_id: ID) {
//     deleteTechnician(_id: $_id) {
//         _id
//         firstName
//         lastName
//         email
//         technician {
//           _id
//           firstName
//           lastName
      
//         }
//         tool{
//           _id
//           name
//           description
//           value
//           category
//           technician
//         }
     
      
      
//     }
//   }
// `;






















