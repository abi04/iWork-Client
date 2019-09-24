import React from 'react';
import { Query, useMutation, Mutation } from 'react-apollo';
import TaskNameAndTimeStamp from './TaskNameAndTimeStamp';
import { INCOMPLETE_POSTS_QUERY } from './Queries';
import ReviewerList from './ReviewerList';
import Options from './Options';
import './incomplete.css';
import { COMPLETE_POST } from './Mutation';

class IncompleteRequest extends React.PureComponent {
  // TODO: Add logic for no incomplete request

  isReviewCompleted = element => {
    return element.isReviewComplete;
  };

  hasPostReviewsCompleted = reviewers => {
    return reviewers.every(this.isReviewCompleted);
  };

  render() {
    return (
      <Query query={INCOMPLETE_POSTS_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching...</div>;
          if (error) return <div>Some went wrong on ourside. Please try later</div>;

          const getAllIncompletePostsForUser = data.getIncompletePostsForUser;

          return getAllIncompletePostsForUser.map((incompletePost, index) => {
            const { id, question, createdAt, reviewers, likes, comments } = incompletePost;

            return (
              <div className="box" key={id}>
                <div className="level columns">
                  <div className="level-left column">
                    <TaskNameAndTimeStamp question={question} createdAt={createdAt} />
                  </div>
                  <Mutation
                    mutation={COMPLETE_POST}
                    variables={{ postId: id }}
                    refetchQueries={() => [{ query: INCOMPLETE_POSTS_QUERY }]}
                  >
                    {completePost => {
                      return (
                        <div className="level-right column  is-narrow">
                          <ReviewerList
                            reviewers={reviewers}
                            isCompletedPost={this.hasPostReviewsCompleted(reviewers)}
                            completePostMutation={completePost}
                          />
                        </div>
                      );
                    }}
                  </Mutation>
                </div>

                <div className="level">
                  <div className="level-left">
                    <Options likes={likes} comments={comments} />
                  </div>
                </div>
              </div>
            );
          });
        }}
      </Query>
    );
  }
}

export default IncompleteRequest;
