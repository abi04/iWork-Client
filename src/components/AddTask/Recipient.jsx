import React from 'react';
import { Mutation, withApollo } from 'react-apollo';
import { TOGGLE_RECIPIENT_LIST } from './Mutations';
import { GET_ALL_USERS } from './Queries';

class Recipient extends React.PureComponent {
  render() {
    const {
      user: { firstName, lastName, id, isInRecipientList }
    } = this.props;

    return (
      <Mutation
        mutation={TOGGLE_RECIPIENT_LIST}
        variables={{ userID: id }}
        refetchQueries={[{ query: GET_ALL_USERS }]}
      >
        {toggleRecipientListMutation => {
          return (
            <div className="level">
              <div className="level-left" key={id}>
                {firstName}
                {lastName}
              </div>
              <div className="level-right">
                <label className="checkbox">
                  <input
                    type="checkbox"
                    onChange={toggleRecipientListMutation}
                    checked={isInRecipientList}
                  />
                </label>
              </div>
            </div>
          );
        }}
      </Mutation>
    );
  }
}

export default withApollo(Recipient);
