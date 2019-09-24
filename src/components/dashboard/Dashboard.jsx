import React from 'react';
import { Route } from 'react-router-dom';
import IncompleteRequest from './Incomplete';
import Notifications from './Notifications/Notifications';
import History from './History';
import DashboardNavBar from './DashboardNavBar';
import Task from '../Task';

class Dashboard extends React.PureComponent {
  render() {
    const { match } = this.props;
    return (
      <div>
        <Task {...this.props} />

        <DashboardNavBar {...this.props} />

        <Route exact path={`${match.path}/incomplete`} component={IncompleteRequest} />
        <Route exact path={`${match.path}/notifications`} component={Notifications} />
        <Route exact path={`${match.path}/history`} component={History} />
      </div>
    );
  }
}

export default Dashboard;
