import React from 'react';

 
class Buttons extends  React.PureComponent {
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
