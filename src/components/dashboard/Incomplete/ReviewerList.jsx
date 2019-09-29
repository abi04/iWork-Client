import React from 'react';
import PropTypes from 'prop-types';
import Reviewer from './Reviewer';
import AdditionalReviewer from './AdditionalReviewer';

class ReviewerList extends React.PureComponent {
  componentDidMount() {
    const { isCompletedPost, completePostMutation } = this.props;
    if (isCompletedPost) {
      completePostMutation();
    }
  }

  render() {
    const { reviewers } = this.props;
    const numberOfPreview = 3;
    const additionalReviwer =
      reviewers.length > numberOfPreview ? reviewers.length - numberOfPreview : 0;
    return (
      <div className="level">
        {reviewers.map((reviewer, index) => {
          if (index < numberOfPreview) return <Reviewer key={index} reviewer={reviewer} />;
          if (index < numberOfPreview + 1)
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

ReviewerList.defaulProps = {
  isCompletedPost: false
};

export default ReviewerList;
