import React from 'react';
import PropTypes from 'prop-types';

class Reviewer extends React.PureComponent {
  render() {
    const { reviewer } = this.props;
    const { isApproved } = reviewer;
    const reviewStatus = isApproved ? 'add-check-circle' : 'add-cross-circle';
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
