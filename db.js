import * as dotenv from 'dotenv';
dotenv.config();

import { Sequelize } from 'sequelize';
const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, { dialect: process.env.DB_DIALECT, host: process.env.DB_HOST });

export default sequelize;