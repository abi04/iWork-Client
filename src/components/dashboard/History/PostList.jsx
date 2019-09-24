import React from 'react';
import { Query } from 'react-apollo';
import { GET_HISTORY } from './Queries';
import TaskNameAndTimeStamp from '../Incomplete/TaskNameAndTimeStamp';
import ReviewerList from '../Incomplete/ReviewerList';

class PostList extends React.PureComponent {
  render() {
    const { searchString } = this.props;
    return (
      <div>
        <Query query={GET_HISTORY} variables={{ searchString }}>
          {({ loading, error, data }) => {
            if (loading) return <div>Fetching...</div>;
            if (error) return <div>Some went wrong on ourside. Please try later</div>;

            const { getPostsHistory } = data;

            if (getPostsHistory.length < 1) {
              return (
                <div className="container">
                  <div className="notification">
                    Either update the search or create a post to fetch history
                  </div>
                </div>
              );
            }

            const sortPostByLatestCreateDate = getPostsHistory.sort((post1, post2) => {
              return new Date(post2.createdAt) - new Date(post1.createdAt);
            });

            return sortPostByLatestCreateDate.map(completedPost => {
              const {
                id,
                question,
                createdAt,
                reviewers,
                createdBy: { firstName, lastName }
              } = completedPost;

              return (
                <div className="box" key={id}>
                  <div className="level columns">
                    <div className="level-left column">
                      <TaskNameAndTimeStamp question={question} createdAt={createdAt} />
                      <div className="media is-clipped">
                        <div className="media-content">
                          <p className="is-size-7">
                            createdBy:
                            {firstName}
                            {lastName}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="level-right column  is-narrow">
                      <ReviewerList reviewers={reviewers} />
                    </div>
                  </div>
                </div>
              );
            });
          }}
        </Query>
      </div>
    );
  }
}

export default PostList;
