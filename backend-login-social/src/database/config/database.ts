import { Options } from 'sequelize';
const pg = require('pg');

const config: Options = {
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'senhadatabase',
  database: process.env.DB_DATABASE || 'login_social_db',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 5432,
  dialect: 'postgres',
  dialectModule: pg,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    },
    timezone: 'Z',
  },
  logging: false,
};

export = config;
