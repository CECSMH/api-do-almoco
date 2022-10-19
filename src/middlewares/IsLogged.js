import * as dotenv from 'dotenv';
dotenv.config();

import jwt from 'jsonwebtoken';
import db from '../models/index.js';

export default function IsLogged(req, res, next) {

    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];

    if (!token) return res.status(401).json({ status: 'unauthorized', msg: 'token não informado!' });

    jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {

        if (err) {
            if (err.name === 'TokenExpiredError') return res.status(401).json({ status: 'unauthorized', msg: 'token expirado!' });

            return res.status(401).json({ status: 'unauthorized', msg: 'token invalido!' });
        };

        if (decoded) {
            let user;

            await db.Usuario.findByPk(decoded.id).then(re => user = re).catch(err => { return });

            if(user){
                req.user = user;
                return next();
            };
        };

        return res.status(401).json({ status: 'unauthorized', msg: 'token invalido!' });
    });
};