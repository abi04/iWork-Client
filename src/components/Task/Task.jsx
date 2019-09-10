import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Task extends Component {
  render() {
    return (
      <article className="media">
        <figure className="media-left image is-128x128">
          <img
            className="is-rounded"
            src="https://bulma.io/images/placeholders/128x128.png"
            alt="Profile"
          />
        </figure>
        <div className="media-content" onClick={() => this.props.history.push('/create-task')}>
          <div className="field">
            <p className="control">
              <textarea
                className="textarea has-text-centered"
                defaultValue="Create Task!!"
                readOnly
              />
            </p>
          </div>
        </div>
      </article>
    );
  }
}

export default Task;
