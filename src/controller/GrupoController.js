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

    async add_member(req, res) {

        const exception = (err) => {
            console.log(err.message)
            return res.status(500).json({ status: 'internal server error', msg: 'Ocorreu um erro ao registrar usuário!' });
        };

        const addMember = async (data) => {
            await data.addUsuario(req.body.user_id).then(() => {
                return res.status(200).json({ status: 'success', msg: 'Usuário adicionado com sucesso!' });
            });
        };

        const success = async (data) => {
            await db.Usuario.findOne({
                include: { model: db.Grupos, as: 'grupos', required: true },
                where: { id: req.body.user_id }
            }).then((re) => {

                if (!re) addMember(data);
                else return res.status(200).json({ status: 'already exists', msg: 'Usuário já está neste grupo!' });

            }).catch(exception);
        };

        await db.Grupos.findOne({ where: { lider_id: req.user.id } }).then(success).catch(exception);
    };


    async getAll(req, res) {
        await db.Grupos.findAll({
            include: { model: db.Usuario, as: 'usuario'},
          // where: {usuarioId: req.user.id}
        }).then((re) => {
            res.json(re)
        })

        /* select * from usuarios
inner join usuario_grupos on usuario_grupos."usuarioId" = usuarios.id
where "grupoId" = 1 */
    };
};