import React from 'react';
import { Mutation, withApollo } from 'react-apollo';
import { CREATE_TASK } from './Mutations';
import { GET_CACHE_DATA } from './Queries';
import { withRouter } from 'react-router-dom';

class SubmitTask extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      reviewers: []
    };
  }

  componentWillReceiveProps() {
    const { question, reviewers } = this.getCacheData();
    this.setState({ question, reviewers });
  }

  getCacheData = () => {
    const { client } = this.props;
    const { question, recipientList } = client.readQuery({
      query: GET_CACHE_DATA
    });
    const reviewers = recipientList.map(recipient => {
      return { reviewerID: recipient };
    });

    return { question, reviewers };
  };

  onMutationComplete = () => {
    const { client, history } = this.props;
    client.resetStore();
    history.push('/dashboard');
  };

  render() {
    const { question, reviewers } = this.state;
    const input = { question, reviewers };

    return (
      <div>
        <div className="buttons">
          <span className="button">Cancel</span>
          <Mutation
            mutation={CREATE_TASK}
            variables={{ input }}
            onCompleted={() => this.onMutationComplete()}
          >
            {createTask => {
              return (
                <span className="button is-info" onClick={createTask}>
                  Create
                </span>
              );
            }}
          </Mutation>
        </div>
      </div>
    );
  }
}

export default withApollo(withRouter(SubmitTask));
