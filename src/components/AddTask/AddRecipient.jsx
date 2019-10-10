import React from 'react';
import { withApollo } from 'react-apollo';
import { Link } from 'react-router-dom';
import GoBackButton from '../sharedComponent/GoBackButton';
import RecipientList from './RecipientList';
import SelectedRecipientList from './SelectedRecipientList';

class AddRecipient extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
  }

  updateSearch = e => {
    this.setState({ search: e.target.value });
  };

  render() {
    const { search } = this.state;
    return (
      <div>
        <div className="level">
          <GoBackButton />
          Add Recipient
          <Link to="/create-task">next</Link>
        </div>
        <div className="field">
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Search Friends"
              value={search}
              onChange={this.updateSearch}
            />
          </div>
        </div>
        <div className="box">
          <SelectedRecipientList />
        </div>
        <RecipientList search={search} />
      </div>
    );
  }
}

export default withApollo(AddRecipient);
