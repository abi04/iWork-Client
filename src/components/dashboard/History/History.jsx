import React from 'react';
import PostList from './PostList';

class History extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      searchString: ''
    };
  }

  setSearchInput = e => {
    this.setState({ searchString: e.target.value });
  };

  render() {
    return (
      <div>
        <div className="field">
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Search Questions"
              value={this.state.searchString}
              onChange={this.setSearchInput}
            />
          </div>
        </div>

        <PostList searchString={this.state.searchString} />
      </div>
    );
  }
}

export default History;
