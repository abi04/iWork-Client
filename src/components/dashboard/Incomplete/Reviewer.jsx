import React, { Component } from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
class Reviewer extends Component {
  render() {
    const { reviewer } = this.props;
    const { isReviewComplete } = reviewer;
    const reviewStatus = isReviewComplete ? 'add-check-circle' : 'add-cross-circle';
    return (
      <div className="level-item">
        <figure className={`image is-32x32 ${reviewStatus}`}>
          <img
            className="is-rounded"
            src="https://bulma.io/images/placeholders/128x128.png"
            alt="Profile"
            sizes="sm"
          />
        </figure>
      </div>
    );
  }
}

Reviewer.propTypes = {
  reviewer: PropTypes.object.isRequired
};

export default Reviewer;
