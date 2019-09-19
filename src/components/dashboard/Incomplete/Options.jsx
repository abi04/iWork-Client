import React from 'react';

 
class Options extends  React.PureComponent {
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
