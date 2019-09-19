import gql from 'graphql-tag';
import { withApollo } from 'react-apollo';
import { GET_RECIPIENT_LIST } from './components/Task/Queries';

export const typeDefs = gql`
  extend type Query {
    question: String!
    recipientList: [ID!]!
  }

  extend type User {
    isInRecipientList: Boolean!
  }

  extend type Mutation {
    addOrRemoveFromRecipientList(id: ID!): [User!]
  }
`;

export const resolvers = {
  User: {
    isInRecipientList: (user, _, { cache }) => {
      const { recipientList } = cache.readQuery({ query: GET_RECIPIENT_LIST });
      return recipientList.includes(user.id);
    }
  },

  Mutation: {
    addOrRemoveFromRecipientList: (_, { id }, { cache, client }) => {
      const { recipientList } = cache.readQuery({ query: GET_RECIPIENT_LIST });
      const data = {
        recipientList: recipientList.includes(id)
          ? recipientList.filter(i => i !== id)
          : [...recipientList, id]
      };

      client.writeQuery({ query: GET_RECIPIENT_LIST, data });
      return data.recipientList;
    }
  }
};

export default withApollo({
  typeDefs,
  resolvers
});
