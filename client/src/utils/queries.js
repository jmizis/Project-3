import { gql } from '@apollo/client';

// set the match to returning the type from typeDefs


// What colums we want to show up
// need add more
export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
     email
    }
  }
`;

export const QUERY_TOOL= gql`
  query getTool {
    tool {
      _id
      toolName
      description
      value
    }
  }
`;
// What columns do we want to show up

