/* eslint-disable */
// this is an auto generated file. This will be overwritten
const gql = require('graphql-tag');

exports.createUser = gql`
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      firstName
      lastName
      email
      profilePictureUrl
      posts {
        items {
          id
          question
          isComplete
          createdAt
        }
        nextToken
      }
    }
  }
`;
