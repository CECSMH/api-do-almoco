
import * as dotenv from 'dotenv';
dotenv.config();

import { basename as _basename, dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { Sequelize, DataTypes } from 'sequelize';
import { readdirSync } from 'fs';
import connections from '../../config/config.js';

const __filename = new URL('', import.meta.url).pathname;
const __dirname = dirname(fileURLToPath(import.meta.url));
const basename = _basename(__filename);
const env = process.env.NODE_ENV || 'development';

const db = {}, config = connections[env];

const sequelize = new Sequelize(config.database, config.username, config.password, { dialect: config.dialect, host: config.host });

const files = readdirSync(__dirname).filter(file => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'));

for (var file of files) {
  const model = await import('./' + file);
  db[model.default.name] = model.default(sequelize, DataTypes);
};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
export default db;
