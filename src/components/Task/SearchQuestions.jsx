import React, { Component } from 'react';
import GoBackButton from '../sharedComponent/GoBackButton';

// eslint-disable-next-line react/prefer-stateless-function
class SearchQuestions extends Component {
  render() {
    return (
      <div>
        Search Questions
        <GoBackButton history={this.props.history} />
      </div>
    );
  }
}

export default SearchQuestions;
