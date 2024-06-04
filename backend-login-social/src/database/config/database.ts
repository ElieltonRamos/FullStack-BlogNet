import { Options } from 'sequelize';
const pg = require('pg');

const config: Options = {
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DATABASE || 'login_social_db',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 5432,
  dialect: 'postgres',
  dialectModule: pg,
  dialectOptions: {
    timezone: 'Z',
  },
  logging: false,
};

if (process.env.ENVIRONMENT === 'production') {
  config.dialectOptions = {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
    timezone: 'Z',
  };
}

export = config;
