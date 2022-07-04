require('dotenv/config');

const {
  MYSQL_USER,
  MYSQL_PASSWORD,
  MYSQL_DATABASE,
  HOSTNAME,
} = process.env;

module.exports = {
  development: {
    username: MYSQL_USER,
    password: MYSQL_PASSWORD,
    database: MYSQL_DATABASE,
    host: HOSTNAME,
    dialect: 'postgres',
  },
  test: {
    username: MYSQL_USER,
    password: MYSQL_PASSWORD,
    database: MYSQL_DATABASE,
    host: HOSTNAME,
    dialect: 'postgres',
  },
  production: {
    username: MYSQL_USER,
    password: MYSQL_PASSWORD,
    database: MYSQL_DATABASE,
    host: HOSTNAME,
    dialect: 'postgres',
  },
};
