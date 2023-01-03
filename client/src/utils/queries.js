import { gql } from '@apollo/client';

// set the match to returning the type from typeDefs


// What colums we want to show up
// need add more
export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
     firstName
     lastName
     email
    
    }
  }
`;
  
export const QUERY_TECHNICIAN = gql`
  query getTechnician {
    technician {
      _id
      firstName
      lastName
    }
  }
`;

export const QUERY_TOOL= gql`
  query getTool {
    tool {
      _id
      name
      description
      technician

    }
  }
`;
// What columns do we want to show up

