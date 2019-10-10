import React from 'react';
import ReactDOM from 'react-dom';
import Amplify, { Auth } from 'aws-amplify';
import AWSAppSyncClient, { AUTH_TYPE, createAppSyncLink } from 'aws-appsync';
import './styles/index.css';
import { BrowserRouter } from 'react-router-dom';
import { ApolloLink } from 'apollo-link';
import { ApolloProvider } from 'react-apollo';
import { Rehydrated } from 'aws-appsync-react';
import { withClientState } from 'apollo-link-state';

// import { ApolloClient } from 'apollo-client';
// import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';
import { typeDefs, resolvers } from './resolver';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import introspectionQueryResultData from './fragmentTypes.json';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData
});

const cache = new InMemoryCache({ fragmentMatcher });

const stateLink = withClientState({
  cache,
  defaults: {
    question: '',
    recipientList: []
  },
  resolvers,
  typeDefs
});

const client = new AWSAppSyncClient(
  {
    url: awsconfig.aws_appsync_graphqlEndpoint,
    region: awsconfig.aws_appsync_region,
    auth: {
      type: AUTH_TYPE.AMAZON_COGNITO_USER_POOLS,
      jwtToken: async () => (await Auth.currentSession()).getIdToken().getJwtToken()
    }
  },
  {
    cache,
    link: ApolloLink.from([
      stateLink,
      createAppSyncLink({
        url: awsconfig.aws_appsync_graphqlEndpoint,
        region: awsconfig.aws_appsync_region,
        auth: {
          type: AUTH_TYPE.AMAZON_COGNITO_USER_POOLS,
          jwtToken: async () => (await Auth.currentSession()).getIdToken().getJwtToken()
        }
      })
    ])
  }
);

// client.writeData({
//   data: {
//     question: '',
//     recipientList: []
//   }
// });

client.onResetStore(() => {
  client.writeData({
    data: {
      question: '',
      recipientList: []
    }
  });
});

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <Rehydrated>
        <App />
      </Rehydrated>
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
