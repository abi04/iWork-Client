import React from 'react';
import { Mutation, Query } from 'react-apollo';
import { getUser } from '../../../graphql/queries';
import { currentUser } from '../../Auth/GetCurrentAuthenticatedUser';
import './incomplete.css';
import { COMPLETE_POST } from './Mutation';
import ReviewerList from './ReviewerList';
import TaskNameAndTimeStamp from './TaskNameAndTimeStamp';

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
      <Query query={getUser}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching...</div>;
          if (error) return <div>Some went wrong on ourside. Please try later</div>;

          const user = data.getUser;

          const {
            firstName,
            lastName,
            posts: { items }
          } = user;

          if (items.length < 1) {
            return (
              <div className="container">
                <div className="notification">Yayy, you are all caught up !!!!</div>
              </div>
            );
          }

          return items.map(incompletePost => {
            const {
              id,
              question,
              createdAt,
              reviewers: { items },
              isComplete
            } = incompletePost;
            if (!isComplete) {
              return (
                <div className="box" key={id}>
                  <div className="level columns">
                    <div className="level-left column">
                      <TaskNameAndTimeStamp question={question} createdAt={createdAt} />
                    </div>
                    <Mutation
                      mutation={COMPLETE_POST}
                      variables={{ postId: id }}
                      refetchQueries={() => [{ query: getUser }]}
                    >
                      {completePost => {
                        return (
                          <div className="level-right column  is-narrow">
                            <ReviewerList
                              reviewers={items}
                              isCompletedPost={this.hasPostReviewsCompleted(items)}
                              completePostMutation={completePost}
                            />
                          </div>
                        );
                      }}
                    </Mutation>
                  </div>
                </div>
              );
            }
          });
        }}
      </Query>
    );
  }
}

export default IncompleteRequest;
