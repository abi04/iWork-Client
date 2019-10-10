import React from 'react';
import { Mutation } from 'react-apollo';
import { REVIEW_NOTIFICATION } from './Mutation';
import { NOTIFICATION_POSTS_QUERY } from '../Incomplete/Queries.js';

class Buttons extends React.PureComponent {
  render() {
    const { reviewStatusId } = this.props;
    return (
      <div className="buttons">
        <Mutation
          mutation={REVIEW_NOTIFICATION}
          variables={{ reviewStatusId, reviewFlag: true }}
          refetchQueries={() => [{ query: NOTIFICATION_POSTS_QUERY }]}
        >
          {reviewNotification => {
            return (
              <button
                type="button"
                className="button is-info is-rounded"
                onClick={reviewNotification}
              >
                Accept
              </button>
            );
          }}
        </Mutation>
        <Mutation
          mutation={REVIEW_NOTIFICATION}
          variables={{ reviewStatusId, reviewFlag: false }}
          refetchQueries={() => [{ query: NOTIFICATION_POSTS_QUERY }]}
        >
          {reviewNotification => {
            return (
              <button type="button" className="button is-rounded" onClick={reviewNotification}>
                Reject
              </button>
            );
          }}
        </Mutation>
      </div>
    );
  }
}

export default Buttons;
