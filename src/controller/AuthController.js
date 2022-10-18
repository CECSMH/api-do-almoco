import * as dotenv from 'dotenv';
dotenv.config();

import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import db from '../models/index.js';

export default new class AuthController {

    async login(req, res) {

        const success = (re) => {
            if (!re) return res.status(401).json({ status: 'unauthorized', msg: 'Id ou senha incorretos!' });

            if (!bcrypt.compareSync(req.body.senha, re.senha))
                return res.status(401).json({ status: 'unauthorized', msg: 'Id ou senha incorretos!' });

            const token = jwt.sign({ id: re.id }, process.env.JWT_SECRET, { expiresIn: 18000 });
            const user = {
                id: re.id,
                nome: re.nome,
                email: re.email,
                saldo: re.saldo
            };

            return res.status(200).json({ status: 'sucess', user, token });
        };

        const exception = err => {
            return res.status(500).json({ status: 'internal server error', msg: 'Ocorreu um erro interno no servidor!' });
        };

        await db.Usuario.findOne({ where: { email: req.body.email } }).then(success).catch(exception);
    };


    async logout() {

    };
}