require('dotenv/config');

const {
  DB_USER,
  DB_PASSWORD,
  DB_DATABASE,
  HOSTNAME,
} = process.env;

module.exports = {
  development: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    host: HOSTNAME,
    dialect: 'postgres',
  },
  test: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    host: HOSTNAME,
    dialect: 'postgres',
  },
  production: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    host: HOSTNAME,
    dialect: 'postgres',
  },
};
