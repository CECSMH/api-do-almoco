import * as dotenv from 'dotenv';
dotenv.config();

import { Sequelize } from 'sequelize';

import connections from '../../config/config.js';

const env = process.env.NODE_ENV || 'development';

const config = connections[env]

const sequelize = new Sequelize(config.database, config.username, config.password, { dialect: config.dialect, host: config.host });
export default sequelize;