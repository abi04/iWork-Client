import React from 'react';
import { Query } from 'react-apollo';
import Content from './Content';
import Options from './Options';
import Buttons from './Buttons';
import { NOTIFICATION_POSTS_QUERY } from '../Incomplete/Queries';

class Notifications extends React.PureComponent {
  render() {
    return (
      <Query query={NOTIFICATION_POSTS_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching...</div>;
          if (error) return <div>Some went wrong on ourside. Please try later</div>;

          const { getNotificationPostForUser } = data;

          if (getNotificationPostForUser.length < 1) {
            return (
              <div className="container">
                <div className="notification">Yayy, you are all caught up !!!!</div>
              </div>
            );
          }

          return getNotificationPostForUser.map(notification => {
            const { post, isReviewComplete, id: reviewStatusId } = notification;
            return (
              !isReviewComplete && (
                <div className="box" key={post.id}>
                  <div className="container">
                    <Content post={post} />
                  </div>

                  <div className="level">
                    <div className="level-left">
                      <Options />
                    </div>
                    <div className="level-right">
                      <Buttons reviewStatusId={reviewStatusId} />
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
