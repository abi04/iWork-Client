import React from 'react';
import { Link } from 'react-router-dom';

class DashboardNavBar extends React.PureComponent {
  render() {
    const { match } = this.props;
    return (
      <div className="tabs is-toggle is-toggle-rounded is-fullwidth">
        <ul>
          <li>
            <Link to={`${match.path}/incomplete`}> Incomplete </Link>
          </li>
          <li>
            <Link to={`${match.path}/notifications`}>Notifications </Link>
          </li>
          <li>
            <Link to={`${match.path}/history`}> History </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default DashboardNavBar;
