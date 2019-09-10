import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GoBackButton from '../sharedComponent/GoBackButton';

// eslint-disable-next-line react/prefer-stateless-function
class CreateQuestion extends Component {
  render() {
    const { history } = this.props;
    return (
      <div>
        <>CreateQuestion</>
        <GoBackButton history={history} />
        <Link to="/create-task/add-recipient"> Add recipient</Link>
        <Link to="/create-task/search-question"> Search Questions</Link>
      </div>
    );
  }
}

export default CreateQuestion;
