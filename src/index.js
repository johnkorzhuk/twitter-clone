/* eslint-disable no-console */

import express from 'express';

import { createServer } from 'http';

import './config/db';
import middleware from './config/middleware';
import constants from './config/constants';
// import mocks from './mocks/index';

const app = express();

middleware(app);

const graphQLServer = createServer(app);
// mocks().then(() => {
graphQLServer.listen(constants.PORT, err => {
  if (err) console.error(err);
  else console.log(`Listening on port ${constants.PORT}`);
});
// });
