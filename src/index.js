import * as dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import validator from 'express-validator';
import cors from 'cors';
import db from './models/index.js';
import router from './routes.js';

const server = express();

const port = 3000;

server.use(cors());
server.use(express.json());
//server.use(validator());

db.sequelize.sync();

server.use('/api', router);

/* server.get('/', async (req, res) => {
    const teste = await db.Usuario.findByPk(1, { include: db.Transporte }).then(resp => {
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

    await db.Transporte.create({
        id_usuario: 1,
        qtd_lugares: 5
    }).then(resp => {
        console.log(resp)
    }).catch(err => console.log(err))
    
    res.send('criado')
})
 */

server.listen(port, () => {
    console.log('ONLINE! RODANDO NA PORTA ' + port);
})