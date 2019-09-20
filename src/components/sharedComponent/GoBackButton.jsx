import React from 'react';
import { withRouter } from 'react-router-dom';
import { withApollo } from 'react-apollo';

class GoBackButton extends React.PureComponent {
  clearCacheAndGoBack = () => {
    const { history, client } = this.props;
    client.resetStore();
    history.goBack();
  };

  render() {
    return (
      <div>
        <i className="fas fa-backward" />
        <span onClick={this.clearCacheAndGoBack}>Go back</span>
      </div>
    );
  }
}

export default withApollo(withRouter(GoBackButton));
