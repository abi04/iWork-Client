import React from 'react';
import { Link } from 'react-router-dom';
import JoinRecipientList from './JoinRecipientList';
// import GoBackButton from '../sharedComponent/GoBackButton';

class CreateQuestion extends React.PureComponent {
  render() {
    // const { history, match } = this.props;

    return (
      <div>
        <>CreateQuestion</>
        <Link to="/create-task/search-question"> Search Questions</Link>
        <nav className="panel">
          <div className="panel-block">
            <div className="navbar-menu">
              <div className="navbar-start">Go Back</div>

              <div>Create Task</div>
              <div className="navbar-end">
                <span className="panel-icon">
                  <i className="fas fa-search" aria-hidden="true" />
                </span>
              </div>
            </div>
          </div>

          <div className="panel-block">
            <Link to="/create-task/add-recipient">
              <JoinRecipientList />
            </Link>
          </div>

          <div className="panel-block is-active">
            <span className="panel-icon">
              <i className="fas fa-book" aria-hidden="true" />
            </span>
            bulma
          </div>
          <div className="panel-block">
            <span className="panel-icon">
              <i className="fas fa-book" aria-hidden="true" />
            </span>
            marksheet
          </div>
        </nav>
      </div>
    );
  }
}

export default CreateQuestion;
