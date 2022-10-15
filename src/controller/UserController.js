import bcrypt from 'bcryptjs';
import db from '../models/index.js';

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
        
        await db.Usuario.create(usuario).then(re => success(re)).catch(err => exception(err));
    };
}
