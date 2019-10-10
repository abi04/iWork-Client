import React from 'react';
import { Query, withApollo } from 'react-apollo';
import { GET_RECIPIENT_LIST, GET_USER_FRAGMENT } from './Queries';

class JoinRecipientList extends React.PureComponent {
  render() {
    const { client } = this.props;
    return (
      <div>
        <Query query={GET_RECIPIENT_LIST}>
          {({ loading, error, data }) => {
            if (loading) return <div>Add Recipient</div>;
            if (error) return <div>Some went wrong on ourside. Please try later</div>;

            const { recipientList } = data;

            if (!recipientList || !recipientList.length) return <p>Add Recipient</p>;
            if (recipientList && recipientList.length) {
              const listoFSelectedRecipients = recipientList.map(recipient => {
                const user = client.readFragment({
                  id: `User:${recipient}`,
                  fragment: GET_USER_FRAGMENT
                });

                return `${user.firstName}   ${user.lastName}`;
              });

              return listoFSelectedRecipients.join(', ');
            }
            return <>Error</>;
          }}
        </Query>
      </div>
    );
  }
}

export default withApollo(JoinRecipientList);
