import React from 'react';
import { Query } from 'react-apollo';
import { GET_ALL_USERS_BY_SEARCH_STRING } from './Queries';
import Recipient from './Recipient';

class RecipientList extends React.PureComponent {
  render() {
    const { search } = this.props;
    return (
      <div>
        <Query query={GET_ALL_USERS_BY_SEARCH_STRING} variables={{ search }}>
          {({ loading, error, data }) => {
            if (loading) return <div>Fetching...</div>;
            if (error) return <div>Some went wrong on ourside. Please try later</div>;

            const { getUsersBySearchString } = data;

            return getUsersBySearchString.map(user => {
              return <Recipient key={user.id} user={user} />;
            });
          }}
        </Query>
      </div>
    );
  }
}

export default RecipientList;
