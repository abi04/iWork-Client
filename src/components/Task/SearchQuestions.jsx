import React from 'react';
import GoBackButton from '../sharedComponent/GoBackButton';

 
class SearchQuestions extends  React.PureComponent {
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
