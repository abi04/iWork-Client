import React from 'react';
import { Link } from 'react-router-dom';
import JoinRecipientList from './JoinRecipientList';
import SubmitTask from './SubmitTask';
import AddQuestion from './AddQuestion';
import GoBackButton from '../sharedComponent/GoBackButton';

class CreateQuestion extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      question: ''
    };
  }

  updateState = () => {
    this.setState({ question: 'new Value' });
  };

  render() {
    // const { history, match } = this.props;

    return (
      <div>
        <>CreateQuestion</>
        <Link to="/create-task/search-question"> Search Questions</Link>
        <nav className="panel">
          <div className="panel-block">
            <div className="navbar-menu">
              <div className="navbar-start">
                <GoBackButton />
              </div>

              <div>Create</div>
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

          <div className="panel-block">
            <AddQuestion updateState={this.updateState} />
          </div>
          <div className="panel-block">
            <SubmitTask />
          </div>
        </nav>
      </div>
    );
  }
}

export default CreateQuestion;
