import gql from 'graphql-tag';

// eslint-disable-next-line import/prefer-default-export
export const GET_ALL_USERS = gql`
  query getALLUser {
    getAllUsers {
      id
      firstName
      lastName
      isInRecipientList @client
    }
  }
`;

export const GET_ALL_USERS_BY_SEARCH_STRING = gql`
  query getUsersBySearchString($search: String!) {
    getUsersBySearchString(search: $search) {
      id
      firstName
      lastName
      isInRecipientList @client
    }
  }
`;

export const GET_RECIPIENT_LIST = gql`
  query getRecipientList {
    recipientList @client
  }
`;

export const GET_CACHE_DATA = gql`
  query getCacheData {
    question @client
    recipientList @client
  }
`;

export const GET_USER_FRAGMENT = gql`
  fragment user on User {
    id
    firstName
    lastName
    isInRecipientList
  }
`;
