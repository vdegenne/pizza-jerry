import * as express from 'express';
import {customerRouter} from './customer.router';

const api: express.Express = express();

// use morgan
if (!(process.env.NODE_ENV && process.env.NODE_ENV === 'test')) {
  api.use(require('morgan')('dev'));
}

api.use(express.json());

// routers
api.use('/customers', customerRouter);


export default api;
