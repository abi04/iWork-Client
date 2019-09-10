import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Options extends Component {
  render() {
    return (
      <>
        <span className="icon">
          <i className="far fa-heart" />
        </span>
        <span className="icon">
          <i className="fas fa-comments" />
        </span>
      </>
    );
  }
}

export default Options;
