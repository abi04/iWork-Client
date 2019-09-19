import React from 'react';
import { Link } from 'react-router-dom';

class GoBackButton extends React.PureComponent {
  render() {
    // const { history } = this.props;
    return (
      <div>
        <Link to="/create-task">
          <i className="fas fa-backward" />
          Go back
        </Link>
      </div>
    );
  }
}

export default GoBackButton;
