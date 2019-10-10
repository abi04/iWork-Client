import React from 'react';
import Amplify from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react';
import '../styles/App.css';
import { Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router';
import CreateQuestion from './AddTask/CreateQuestion';
import Dashboard from './dashboard/Dashboard';
import AddRecipient from './AddTask/AddRecipient';
import SearchQuestions from './AddTask/SearchQuestions';
import 'bulma/css/bulma.css';
import NotFound from './NotFound';
import awsconfig from '../aws-exports';
import { signUpConfig } from './Auth/SignUpConfig';

Amplify.configure(awsconfig);

class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="columns">
            <div className="column">Auto</div>
            <div className="column">
              <Switch>
                <Route exact path="/" render={() => <Redirect to="/dashboard/incomplete" />} />
                <Route path="/dashboard" component={Dashboard} />
                <Route exact path="/create-task" component={CreateQuestion} />
                <Route path="/create-task/add-recipient" component={AddRecipient} />
                <Route path="/create-task/search-question" component={SearchQuestions} />
                <Route component={NotFound} />
              </Switch>
            </div>
            <div className="column">Auto</div>
          </div>
        </div>
      </div>
    );
  }
}

export default withAuthenticator(App, { signUpConfig });
