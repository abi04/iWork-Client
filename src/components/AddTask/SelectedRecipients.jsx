import React from 'react';
import { withApollo, Mutation } from 'react-apollo';
import { GET_USER_FRAGMENT, GET_ALL_USERS } from './Queries';
import { TOGGLE_RECIPIENT_LIST } from './Mutations';

class SelectedRecipients extends React.PureComponent {
  render() {
    const { recipientList, client } = this.props;
    return recipientList.map(recipient => {
      const user = client.readFragment({
        id: `User:${recipient}`,
        fragment: GET_USER_FRAGMENT
      });

      if (user) {
        return (
          <div key={user.id} className="control">
            <Mutation
              mutation={TOGGLE_RECIPIENT_LIST}
              variables={{ userID: user.id }}
              refetchQueries={[{ query: GET_ALL_USERS }]}
            >
              {toggleRecipientListMutation => {
                return (
                  <div className="tags has-addons">
                    <span className="tag is-info">
                      {user.firstName}
                      {user.lastName}
                    </span>
                    <span className="tag is-delete" onClick={toggleRecipientListMutation} />
                  </div>
                );
              }}
            </Mutation>
          </div>
        );
      }
      return (
        <div className="tags has-addons">
          <span className="tag is-info">Not available</span>
          <span className="tag is-delete" />
        </div>
      );
    });
  }
}

export default withApollo(SelectedRecipients);
