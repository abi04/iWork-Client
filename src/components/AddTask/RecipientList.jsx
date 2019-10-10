import React from 'react';
import { Query } from 'react-apollo';
import Recipient from './Recipient';
import { listUsers } from '../../graphql/queries';

class RecipientList extends React.PureComponent {
  render() {
    const { search } = this.props;
    return (
      <div>
        <Query
          query={listUsers}
          variables={
            search
              ? {
                  filter: {
                    or: [
                      { username: { contains: search } },
                      { firstName: { contains: search } },
                      { lastName: { contains: search } }
                    ]
                  }
                }
              : {}
          }
        >
          {({ loading, error, data }) => {
            if (loading) return <div>Fetching...</div>;
            if (error) return <div>Some went wrong on ourside. Please try later</div>;

            const {
              listUsers: { items }
            } = data;

            return items.map(user => {
              return <Recipient key={user.username} user={user} />;
            });
          }}
        </Query>
      </div>
    );
  }
}

export default RecipientList;
