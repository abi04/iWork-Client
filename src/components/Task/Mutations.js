import gql from 'graphql-tag';

// eslint-disable-next-line import/prefer-default-export
export const TOGGLE_RECIPIENT_LIST = gql`
  mutation addOrRemoveFromRecipientList($userID: ID!) {
    addOrRemoveFromRecipientList(id: $userID) @client
  }
`;
