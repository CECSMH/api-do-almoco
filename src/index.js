import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';

const server = express();

const port = 3000;

server.use(cors());
server.use(express.json());

server.get('/', (req, res) => {
    console.log('teste')
    res.send('teste')
})


server.listen(port, () => {
    console.log('ONLINE! RODANDO NA PORTA ' + port);
})