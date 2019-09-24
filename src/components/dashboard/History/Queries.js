import gql from 'graphql-tag';

// eslint-disable-next-line import/prefer-default-export
export const COMPLETED_POSTS_QUERY = gql`
  query getCompletedPost {
    getCompletePostsForUser(userID: "cjz3hghu600b60763l85b3mv4") {
      id
      question
      createdAt
      isComplete
      reviewers {
        reviewer {
          id
          firstName
          lastName
        }
        isApproved
        isReviewComplete
      }
    }
  }
`;

export const GET_HISTORY = gql`
  query GET_HISTORY($searchString: String!) {
    getPostsHistory(userID: "cjz3hghu600b60763l85b3mv4", questionSearchString: $searchString) {
      id
      question
      createdAt
      isComplete
      createdBy {
        id
        firstName
        lastName
      }
      reviewers {
        reviewer {
          id
          firstName
          lastName
        }
        isApproved
        isReviewComplete
      }
    }
  }
`;
