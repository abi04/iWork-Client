import React from 'react';
import '../styles/App.css';
import { Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router';
import CreateQuestion from './Task/CreateQuestion';
import Dashboard from './dashboard/Dashboard';
import AddRecipient from './Task/AddRecipient';
import SearchQuestions from './Task/SearchQuestions';
import 'bulma/css/bulma.css';
import 'bulma-badge/dist/css/bulma-badge.min.css';
import NotFound from './NotFound';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="columns">
          <div className="column">Auto</div>
          <div className="column">
            <Switch>
              <Route exact path="/" render={() => <Redirect to="/dashboard" />} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/create-task" component={CreateQuestion} />
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

export default App;
