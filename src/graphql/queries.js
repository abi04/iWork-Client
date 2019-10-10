import gql from 'graphql-tag';
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = gql`
  # query GetUser($username: String!) {
  query {
    getUser(username: "abhijit") {
      firstName
      lastName
      username
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
      asReviewer {
        items {
          id
          isApproved
          isReviewComplete
        }
        nextToken
      }
    }
  }
`;
export const listUsers = gql`
  query ListUsers(
    $username: String
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUsers(
      username: $username
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        firstName
        lastName
        username
        email
        profilePictureUrl
        posts {
          nextToken
        }
        asReviewer {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getReviewerStatus = gql`
  query GetReviewerStatus($id: ID!) {
    getReviewerStatus(id: $id) {
      id
      reviewer {
        firstName
        lastName
        username
        email
        profilePictureUrl
        posts {
          nextToken
        }
        asReviewer {
          nextToken
        }
      }
      isApproved
      isReviewComplete
      post {
        id
        question
        isComplete
        createdBy {
          firstName
          lastName
          username
          email
          profilePictureUrl
        }
        reviewers {
          nextToken
        }
        createdAt
      }
    }
  }
`;
export const listReviewerStatuss = gql`
  query ListReviewerStatuss(
    $filter: ModelReviewerStatusFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReviewerStatuss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        reviewer {
          firstName
          lastName
          username
          email
          profilePictureUrl
        }
        isApproved
        isReviewComplete
        post {
          id
          question
          isComplete
          createdAt
        }
      }
      nextToken
    }
  }
`;
export const getPost = gql`
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      question
      isComplete
      createdBy {
        firstName
        lastName
        username
        email
        profilePictureUrl
        posts {
          nextToken
        }
        asReviewer {
          nextToken
        }
      }
      reviewers {
        items {
          id
          isApproved
          isReviewComplete
        }
        nextToken
      }
      createdAt
    }
  }
`;
export const listPosts = gql`
  query ListPosts($filter: ModelPostFilterInput, $limit: Int, $nextToken: String) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        question
        isComplete
        createdBy {
          firstName
          lastName
          username
          email
          profilePictureUrl
        }
        reviewers {
          nextToken
        }
        createdAt
      }
      nextToken
    }
  }
`;
