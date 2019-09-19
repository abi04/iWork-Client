import React from 'react';
import PropTypes from 'prop-types';
import Reviewer from './Reviewer';
import AdditionalReviewer from './AdditionalReviewer';

 
class ReviewerList extends  React.PureComponent {
  render() {
    const { reviewers } = this.props;
    const numberOfReviewerPriview = 3;
    const additionalReviwer =
      reviewers.length > numberOfReviewerPriview ? reviewers.length - numberOfReviewerPriview : 0;
    return (
      <div className="level">
        {reviewers.map((reviewer, index) => {
          if (index < numberOfReviewerPriview) return <Reviewer key={index} reviewer={reviewer} />;
          if (index < numberOfReviewerPriview + 1)
            return <AdditionalReviewer key={index} number={additionalReviwer} />;
          return <div />;
        })}
      </div>
    );
  }
}

ReviewerList.propTypes = {
  reviewers: PropTypes.array.isRequired
};

export default ReviewerList;
