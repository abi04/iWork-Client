import gql from 'graphql-tag';

// eslint-disable-next-line import/prefer-default-export
export const REVIEW_NOTIFICATION = gql`
  mutation REVIEW_NOTICATION($reviewStatusId: ID!, $reviewFlag: Boolean!) {
    reviewNotification(reviewStatusId: $reviewStatusId, reviewFlag: $reviewFlag) {
      id
      isApproved
      isReviewComplete
    }
  }
`;
