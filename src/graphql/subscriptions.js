/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = `subscription OnCreateUser {
  onCreateUser {
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
export const onUpdateUser = `subscription OnUpdateUser {
  onUpdateUser {
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
export const onDeleteUser = `subscription OnDeleteUser {
  onDeleteUser {
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
export const onCreateReviewerStatus = `subscription OnCreateReviewerStatus {
  onCreateReviewerStatus {
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
export const onUpdateReviewerStatus = `subscription OnUpdateReviewerStatus {
  onUpdateReviewerStatus {
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
export const onDeleteReviewerStatus = `subscription OnDeleteReviewerStatus {
  onDeleteReviewerStatus {
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
export const onCreatePost = `subscription OnCreatePost {
  onCreatePost {
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
export const onUpdatePost = `subscription OnUpdatePost {
  onUpdatePost {
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
export const onDeletePost = `subscription OnDeletePost {
  onDeletePost {
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
