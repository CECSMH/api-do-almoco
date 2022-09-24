import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import db from './models/index.js';

const server = express();

const port = 3000;

server.use(cors());
server.use(express.json());

db.sequelize.sync()

server.get('/', async (req, res) => {
    const teste = await db.Usuario.findByPk(1).then(resp => {
        console.log(resp.dataValues)
    }).catch(err => console.log(err))
    //console.log(teste)
    res.send('ce')
})

server.get('/cria', async (req, res) => {
     await db.Usuario.create({
        nome: 'carlos',
        email: 'teste',
        senha: '123s',
        pix: '1231231231',
        saldo: 0.1
    }).then(resp => {
        console.log(resp)
    }).catch(err => console.log(err))
    
    res.send('criado')
})


server.listen(port, () => {
    console.log('ONLINE! RODANDO NA PORTA ' + port);
})