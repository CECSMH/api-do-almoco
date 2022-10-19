import bcrypt from 'bcryptjs';
import db from '../models/index.js';
import { foreach } from '../utils/utils.js';

export default new class UserController {
    async create(req, res) {

        const usuario = {}, salt = bcrypt.genSaltSync();

        usuario.nome = req.body.nome;
        usuario.email = req.body.email;
        usuario.senha = bcrypt.hashSync(req.body.senha, salt);

        const exception = (err) => {
            if (err.name === 'SequelizeUniqueConstraintError') {
                return res.status(400).json({ status: 'bad request', msg: 'Já possui um cadastro com este email.' });
            };
            return res.status(500).json({ status: 'internal server error', msg: 'Ocorreu um erro ao registrar usuário!' });
        };

        const success = ({ pix, saldo, id, nome, email }) => {
            return res.status(200).json({ status: 'success', data: { pix, saldo, id, nome, email } });
        };

        await db.Usuario.create(usuario).then(success).catch(exception);
    };

    async update(req, res) {
        const user = {};

        foreach(['pix', 'nome', 'email', 'senha_atual', 'nova_senha', 'mac'], e => req.body[e] && (user[e] = req.body[e]));

        if (user.email || user.nova_senha) {

            if (!bcrypt.compareSync(String(user.senha_atual), req.user.senha)) return res.status(401).json({ status: 'unauthorized', msg: 'Senha incorreta!' });

            if (user.senha_atual == user.nova_senha) return res.status(400).json({ status: 'bad request', msg: 'A nova senha não pode ser igual a anterior!' });

            if (user.nova_senha) user.senha = bcrypt.hashSync(String(user.nova_senha), bcrypt.genSaltSync());
        };

        delete user.nova_senha;
        delete user.senha_atual;

        req.user.update(user).then(({ id, nome, email, pix, saldo, mac }) => {
            return res.status(200).json({ status: 'success', data: { id, nome, email, pix, saldo, mac } });

        }).catch(err => res.status(500).json({ status: 'internal server error', msg: 'Ocorreu um erro ao registrar usuário!' }));
    };
};
