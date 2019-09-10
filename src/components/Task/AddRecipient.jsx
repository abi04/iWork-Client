import React, { Component } from 'react';
import GoBackButton from '../sharedComponent/GoBackButton';

// eslint-disable-next-line react/prefer-stateless-function
class AddRecipient extends Component {
  render() {
    return (
      <div>
        Add AddRecipient
        <GoBackButton history={this.props.history} />
      </div>
    );
  }
}

export default AddRecipient;
