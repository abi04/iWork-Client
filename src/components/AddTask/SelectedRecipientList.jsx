import React from 'react';
import { Query } from 'react-apollo';
import { GET_RECIPIENT_LIST } from './Queries';

import SelectedRecipients from './SelectedRecipients';

class SelectedRecipientList extends React.PureComponent {
  render() {
    return (
      <div>
        <Query query={GET_RECIPIENT_LIST}>
          {({ loading, error, data }) => {
            if (loading) return <div>Fetching...</div>;
            if (error) return <div>Some went wrong on ourside. Please try later</div>;

            const { recipientList } = data;

            if (!recipientList || !recipientList.length) return <p>No items in your cart</p>;
            if (recipientList || recipientList.length) {
              return (
                <div className="field is-grouped is-grouped-multiline">
                  <SelectedRecipients recipientList={recipientList} />
                </div>
              );
            }

            return <>Not Available</>;
          }}
        </Query>
      </div>
    );
  }
}

export default SelectedRecipientList;
