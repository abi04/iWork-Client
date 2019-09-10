import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prefer-stateless-function
class DashboardNavBar extends Component {
  render() {
    const { match } = this.props;
    return (
      <div className="level">
        <div className="level-item">
          <div className="field">
            <Link to={`${match.path}/incomplete`}> Incomplete </Link>
          </div>
        </div>
        <div className="level-item">
          <Link to={`${match.path}/notifications`}>Notifications </Link>
        </div>
        <div className="level-item">
          <Link to={`${match.path}/history`}> History </Link>
        </div>
      </div>
    );
  }
}

export default DashboardNavBar;
