import { gql } from '@apollo/client';

// set the match to returning the type from typeDefs

// What colums we want to show up
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
  query getTtool {
    tool {
      _id
      name
      description
      category
      technician

    }
  }
`;
