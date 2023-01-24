import { gql } from '@apollo/client';





export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
     email
    }
  }
`;

export const QUERY_TOOL= gql`
{
   tools {
   
      _id
      toolName
      description
      value
    }
  }
`;


