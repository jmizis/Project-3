import { gql } from '@apollo/client';
// remove block of large blank space




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


