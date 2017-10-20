/* eslint-disable no-console */

import express from 'express';
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import bodyParser from 'body-parser';
import { createServer } from 'http';

import './config/db';
import constants from './config/constants';
import typeDefs from './graphQL/schema';
import resolvers from './graphQL/resolvers/index';
import mocks from './mocks/index';

const app = express();

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

app.use(bodyParser.json());

app.use(
  '/graphiql',
  graphiqlExpress({
    endpointURL: constants.GRAPHQL_PATH,
  }),
);

app.use(
  constants.GRAPHQL_PATH,
  graphqlExpress({
    schema,
  }),
);

const graphQLServer = createServer(app);
mocks().then(() => {
  graphQLServer.listen(constants.PORT, err => {
    if (err) console.error(err);
    else console.log(`Listening on port ${constants.PORT}`);
  });
});
