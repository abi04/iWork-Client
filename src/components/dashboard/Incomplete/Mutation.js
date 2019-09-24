import gql from 'graphql-tag';

// eslint-disable-next-line import/prefer-default-export
export const COMPLETE_POST = gql`
  mutation completePost($postId: ID!) {
    completePost(postId: $postId) {
      id
      isComplete
    }
  }
`;
