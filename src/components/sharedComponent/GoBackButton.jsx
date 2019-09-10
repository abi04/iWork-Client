import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createBrowserHistory } from 'history';

// eslint-disable-next-line react/prefer-stateless-function
class GoBackButton extends Component {
  render() {
    const { history } = this.props;
    return (
      <div>
        <button
          className="button is-dark"
          type="button"
          onClick={() => {
            history.goBack();
          }}
        >
          Go back
        </button>
      </div>
    );
  }
}

GoBackButton.propTypes = {
  history: PropTypes.objectOf(createBrowserHistory).isRequired
};

export default GoBackButton;
