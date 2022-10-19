import db from "../models/index.js";

export default new class RefeicaoController {

    async create(req, res) {
        const refeicao = {};

        refeicao.usuarioId = req.user.id;
        refeicao.grupoId = req.body.grupo_id;
        refeicao.status = 'A';
        refeicao.data = req.body.data;

        const exception = (err) => {
            return res.status(500).json({ status: 'internal server error', msg: 'Ocorreu um erro no servidor!' });
        };

        const success = (data) => {
            return res.status(201).json({ status: 'created', msg: 'Refeição criada com sucesso!' })
        };

        await db.Refeicao.create(refeicao).then(success).then(exception)
    };


    async getAll(req, res) {

        const exception = (err) => {
            return res.status(500).json({ status: 'internal server error', msg: 'Ocorreu um erro no servidor!' });
        };

        const success = (data) => {
            return res.status(200).json({ status: 'success', data })
        };

        await db.Refeicao.findAll({
            where: { grupoId: req.params.id },
            attributes: ['id', 'data', 'status'],
            include: [{ model: db.Usuario, as: 'usuario', attributes: ['id', 'nome'] }]
        }).then(success).catch(exception);
    };
};