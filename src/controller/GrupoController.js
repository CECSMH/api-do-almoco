import db from "../models/index.js";

export default new class GrupoController {

    async create(req, res) {
        const grupo = {};

        grupo.nome = req.body.nome;
        grupo.lider_id = req.user.id;

        const exception = (err) => {
            if (err.name === 'SequelizeUniqueConstraintError') {
                return res.status(400).json({ status: 'bad request', msg: 'Você já possui um grupo.' });
            };
            return res.status(500).json({ status: 'internal server error', msg: 'Ocorreu um erro ao registrar usuário!' });
        };

        const success = (data) => {
            return res.status(200).json({ status: 'success', data });
        };

        await db.Grupos.create(grupo).then(re => success(re)).catch(err => exception(err));
    }

    async add_member(req, res){

    }
}