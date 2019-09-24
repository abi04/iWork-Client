import React from 'react';
import { NavLink } from 'react-router-dom';

class DashboardNavBar extends React.PureComponent {
  render() {
    const { match } = this.props;
    return (
      <div className="tabs is-toggle is-toggle-rounded is-fullwidth">
        <ul>
          <li>
            <NavLink to={`${match.path}/incomplete`} activeClassName="is-active">
              Incomplete
            </NavLink>
          </li>
          <li>
            <NavLink to={`${match.path}/notifications`} activeClassName="is-active">
              Notifications
            </NavLink>
          </li>
          <li>
            <NavLink to={`${match.path}/history`} activeClassName="is-active">
              History
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default DashboardNavBar;
