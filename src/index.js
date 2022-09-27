import * as dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import db from './models/index.js';
import router from './routes.js';

const server = express();
const port = 3000;

server.use(cors());
server.use(express.json());

db.sequelize.sync();

server.use('/api', router);

server.listen(port, () => {
    console.log('ONLINE! RODANDO NA PORTA ' + port);
})