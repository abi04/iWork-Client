import React, { Component } from 'react';
import { Query } from 'react-apollo';
import TaskNameAndTimeStamp from './TaskNameAndTimeStamp';
import { INCOMPLETE_POSTS_QUERY } from './Queries';
import ReviewerList from './ReviewerList';
import Options from './Options';
import './incomplete.css';

// eslint-disable-next-line react/prefer-stateless-function
class IncompleteRequest extends Component {
  // TODO: Add logic for no incomplete request
  render() {
    return (
      <Query query={INCOMPLETE_POSTS_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching...</div>;
          if (error) return <div>Some went wrong on ourside. Please try later</div>;

          const getAllIncompletePostsForUser = data.getIncompletePostsForUser;

          return getAllIncompletePostsForUser.map(incompletePost => {
            const { id, question, createdAt, reviewers, likes, comments } = incompletePost;
            return (
              <div className="box" key={id}>
                <div className="level columns">
                  <div className="level-left column">
                    <TaskNameAndTimeStamp question={question} createdAt={createdAt} />
                  </div>
                  <div className="level-right column  is-narrow">
                    <ReviewerList reviewers={reviewers} />
                  </div>
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
