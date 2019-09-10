import React, { Component } from 'react';
import { Query } from 'react-apollo';
import Content from './Content';
import Options from './Options';
import Buttons from './Buttons';
import { NOTIFICATION_POSTS_QUERY } from '../Incomplete/Queries';

// eslint-disable-next-line react/prefer-stateless-function
class Notifications extends Component {
  render() {
    return (
      <Query query={NOTIFICATION_POSTS_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching...</div>;
          if (error) return <div>Some went wrong on ourside. Please try later</div>;

          const { getNotificationPostForUser } = data;

          return getNotificationPostForUser.map(notification => {
            const { post, isReviewComplete } = notification;
            return (
              !isReviewComplete && (
                <div className="box">
                  <div className="container">
                    <Content post={post} />
                  </div>

                  <div className="level">
                    <div className="level-left">
                      <Options />
                    </div>
                    <div className="level-right">
                      <Buttons />
                    </div>
                  </div>
                </div>
              )
            );
          });
        }}
      </Query>
    );
  }
}

export default Notifications;
