import * as Knex from 'knex';

let dburl;

switch (process.env.NODE_ENV) {
  case 'test':
    dburl = 'postgres://testdbuser:password@localhost:5432/pizzajerry';
    break;
  case 'prod':
    // rewrite dburl if the credentials are different for production
    break;
  default:
    throw new Error('NODE_ENV not recognized.');
}



const database = Knex({client: 'pg', connection: dburl});


export default database;
