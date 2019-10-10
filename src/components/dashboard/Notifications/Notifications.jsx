import React from 'react';
import { Query } from 'react-apollo';
import Content from './Content';
import Options from './Options';
import Buttons from './Buttons';
import { getUser } from '../../../graphql/queries';

class Notifications extends React.PureComponent {
  render() {
    return (
      <Query query={getUser}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching...</div>;
          if (error) return <div>Some went wrong on ourside. Please try later</div>;

          const {
            asReviewer: { items: notificationsForUser }
          } = data.getUser;

          if (notificationsForUser.length < 1) {
            return (
              <div className="container">
                <div className="notification">Yayy, you are all caught up !!!!</div>
              </div>
            );
          }

          return notificationsForUser.map(notification => {
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
