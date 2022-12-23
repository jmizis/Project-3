

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



export const ADD_CATEGORY = gql`
mutation addCategory($name: String!)
addCategory(name: $name){
    _id
}
`;


export const ADD_TOOL = gql`
  mutation addTool($name: String!) {
    addTool(name: $name) {
      _id
      name
      description
     value
      category {
        _id
        name
      }
    }
  }
`;


export const ADD_TECHNICIAN = gql`
  mutation addTechnician($firstName: String!, $lastName: String!) {
    addTechnician(firstname: $firstName, lastName: $lastName) {
      _id
      firstName
      lastName
     
      technician {
        _id
        firstName
        lastName
      }
    }
  }
`;






















