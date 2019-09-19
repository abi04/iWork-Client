import React from 'react';
import PropTypes from 'prop-types';

 
class AdditionalReviewer extends  React.PureComponent {
  render() {
    const { number } = this.props;
    return (
      <div>
        <figure className="image is-32x32 rounded-box">
          <span>{`+${number}`}</span>
        </figure>
      </div>
    );
  }
}

AdditionalReviewer.propTypes = {
  number: PropTypes.number.isRequired
};

export default AdditionalReviewer;
