import React, { Component } from 'react';
import moment from 'moment';

// eslint-disable-next-line react/prefer-stateless-function
class Content extends Component {
  render() {
    const {
      post: { question, createdAt, createdBy }
    } = this.props;
    const timeFromNow = moment(createdAt).fromNow();

    return (
      <div className="media">
        <div className="media-content">
          <p className="is-size-5 has-text-weight-semibold">
            Request from {'\t'}
            {createdBy.firstName} {createdBy.lastName}
          </p>
          <p>{question}</p>
          <p className="is-size-7">{timeFromNow}</p>
        </div>
      </div>
    );
  }
}

export default Content;
