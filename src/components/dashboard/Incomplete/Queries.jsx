import gql from 'graphql-tag';

// eslint-disable-next-line import/prefer-default-export
export const INCOMPLETE_POSTS_QUERY = gql`
  query getIncompletePostsForUser {
    getIncompletePostsForUser(userID: "cjz3hghu600b60763l85b3mv4") {
      id
      question
      createdAt
      createdBy {
        firstName
        lastName
      }
      reviewers {
        isApproved
        isReviewComplete
        reviewer {
          firstName
          lastName
        }
      }
      comments {
        comment
        createdAt
        createdBy {
          firstName
        }
      }
      likes {
        like
      }
    }
  }
`;

export const NOTIFICATION_POSTS_QUERY = gql`
  query getNotificationPostForUser {
    getNotificationPostForUser(userID: "cjz3hjqlh00bf076394am4t4h") {
      id
      isReviewComplete
      post {
        id
        question
        createdAt
        createdBy {
          firstName
          lastName
        }
      }
    }
  }
`;
