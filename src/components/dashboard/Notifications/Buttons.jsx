import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Buttons extends Component {
  render() {
    return (
      <div className="buttons">
        <button type="button" className="button is-info is-rounded">
          Accept
        </button>
        <button type="button" className="button is-rounded">
          Reject
        </button>
      </div>
    );
  }
}

export default Buttons;
