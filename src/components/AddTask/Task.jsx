import React from 'react';

class Task extends React.PureComponent {
  render() {
    const { history } = this.props;
    return (
      <div className="panel">
        <article className="media">
          <figure className="media-left image is-128x128">
            <img
              className="is-rounded"
              src="https://bulma.io/images/placeholders/128x128.png"
              alt="Profile"
            />
          </figure>
          <div className="media-content" onClick={() => history.push('/create-task')}>
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
      </div>
    );
  }
}

export default Task;
