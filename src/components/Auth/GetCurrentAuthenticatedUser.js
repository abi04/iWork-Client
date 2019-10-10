import { Auth } from 'aws-amplify';

// eslint-disable-next-line import/prefer-default-export
export const currentUser = Auth.currentAuthenticatedUser().then(response => response);
