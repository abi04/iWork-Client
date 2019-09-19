import React from 'react';
import Proptypes from 'prop-types';
import moment from 'moment';

 
class TaskNameAndTimeStamp extends  React.PureComponent {
  render() {
    const { question, createdAt } = this.props;
    const timeFromNow = moment(createdAt).fromNow();
    return (
      <div className="media is-clipped">
        <div className="media-content">
          <p>{question}</p>
          <p className="is-size-7">{timeFromNow}</p>
        </div>
      </div>
    );
  }
}

TaskNameAndTimeStamp.propTypes = {
  question: Proptypes.string.isRequired,
  createdAt: Proptypes.string.isRequired
};

export default TaskNameAndTimeStamp;
