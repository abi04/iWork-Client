/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
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
export const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
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
export const deleteUser = `mutation DeleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input) {
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
export const createReviewerStatus = `mutation CreateReviewerStatus($input: CreateReviewerStatusInput!) {
  createReviewerStatus(input: $input) {
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
export const updateReviewerStatus = `mutation UpdateReviewerStatus($input: UpdateReviewerStatusInput!) {
  updateReviewerStatus(input: $input) {
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
export const deleteReviewerStatus = `mutation DeleteReviewerStatus($input: DeleteReviewerStatusInput!) {
  deleteReviewerStatus(input: $input) {
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
export const createPost = `mutation CreatePost($input: CreatePostInput!) {
  createPost(input: $input) {
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
export const updatePost = `mutation UpdatePost($input: UpdatePostInput!) {
  updatePost(input: $input) {
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
export const deletePost = `mutation DeletePost($input: DeletePostInput!) {
  deletePost(input: $input) {
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
