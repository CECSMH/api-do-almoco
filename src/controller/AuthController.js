import * as dotenv from 'dotenv';
dotenv.config();

import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import db from '../models/index.js';

export default new class AuthController {

    async login(req, res) {
        await db.Usuario.findOne({ where: { email: req.body.email } }).then(resp => {
            res.send(resp)
        })


    };


    async logout() {

    };
}