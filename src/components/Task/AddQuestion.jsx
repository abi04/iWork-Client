import React from 'react';
import { withApollo } from 'react-apollo';
import { GET_CACHE_DATA } from './Queries';

class AddQuestion extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      question: ''
    };
  }

  componentDidMount() {
    const question = this.updateQuestionValue();
    this.setState({ question });
  }

  updateCache = e => {
    const { client, updateState } = this.props;
    client.writeData({ data: { question: this.state.question } });
    updateState();
  };

  updateQuestionValue = () => {
    const { client } = this.props;
    const { question } = client.readQuery({
      query: GET_CACHE_DATA
    });

    return question;
  };

  render() {
    return (
      <div>
        <textarea
          className="textarea"
          placeholder="e.g. meal prep"
          onBlur={this.updateCache}
          onChange={e => this.setState({ question: e.target.value })}
          value={this.state.question}
        />
      </div>
    );
  }
}

export default withApollo(AddQuestion);
