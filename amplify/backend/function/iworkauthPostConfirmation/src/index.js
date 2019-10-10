/* Amplify Params - DO NOT EDIT
You can access the following resource attributes as environment variables from your Lambda function
var environment = process.env.ENV
var region = process.env.REGION
var authUserpoolUserPoolId = process.env.USERPOOLID

Amplify Params - DO NOT EDIT */ /*
  this file will loop through all js modules which are uploaded to the lambda resource,
  provided that the file names (without extension) are included in the "MODULES" env variable.
  "MODULES" is a comma-delimmited string.
*/

global.WebSocket = require('ws');
require('es6-promise').polyfill();
require('isomorphic-fetch');
const AWS = require('aws-sdk');
const { AWSAppSyncClient, AUTH_TYPE } = require('aws-appsync');
const { createUser } = require('./mutations');

const cognitoIdentityServiceProvider = new AWS.CognitoIdentityServiceProvider({
  apiVersion: '2016-04-18'
});

function getCredentials() {
  const initiateAuthParams = {
    AuthFlow: 'ADMIN_NO_SRP_AUTH',
    ClientId: process.env.CLIENTID,
    UserPoolId: process.env.USERPOOLID,
    AuthParameters: {
      USERNAME: process.env.ADMIN_USERNAME,
      PASSWORD: process.env.ADMIN_PASSWORD
    }
  };

  return cognitoIdentityServiceProvider
    .adminInitiateAuth(initiateAuthParams)
    .promise()
    .then(data => {
      return data;
    })
    .catch(console.log);
}

function getAppSyncClient() {
  const client = new AWSAppSyncClient({
    disableOffline: true,
    url: process.env.AWS_APPSYNC_GRAPHQL_ENDPOINT,
    region: process.env.REGION,
    auth: {
      type: AUTH_TYPE.AMAZON_COGNITO_USER_POOLS,
      jwtToken: async () => {
        const credentials = await getCredentials();
        console.log(`credentials ${credentials.AuthenticationResult.IdToken}`);
        return credentials.AuthenticationResult.IdToken;
      }
    }
  });
  return client;
}

exports.handler = (event, context, callback) => {
  console.log(event);
  const {
    request: { userAttributes },
    userName
  } = event;
  const appSyncClient = getAppSyncClient();
  const name = userAttributes.name.split(' ');

  const userInput = {
    input: {
      username: userName,
      email: userAttributes.email,
      firstName: name ? name[0] : name,
      lastName: name ? name[name.length - 1] : name
    }
  };

  appSyncClient.hydrated().then(client => {
    client
      .mutate({
        mutation: createUser,
        variables: userInput
      })
      .then(response => {
        console.log(response);
        return callback(null, event);
      })
      .catch(error => {
        console.log(error);
        callback(error, null);
      });
  });
};
