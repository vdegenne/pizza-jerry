import * as Knex from 'knex';
import {NODE_ENV, PG_HOST} from './config';

let dburl;

switch (NODE_ENV) {
  case 'dev':
  case 'test':
    dburl = `postgres://testdbuser:password@${PG_HOST}:5432/pizzajerry`;
    break;
  case 'prod':
    // rewrite dburl if the credentials are different for production
    break;
}



const database = Knex({client: 'pg', connection: dburl});


export default database;
