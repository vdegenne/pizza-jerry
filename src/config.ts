
// define NODE_ENV before anything else
let NODE_ENV: string;
if (!process.env.NODE_ENV ||
    !['test', 'dev', 'prod'].includes(process.env.NODE_ENV)) {
  NODE_ENV = 'dev';
} else {
  NODE_ENV = process.env.NODE_ENV;
}

export {NODE_ENV}
