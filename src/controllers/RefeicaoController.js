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


    async add_participant(req, res) {
        try {
            const [re, metadata] = await db.sequelize.query(`
            select refeicoes.* from refeicoes
            inner join grupos on grupos.id = refeicoes."grupoId"
            inner join usuario_grupos on grupos.id = usuario_grupos."grupoId"
            where usuario_grupos."usuarioId" = ${req.user.id} and refeicoes.id = ${req.body.refeicao_id}`);

            if (!re[0]) return res.status(400).json({ status: 'bad request', msg: 'Refeição não encontrada!' });

            const [result, created] = await db.UsuarioRefeicao.findOrCreate({ where: { usuarioId: req.user.id, refeicoId: re[0].id } });

            if (created) return res.status(200).json({ status: 'success', msg: 'Você foi adicionado com sucesso!' });

            else return res.status(200).json({ status: 'already exists', msg: 'Você já está nesta refeição!' });
        } catch (err) {
            return res.status(500).json({ status: 'internal server error', msg: 'Ocorreu um erro no servidor!' });
        };
    };


    async get_all_participants(req, res) {
        try {
            const [re, metadata] = await db.sequelize.query(`
            select usuarios.id, usuarios.nome from usuarios 
            inner join usuario_refeicaos on usuarios.id = usuario_refeicaos."usuarioId" 
            where usuario_refeicaos."refeicoId" = ${req.params.id}`);

            return res.status(200).json({ status: 'success', data: re });
        } catch (err) {
            return res.status(500).json({ status: 'internal server error', msg: 'Ocorreu um erro no servidor!' });
        };
    };
};