import db from "../models/index.js";

export default new class GrupoController {

    async create(req, res) {
        const grupo = {};

        grupo.nome = req.body.nome;
        grupo.usuarioId = req.user.id;

        const exception = (err) => {
            return res.status(500).json({ status: 'internal server error', msg: 'Ocorreu um erro interno no servidor!' });
        };

        const success = async (data) => {
            await db.UsuarioGrupo.create({ usuarioId: req.user.id, grupoId: data.id, status: 'ST' }).then(() => {
                return res.status(200).json({ status: 'success', data });
            }).catch(exception);
        };

        await db.Grupos.findOne({ where: { usuarioId: req.user.id }, attributes: ['id'] }).then(async re => {
            if (!re) return await db.Grupos.create(grupo).then(re => success(re)).catch(err => exception(err));
            else return res.status(400).json({ status: 'bad request', msg: 'Você já possui um grupo.' });
        }).catch(exception);
    };


    async add_member(req, res) {

        const exception = (err) => {
            return res.status(500).json({ status: 'internal server error', msg: 'Ocorreu um erro interno no servidor!' });
        };

        const addMember = async (data) => {

            const [result, created] = await db.UsuarioGrupo.findOrCreate({ where: { usuarioId: req.body.user_id, grupoId: data.id } })

            if (created || result.status == 'PD') {

                result.update({ status: 'ST' });

                return res.status(200).json({ status: 'success', msg: 'Usuário adicionado com sucesso!' });

            } else return res.status(200).json({ status: 'already exists', msg: 'Usuário já está neste grupo!' });
        };

        const success = async (data) => {

            if (!data) return res.status(400).json({ status: 'bad request', msg: 'Você não possui um grupo!' });

            await db.Usuario.findOne({ where: { id: req.body.user_id } }).then((re) => {

                if (!re) return res.status(400).json({ status: 'bad request', msg: 'Usuário não existe!' });

                else return addMember(data);

            }).catch(exception);
        };

        await db.Grupos.findOne({ where: { usuarioId: req.user.id } }).then(success).catch(exception);
    };


    async get_members(req, res) {

        const [result, metadata] = await db.sequelize.query(`
            select usuarios.id, usuarios.nome from usuarios
            inner join usuario_grupos on usuario_grupos."usuarioId" = usuarios.id
            where "grupoId" = ${req.params.id} and usuario_grupos.status = 'ST'`);

        return res.status(200).json({ status: 'success', data: result });
    };


    async getAll(req, res) {

        const exception = (err) => {
            return res.status(500).json({ status: 'internal server error', msg: 'Ocorreu um erro interno no servidor!' });
        };

        const success = (data) => {
            return res.status(200).json({ status: 'success', data });
        };

        await db.Grupos.findAll({ attributes: ['id', 'nome'] }).then(success).catch(exception);
    };


    async request_enter(req, res) {

        const exception = (err) => {
            return res.status(500).json({ status: 'internal server error', msg: 'Ocorreu um erro interno no servidor!' });
        };

        const success = async (data) => {
            if (!data) return res.status(400).json({ status: 'bad request', msg: 'Grupo não existe!' });

            const [result, created] = await db.UsuarioGrupo.findOrCreate({ where: { usuarioId: req.user.id, grupoId: data.id } });

            if (created) return res.status(201).json({ status: 'success', msg: 'Solicitação criada com sucesso!' });

            if (result.status == 'ST') return res.status(200).json({ status: 'success', msg: 'Você já está neste grupo!' });

            if (result.status == 'PD') return res.status(200).json({ status: 'success', msg: 'Você já possui uma solicitação pendente para este grupo!' });
        };

        await db.Grupos.findByPk(req.body.grupo_id).then(success).catch(exception);
    };


    async get_all_requests(req, res) {
        const exception = (err) => {
            return res.status(500).json({ status: 'internal server error', msg: 'Ocorreu um erro ao registrar usuário!' });
        };

        const success = async (data) => {
            if (!data) return res.status(400).json({ status: 'bad request', msg: 'Você não possui um grupo!' });

            const [result, metadata] = await db.sequelize.query(`
                select usuarios.id, usuarios.nome from usuarios
                inner join usuario_grupos on usuario_grupos."usuarioId" = usuarios.id
                where "grupoId" = ${data.id} and usuario_grupos.status = 'PD'`);

            return res.status(200).json({ status: 'success', data: result });
        };

        await db.Grupos.findOne({ where: { usuarioId: req.user.id } }).then(success).catch(exception);
    };
};